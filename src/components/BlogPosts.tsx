import Image from "next/image";
import type { BlogPost } from "@/types/config";
import SectionWrapper from "@/components/SectionWrapper";
import { ExternalLink } from "lucide-react";

interface BlogPostsProps {
  posts: BlogPost[];
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr + "T00:00:00"));
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <SectionWrapper title="Blog Posts">
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-[var(--theme-color)] hover:shadow-sm transition-all group"
          >
            {post.coverImageUrl && (
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[var(--theme-color)] transition-colors line-clamp-2">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-400">
                {post.author && <span>{post.author}</span>}
                {post.author && post.publishedAt && (
                  <span className="text-gray-300">·</span>
                )}
                {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              </div>
            </div>
            <ExternalLink
              size={14}
              className="flex-shrink-0 text-gray-300 group-hover:text-[var(--theme-color)] transition-colors mt-0.5"
            />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
