import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight, Sparkles } from "lucide-react";
import { getBlogBySlug, getBlogIndex, getRelatedBlogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { BlogCard } from "@/components/blog/BlogCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Direct database writes (seeding scripts) are picked up within this window;
// admin create/edit/delete call revalidatePath and appear immediately.
export const revalidate = 300;

export async function generateStaticParams() {
  // Prebuild whatever the database holds at build time; anything added later
  // renders on demand (dynamicParams defaults to true).
  const entries = await getBlogIndex();
  return entries.map(({ slug }) => ({ slug }));
}

const getPost = getBlogBySlug;

const toIso = (value?: string): string | undefined => {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const clamp = (text: string, max: number) =>
    text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
  const rawDescription = post.seoDescription ?? post.excerpt;
  const description =
    typeof rawDescription === "string" ? clamp(rawDescription, 155) : undefined;
  // The root template appends " | HumNikah" (11 chars); posts with a seoTitle
  // supply the full title tag themselves.
  const title = post.seoTitle ?? clamp(post.title, 49);

  return buildMetadata({
    title,
    absoluteTitle: post.seoTitle ?? undefined,
    description: description ?? title,
    path: `/blog/${slug}`,
    // Hotlinked stock photos make poor share images; fall back to the brand image.
    image: post.image?.includes("images.unsplash.com") ? undefined : post.image,
    type: "article",
    publishedTime: toIso(post.created_at ?? post.publishedAt ?? undefined),
    modifiedTime: toIso(post.updated_at ?? post.created_at ?? post.publishedAt ?? undefined),
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogs(slug, 3);

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const datePublished = toIso(post.created_at ?? post.publishedAt ?? undefined);
  const dateModified = toIso(post.updated_at ?? undefined);
  const authorName: string | undefined = post.author?.name;
  const authorImageAlt = post.author?.name || "HumNikah team";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image ? [post.image] : undefined,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: authorName && authorName !== "HumNikah Editorial Team"
          ? { "@type": "Person", name: authorName }
          : { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: canonicalUrl,
      },
      ...(Array.isArray(post.faqs) && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq: { q: string; a: string }) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
        ],
      },
    ],
  };

  const cleanedContent = post.content ? post.content.replace(/^---[\s\S]*?---\s*/, "") : "";

  return (
    <main className="min-h-screen bg-brand-cream pb-16 sm:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Banner & Header */}
      <section className="bg-[#1D184C] text-white py-8 sm:py-12 border-b border-brand-gold/20 relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#651514]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4 flex-wrap">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <Link href="/blog" className="hover:text-brand-gold transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-[#F3B979] font-medium truncate max-w-[200px] sm:max-w-[350px]">
              {post.title}
            </span>
          </nav>

          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[11px] font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-white leading-tight sm:leading-tight mb-4">
            {post.title}
          </h1>

          {/* Author & Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              {post.author?.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={authorImageAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover border border-brand-gold/40"
                />
              )}
              <div>
                <p className="font-semibold text-white text-xs">{post.author?.name}</p>
                <p className="text-[10px] text-slate-400">{post.author?.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-brand-gold" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-brand-gold" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Container */}
      <article className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Back Link */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald hover:text-brand-gold transition-colors bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-brand-border/60"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>
        </div>

        {/* Featured image: full article width, and never cropped — the heroes
            are 16:9, so h-auto shows the whole frame. */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-brand-border/80 mb-6 sm:mb-8 bg-brand-beige">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-brand-border/60">
          <div
            className="blog-body prose prose-emerald sm:prose-lg max-w-none 
              prose-headings:font-playfair prose-headings:font-bold prose-headings:text-brand-charcoal 
              prose-h2:text-xl prose-h2:sm:text-2xl lg:prose-h2:text-3xl prose-h2:mt-7 prose-h2:mb-3.5 prose-h2:border-b prose-h2:border-brand-border/40 prose-h2:pb-2
              prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-6 prose-h3:mb-2.5
              prose-p:text-brand-secondary prose-p:text-sm prose-p:sm:text-base prose-p:font-light prose-p:leading-relaxed prose-p:mb-4
              prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:bg-brand-cream/80 prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:font-playfair prose-blockquote:italic prose-blockquote:text-brand-charcoal prose-blockquote:text-sm prose-blockquote:sm:text-base
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2 prose-ul:text-sm prose-ul:sm:text-base prose-ul:text-brand-secondary
              prose-strong:text-brand-charcoal prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          {/* Next steps */}
          <aside className="mt-8 rounded-xl border border-brand-border/70 bg-brand-cream/70 p-5 text-sm text-brand-charcoal">
            <p className="font-semibold mb-2">Ready to begin your search?</p>
            <p className="text-brand-secondary leading-relaxed">
              Explore{" "}
              <Link href="/muslim-matrimony-india" className="text-brand-gold font-semibold hover:underline">
                Muslim matrimony in India
              </Link>{" "}
              or{" "}
              <Link href="/muslim-matrimony/bengaluru" className="text-brand-gold font-semibold hover:underline">
                Muslim matrimony in Bengaluru
              </Link>
              , then{" "}
              <Link href="/submit-biodata" className="text-brand-gold font-semibold hover:underline">
                submit your biodata
              </Link>{" "}
              and a matchmaker will contact you.
            </p>
          </aside>

          {/* Tags */}
          <div className="mt-8 pt-5 border-t border-brand-border/50 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-brand-secondary flex items-center gap-1 mr-1">
              <Tag size={13} className="text-brand-gold" /> Tags:
            </span>
            {post.tags && post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-brand-beige rounded-md text-[11px] font-medium text-brand-charcoal"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-6 bg-brand-cream/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-brand-border/80 flex items-center gap-3.5">
            {post.author?.avatar && (
              <Image
                src={post.author.avatar}
                alt={authorImageAlt}
                width={48}
                height={48}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-brand-gold flex-shrink-0"
              />
            )}
            <div>
              <p className="text-xs sm:text-sm font-bold text-brand-charcoal">{post.author?.name}</p>
              <p className="text-[11px] text-brand-gold font-semibold">{post.author?.role}</p>
              <p className="text-[11px] text-brand-secondary font-light mt-0.5 line-clamp-2">
                Providing authentic Islamic guidance for single Muslims, parents, and newlyweds embarking on Nikah.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Nikah Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-12 border-t border-brand-border/60">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Keep Reading
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Related Nikah Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-border bg-white text-sm font-semibold text-brand-charcoal hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              View all articles <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
