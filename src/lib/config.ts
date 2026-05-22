import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { z } from "zod";
import type { CommunityConfig } from "@/types/config";

const CommunityEventSchema = z.object({
  title: z.string(),
  date: z.string(),
  time: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  recordingUrl: z.string().optional(),
  slidesUrl: z.string().optional(),
  registerUrl: z.string().optional(),
  cfpUrl: z.string().optional(),
});

const BlogPostSchema = z.object({
  title: z.string(),
  url: z.string(),
  author: z.string().optional(),
  publishedAt: z.string().optional(),
  coverImageUrl: z.string().optional(),
  excerpt: z.string().optional(),
});

const CommunityConfigSchema = z.object({
  community: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    logoUrl: z.string().optional(),
    faviconUrl: z.string().optional(),
    themeColor: z.string().optional(),
    backgroundColor: z.string().optional(),
  }),
  social: z
    .object({
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      linkedin: z.string().optional(),
      youtube: z.string().optional(),
      x: z.string().optional(),
    })
    .optional(),
  links: z
    .array(
      z.object({
        label: z.string(),
        url: z.string(),
        icon: z.string().optional(),
      })
    )
    .optional(),
  joinCta: z
    .object({
      label: z.string(),
      url: z.string(),
      style: z.enum(["primary", "outline"]).optional(),
    })
    .optional(),
  pastEvents: z.array(CommunityEventSchema).optional(),
  upcomingEvents: z.array(CommunityEventSchema).optional(),
  blogPosts: z.array(BlogPostSchema).optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      ogImageUrl: z.string().optional(),
      twitterHandle: z.string().optional(),
    })
    .optional(),
});

export function getCommunityConfig(): CommunityConfig {
  const configPath = path.join(
    process.cwd(),
    "config",
    "community.config.yaml"
  );
  const raw = fs.readFileSync(configPath, "utf8");
  const parsed = yaml.load(raw);
  const validated = CommunityConfigSchema.parse(parsed);
  return validated as CommunityConfig;
}
