export interface CommunityInfo {
  name: string;
  tagline?: string;
  description?: string;
  logoUrl?: string;
  faviconUrl?: string;
  themeColor?: string;
  backgroundColor?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  x?: string;
}

export interface CustomLink {
  label: string;
  url: string;
  icon?: string;
}

export interface JoinCta {
  label: string;
  url: string;
  style?: "primary" | "outline";
}

export interface CommunityEvent {
  title: string;
  date: string; // ISO 8601 "YYYY-MM-DD"
  time?: string; // "HH:MM" 24-hour
  location?: string;
  description?: string;
  imageUrl?: string;
  // past events
  recordingUrl?: string;
  slidesUrl?: string;
  // upcoming events
  registerUrl?: string;
  cfpUrl?: string;
}

export interface BlogPost {
  title: string;
  url: string;
  author?: string;
  publishedAt?: string; // ISO 8601 date string
  coverImageUrl?: string;
  excerpt?: string;
}

export interface SeoConfig {
  title?: string;
  description?: string;
  ogImageUrl?: string;
  twitterHandle?: string;
}

export interface CommunityConfig {
  community: CommunityInfo;
  social?: SocialLinks;
  links?: CustomLink[];
  joinCta?: JoinCta;
  pastEvents?: CommunityEvent[];
  upcomingEvents?: CommunityEvent[];
  blogPosts?: BlogPost[];
  seo?: SeoConfig;
}
