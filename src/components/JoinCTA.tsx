import type { JoinCta } from "@/types/config";
import { UserPlus } from "lucide-react";

interface JoinCTAProps {
  cta: JoinCta;
}

export default function JoinCTA({ cta }: JoinCTAProps) {
  const isPrimary = cta.style !== "outline";

  return (
    <div className="w-full py-2">
      <a
        href={cta.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-xl font-semibold text-sm transition-all ${
          isPrimary
            ? "bg-[var(--theme-color)] text-white hover:opacity-90 shadow-md hover:shadow-lg"
            : "border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white"
        }`}
      >
        <UserPlus size={18} />
        {cta.label}
      </a>
    </div>
  );
}
