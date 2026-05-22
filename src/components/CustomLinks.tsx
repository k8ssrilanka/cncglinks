import type { CustomLink } from "@/types/config";
import { ExternalLink } from "lucide-react";

interface CustomLinksProps {
  links: CustomLink[];
}

export default function CustomLinks({ links }: CustomLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white hover:border-[var(--theme-color)] hover:shadow-sm transition-all text-gray-800 font-medium text-sm group"
        >
          <span className="flex items-center gap-2.5">
            {link.icon && (
              <span className="text-base leading-none">{link.icon}</span>
            )}
            {link.label}
          </span>
          <ExternalLink
            size={15}
            className="text-gray-400 group-hover:text-[var(--theme-color)] transition-colors"
          />
        </a>
      ))}
    </div>
  );
}
