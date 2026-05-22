# Community Links — Config-Driven Link-in-Bio

A generic, config-driven link-in-bio page for community groups. Built with Next.js and TypeScript — edit one YAML file and deploy your own branded page with no code changes required.

**Live example:** [k8ssrilanka.github.io/cncglinks](https://k8ssrilanka.github.io/cncglinks/)

---

## What's included

- Community identity (name, logo, tagline, description)
- Social media links (Instagram, Facebook, LinkedIn, YouTube, X)
- Custom links (arbitrary label + URL + emoji icon)
- "Join the community" CTA button
- Upcoming events / meetups
- Past events (with recording and slides links)
- Blog posts
- SEO & Open Graph metadata
- Theme colour customisation

---

## Creating your own community page

### 1. Fork this repository

Click **Fork** on GitHub. Rename it to something like `links` or `community-links`.

### 2. Edit the config file

Open `config/community.config.yaml` — this is the **only file you need to edit**.

```yaml
community:
  name: "Your Community Name"
  tagline: "Your tagline here."
  description: |
    A short description of your community.
  logoUrl: "https://your-cdn.com/logo.png"   # or /logo.png if placed in /public
  themeColor: "#0F62FE"                       # accent colour for buttons and highlights

social:
  instagram: "https://instagram.com/yourhandle"
  linkedin:  "https://linkedin.com/company/yourgroup"
  youtube:   "https://youtube.com/@yourchannel"
  x:         "https://x.com/yourhandle"
  # facebook, instagram, linkedin, youtube, x — remove any you don't use

links:
  - label: "Our Website"
    url: "https://yourwebsite.com"
    icon: "🌐"

joinCta:
  label: "Join our Community"
  url: "https://your-signup-link.com"

upcomingEvents:
  - title: "Meetup #1"
    date: "2025-08-10"
    location: "Your City"
    description: "What this event is about."
    registerUrl: "https://registration-link.com"

pastEvents:
  - title: "Launch Event"
    date: "2025-01-15"
    location: "Your City"
    description: "How it went."
    recordingUrl: "https://youtube.com/watch?v=..."

blogPosts:
  - title: "Our First Blog Post"
    url: "https://medium.com/@yourhandle/post"
    author: "Your Name"
    publishedAt: "2025-03-01"
    excerpt: "A short summary of the post."

seo:
  title: "Your Community — Links"
  description: "Find all our events and resources."
  twitterHandle: "@yourhandle"
```

All sections except `community.name` are optional. Remove any section you don't need and it simply won't appear on the page.

### 3. Add your logo

Place your logo at `public/logo.png` and set `logoUrl: "/logo.png"` in the config.

Alternatively, use an absolute URL (e.g. from a CDN or GitHub raw assets):

```yaml
logoUrl: "https://raw.githubusercontent.com/your-org/brand-assets/main/logo.png"
```

If you use external image URLs, add the hostname to `next.config.ts` under `images.remotePatterns`:

```ts
{ protocol: "https", hostname: "your-cdn.com" },
```

### 4. Deploy to GitHub Pages

In your forked repository:

1. Go to **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Open `.github/workflows/deploy.yml` and update the `NEXT_PUBLIC_BASE_PATH` to match your repo name:

```yaml
- name: Build with Next.js
  run: ${{ steps.detect-package-manager.outputs.runner }} next build
  env:
    NEXT_PUBLIC_BASE_PATH: /your-repo-name
```

4. Push to `main` — GitHub Actions will build and deploy automatically.

Your page will be live at `https://your-org.github.io/your-repo-name/`.

### 5. Deploy to Vercel (alternative)

If deploying to Vercel (recommended for a custom domain):

1. Import your forked repo on [vercel.com](https://vercel.com)
2. No environment variables needed — leave `NEXT_PUBLIC_BASE_PATH` unset (defaults to root `/`)
3. Vercel auto-deploys on every push to `main`

---

## Config reference

### `community`

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Community name shown as the page heading |
| `tagline` | No | Short tagline shown below the name |
| `description` | No | Longer description paragraph |
| `logoUrl` | No | URL or path to your logo image |
| `faviconUrl` | No | URL or path to your favicon (defaults to `/favicon.ico`) |
| `themeColor` | No | Hex colour for buttons and accents (default `#0F62FE`) |
| `backgroundColor` | No | Page background colour (default `#ffffff`) |

### `social`

All fields optional. Remove any platform you don't use.

| Field | Platform |
|---|---|
| `instagram` | Instagram |
| `facebook` | Facebook |
| `linkedin` | LinkedIn |
| `youtube` | YouTube |
| `x` | X (Twitter) |

### `links`

Arbitrary list of links shown as buttons:

```yaml
links:
  - label: "Button label"
    url: "https://example.com"
    icon: "🌐"   # optional emoji
```

### `joinCta`

A prominent call-to-action button:

```yaml
joinCta:
  label: "Join our Community"
  url: "https://signup-link.com"
  style: "primary"   # "primary" (filled) or "outline"
```

### `upcomingEvents` / `pastEvents`

```yaml
- title: "Event Name"
  date: "2025-08-10"        # YYYY-MM-DD
  time: "09:00"             # optional, 24-hour format
  location: "City, Country"
  description: "What this event is about."
  imageUrl: "/events/photo.jpg"
  # upcoming events:
  registerUrl: "https://registration-link.com"
  cfpUrl: "https://call-for-proposals-link.com"
  # past events:
  recordingUrl: "https://youtube.com/watch?v=..."
  slidesUrl: "https://speakerdeck.com/..."
```

### `blogPosts`

```yaml
- title: "Post title"
  url: "https://medium.com/..."
  author: "Author Name"
  publishedAt: "2025-03-01"   # YYYY-MM-DD
  coverImageUrl: "https://cdn.example.com/cover.jpg"
  excerpt: "Short summary of the post."
```

### `seo`

```yaml
seo:
  title: "Page title for browser tab and search engines"
  description: "Meta description for search engines and social sharing"
  ogImageUrl: "/og-image.png"      # Open Graph image (1200×630px recommended)
  twitterHandle: "@yourhandle"
```

---

## Local development

```bash
git clone https://github.com/your-org/your-fork
cd your-fork
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit `config/community.config.yaml` and the page hot-reloads automatically.

---

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [js-yaml](https://github.com/nodeca/js-yaml) — YAML config parsing
- [lucide-react](https://lucide.dev) — UI icons
- [zod](https://zod.dev) — config validation with helpful error messages
