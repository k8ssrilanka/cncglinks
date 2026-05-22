import Image from "next/image";
import type { CommunityInfo } from "@/types/config";

interface CommunityHeaderProps {
  community: CommunityInfo;
}

export default function CommunityHeader({ community }: CommunityHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center pt-12 pb-6 px-4">
      {community.logoUrl && (
        <div className="relative w-28 h-28 mb-4 rounded-2xl p-3 bg-gray-700">
          <Image
            src={community.logoUrl}
            alt={`${community.name} logo`}
            fill
            className="object-contain"
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
