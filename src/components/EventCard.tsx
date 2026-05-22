import Image from "next/image";
import type { CommunityEvent } from "@/types/config";
import { MapPin, Calendar, Clock, ExternalLink, FileText, Mic, PlayCircle } from "lucide-react";

interface EventCardProps {
  event: CommunityEvent;
  variant: "past" | "upcoming";
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr + "T00:00:00"));
}

export default function EventCard({ event, variant }: EventCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      {event.imageUrl && (
        <div className="relative w-full h-36">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">
          {event.title}
        </h3>

        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{formatDate(event.date)}</span>
            {event.time && (
              <>
                <Clock size={12} className="ml-1" />
                <span>{event.time}</span>
              </>
            )}
          </div>
          {event.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin size={12} />
              <span>{event.location}</span>
            </div>
          )}
        </div>

        {event.description && (
          <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}

        {/* Links for past events */}
        {variant === "past" && (event.recordingUrl || event.slidesUrl) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {event.recordingUrl && (
              <a
                href={event.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
              >
                <PlayCircle size={13} />
                Recording
              </a>
            )}
            {event.slidesUrl && (
              <a
                href={event.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-800"
              >
                <FileText size={13} />
                Slides
              </a>
            )}
          </div>
        )}

        {/* Links for upcoming events */}
        {variant === "upcoming" && (event.registerUrl || event.cfpUrl) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {event.registerUrl && (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--theme-color)] text-white hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={12} />
                Register
              </a>
            )}
            {event.cfpUrl && (
              <a
                href={event.cfpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-gray-50 transition-colors"
              >
                <Mic size={12} />
                Submit Talk
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
