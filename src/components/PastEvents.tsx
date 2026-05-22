import type { CommunityEvent } from "@/types/config";
import SectionWrapper from "@/components/SectionWrapper";
import EventCard from "@/components/EventCard";

interface PastEventsProps {
  events: CommunityEvent[];
}

export default function PastEvents({ events }: PastEventsProps) {
  const sorted = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <SectionWrapper title="Past Events">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sorted.map((event) => (
          <EventCard key={`${event.title}-${event.date}`} event={event} variant="past" />
        ))}
      </div>
    </SectionWrapper>
  );
}
