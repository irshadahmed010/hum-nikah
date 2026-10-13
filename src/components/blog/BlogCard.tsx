import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogRecord } from "@/lib/blogs";

/**
 * The single blog card used by both the /blog listing and the "Related Nikah
 * Articles" block on a post page, so the two cannot drift apart visually.
 */
export function BlogCard({
  post,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  post: BlogRecord;
  sizes?: string;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group h-full flex flex-col">
      <div className="bg-white rounded-2xl border border-brand-border/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          {/* Image */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-beige">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              sizes={sizes}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md bg-[#1D184C]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 text-[11px] text-brand-secondary mb-2.5">
              <span className="flex items-center gap-1">
                <Calendar size={12} className="text-brand-gold" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-brand-gold" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-playfair font-bold text-brand-charcoal group-hover:text-brand-gold transition-colors leading-snug mb-2 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed line-clamp-3 font-light">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 pt-0 mt-auto flex items-center justify-between border-t border-brand-border/40 pt-4">
          <div className="flex items-center gap-2">
            {post.author?.avatar && (
              <Image
                src={post.author.avatar}
                alt={post.author.name || "HumNikah team"}
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-cover border border-brand-gold/30"
              />
            )}
            <span className="text-[11px] font-semibold text-brand-charcoal truncate max-w-[110px]">
              {post.author?.name ?? "HumNikah Editorial Team"}
            </span>
          </div>

          <span className="text-xs font-semibold text-brand-emerald group-hover:underline flex items-center gap-1">
            Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
