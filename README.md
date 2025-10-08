# KAA LINE Pages

Next.js 14 + TypeScript + Tailwind CSS application for KAA LINE Pages, configured for static export so it can be deployed to Codex or GitHub Pages.

## Overview
This project provides a LINE Pages application structure that can be automatically initialized and loaded into the Codex platform for Keep Architectural Artifacts (KAA).

## Prerequisites
- Node.js 18+ (or latest LTS)
- npm, yarn, or pnpm package manager

## Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build & Export

Build the application for production and export as static files:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static output will be generated in the `out/` directory, ready for deployment to Codex, GitHub Pages, or any static hosting service.

## Project Structure

```
├── app/              # Next.js App Router (pages and layouts)
├── components/       # Reusable React components
├── data/             # Mock data and content
├── lib/              # Utility functions and helpers
├── public/           # Static assets (images, fonts, etc.)
├── .eslintrc.json    # ESLint configuration
├── .gitignore        # Git ignore rules
├── next.config.mjs   # Next.js configuration
├── package.json      # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ Static export support for Codex deployment
- ✅ Optimized for production builds

## Deployment

The application is configured for static export with `output: 'export'` in `next.config.mjs`. This allows deployment to:

- Codex platform
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and export static files
- `npm start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint to check code quality

## License

See LICENSE file for details.