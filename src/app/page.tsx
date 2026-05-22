import { getCommunityConfig } from "@/lib/config";
import CommunityHeader from "@/components/CommunityHeader";
import SocialLinks from "@/components/SocialLinks";
import CustomLinks from "@/components/CustomLinks";
import JoinCTA from "@/components/JoinCTA";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";
import BlogPosts from "@/components/BlogPosts";

export default function Page() {
  const config = getCommunityConfig();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="max-w-lg mx-auto px-4 pb-16">
        <CommunityHeader community={config.community} />

        <div className="flex flex-col gap-4 mt-2">
          {config.social && <SocialLinks social={config.social} />}
          {config.joinCta && <JoinCTA cta={config.joinCta} />}
          {config.links && config.links.length > 0 && (
            <CustomLinks links={config.links} />
          )}
        </div>

        {config.upcomingEvents && config.upcomingEvents.length > 0 && (
          <div className="mt-10">
            <UpcomingEvents events={config.upcomingEvents} />
          </div>
        )}

        {config.pastEvents && config.pastEvents.length > 0 && (
          <div className="mt-10">
            <PastEvents events={config.pastEvents} />
          </div>
        )}

        {config.blogPosts && config.blogPosts.length > 0 && (
          <div className="mt-10">
            <BlogPosts posts={config.blogPosts} />
          </div>
        )}
      </div>
    </main>
  );
}
