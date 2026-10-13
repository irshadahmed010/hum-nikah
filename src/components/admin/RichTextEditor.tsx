"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Code2, Pencil } from "lucide-react";
import "quill/dist/quill.snow.css";

/**
 * Quill editor for the admin blog forms.
 *
 * Quill is loaded client-side only (it touches `document` at construction).
 * The cleaned HTML is mirrored into a hidden input so the existing
 * `new FormData(form)` flow in the create/edit pages keeps working unchanged.
 *
 * There is also an HTML mode. Quill's toolbar has no table support, so opening
 * one of the long imported guides in rich-text mode and saving would drop its
 * comparison tables. HTML mode lets those posts be edited losslessly.
 */

const TOOLBAR = [
  [{ header: [2, 3, false] }],
  ["bold", "italic", "underline"],
  [{ list: "bullet" }, { list: "ordered" }],
  ["blockquote", "code-block"],
  ["link"],
  ["clean"],
];

/** Markup Quill would discard, so the post is safer to edit as HTML. */
function hasUnsupportedMarkup(html: string): boolean {
  return /<(table|pre|iframe|style)\b/i.test(html);
}

/**
 * Quill 2 renders *both* list kinds as `<ol><li data-list="bullet">` and injects
 * `<span class="ql-ui">` markers. The public blog page styles semantic markup,
 * so convert to real `<ul>`/`<ol>` and drop Quill's own classes before saving.
 */
function normalizeEditorHtml(html: string): string {
  const root = document.createElement("div");
  root.innerHTML = html;

  // 1. Quill's injected UI markers carry no content.
  root.querySelectorAll("span.ql-ui").forEach((el) => el.remove());

  // 2. Split each <ol> into runs of <ul>/<ol> based on data-list.
  root.querySelectorAll("ol").forEach((ol) => {
    const items = Array.from(ol.children);
    if (items.length === 0) return;

    const groups: HTMLElement[] = [];
    let current: HTMLElement | null = null;
    let currentTag: string | null = null;

    items.forEach((li) => {
      const tag = li.getAttribute("data-list") === "bullet" ? "ul" : "ol";
      if (tag !== currentTag) {
        current = document.createElement(tag);
        groups.push(current);
        currentTag = tag;
      }
      li.removeAttribute("data-list");
      current!.appendChild(li);
    });

    ol.replaceWith(...groups);
  });

  // 3. Strip Quill's styling classes (ql-indent-*, ql-syntax, ...).
  root.querySelectorAll("[class]").forEach((el) => {
    const kept = Array.from(el.classList).filter((c) => !c.startsWith("ql-"));
    if (kept.length > 0) el.className = kept.join(" ");
    else el.removeAttribute("class");
  });

  // 4. Drop trailing empty paragraphs Quill leaves behind.
  return root.innerHTML.replace(/(<p><br><\/p>)+$/g, "").trim();
}

export function RichTextEditor({
  name = "content",
  defaultValue = "",
  placeholder = "Write the article here...",
}: {
  name?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<import("quill").default | null>(null);

  const [html, setHtml] = useState(defaultValue);
  const [ready, setReady] = useState(false);
  // Imported guides contain tables; default those to HTML mode to avoid data loss.
  const [mode, setMode] = useState<"rich" | "html">(
    hasUnsupportedMarkup(defaultValue) ? "html" : "rich",
  );

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { default: Quill } = await import("quill");
      if (cancelled || !holderRef.current || quillRef.current) return;

      const quill = new Quill(holderRef.current, {
        theme: "snow",
        placeholder,
        modules: { toolbar: TOOLBAR },
      });
      quillRef.current = quill;

      if (defaultValue) {
        quill.clipboard.dangerouslyPasteHTML(defaultValue, "silent");
      }

      quill.on("text-change", () => {
        // An "empty" Quill document still contains a <br> placeholder.
        setHtml(
          quill.getText().trim().length === 0
            ? ""
            : normalizeEditorHtml(quill.root.innerHTML),
        );
      });

      setReady(true);
    })();

    return () => {
      cancelled = true;
      quillRef.current?.off("text-change");
    };
    // Mount once: re-running would discard the editor's own state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchTo = useCallback(
    (next: "rich" | "html") => {
      if (next === "rich" && quillRef.current) {
        // Load whatever the HTML box now holds back into Quill.
        quillRef.current.clipboard.dangerouslyPasteHTML(html, "silent");
      }
      setMode(next);
    },
    [html],
  );

  const tabClass = (active: boolean) =>
    `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
      active
        ? "bg-[#1D184C] text-white"
        : "bg-white text-brand-charcoal border border-brand-border hover:border-brand-gold"
    }`;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => switchTo("rich")} className={tabClass(mode === "rich")}>
          <Pencil size={13} /> Rich text
        </button>
        <button type="button" onClick={() => switchTo("html")} className={tabClass(mode === "html")}>
          <Code2 size={13} /> HTML
        </button>
      </div>

      {/* Quill stays mounted so its state survives switching tabs. */}
      <div
        className="rounded-lg border border-brand-border bg-white overflow-hidden"
        style={{ display: mode === "rich" ? "block" : "none" }}
      >
        <div ref={holderRef} style={{ minHeight: 320 }} />
      </div>

      {mode === "html" && (
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          rows={18}
          className="w-full px-3 py-3 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none text-xs font-mono resize-y"
          placeholder="<h2>Subheading</h2><p>Paragraph...</p>"
        />
      )}

      {/* The form reads this, not the Quill DOM. */}
      <input type="hidden" name={name} value={html} />

      <p className="text-[11px] text-slate-500">
        {mode === "html"
          ? "HTML mode keeps tables and code blocks intact. Rich text mode cannot edit tables."
          : ready
            ? "Use Heading 2 for main sections and Heading 3 for sub-sections."
            : "Loading editor..."}
      </p>
    </div>
  );
}

export default RichTextEditor;
