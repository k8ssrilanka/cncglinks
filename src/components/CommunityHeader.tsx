import Image from "next/image";
import type { CommunityInfo } from "@/types/config";

interface CommunityHeaderProps {
  community: CommunityInfo;
}

export default function CommunityHeader({ community }: CommunityHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center pt-12 pb-6 px-4">
      {community.logoUrl && (
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-[var(--theme-color)] ring-offset-2">
          <Image
            src={community.logoUrl}
            alt={`${community.name} logo`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-900 leading-tight max-w-sm">
        {community.name}
      </h1>
      {community.tagline && (
        <p className="mt-2 text-base font-medium text-[var(--theme-color)]">
          {community.tagline}
        </p>
      )}
      {community.description && (
        <p className="mt-3 text-sm text-gray-600 max-w-md leading-relaxed">
          {community.description}
        </p>
      )}
    </header>
  );
}
