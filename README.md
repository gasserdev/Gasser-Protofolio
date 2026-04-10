# Portfolio

My personal portfolio website showcasing my projects, skills, and contact information.

## Tech Stack

- **Framework:** [Astro](https://astro.build) - Static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Interactivity:** [Alpine.js](https://alpinejs.dev) - Lightweight JavaScript framework
- **Icons:** Material Symbols (Google Fonts)
- **Fonts:** Space Grotesk & Inter (Google Fonts)
- **Deployment:** Vercel

## Features

- Responsive design with mobile sidebar navigation
- SEO optimized with meta tags, Open Graph, and Twitter Cards
- XML sitemap for search engines
- Structured data (JSON-LD) for rich search results
- Schema.org markup for Person, WebSite, and CreativeWork
- Contact section with email copy functionality
- Project showcase with live demos and GitHub links
- Skills showcase with interactive tags

## Pages

- **Home** - Hero section with animated elements
- **Skills** - Technology stack showcase
- **Projects** - Portfolio projects with links
- **Contact** - Contact information and social links

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## SEO

- Sitemap: `/sitemap-index.xml`
- Robots: `/robots.txt`
- Structured data for search engines
