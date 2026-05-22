import type { CommunityEvent } from "@/types/config";
import SectionWrapper from "@/components/SectionWrapper";
import EventCard from "@/components/EventCard";

interface UpcomingEventsProps {
  events: CommunityEvent[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <SectionWrapper title="Upcoming Events">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sorted.map((event) => (
          <EventCard key={`${event.title}-${event.date}`} event={event} variant="upcoming" />
        ))}
      </div>
    </SectionWrapper>
  );
}
