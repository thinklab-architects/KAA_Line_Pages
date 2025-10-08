# Deployment Guide

## Quick Start

This project is pre-configured for static export and ready to be loaded into Codex or deployed to any static hosting service.

## Prerequisites

- Node.js 18+ (or latest LTS)
- npm, yarn, or pnpm

## Installation & Build

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. The static output is generated in the out/ directory
```

## Deploy to Codex

1. Run `npm run build` to generate static files
2. Upload the contents of the `out/` directory to Codex
3. The application is now live and ready to use

## Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Push the contents of `out/` to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

Or use GitHub Actions for automatic deployment (see `.github/workflows/deploy.yml` if available)

## Deploy to Other Static Hosts

The `out/` directory contains all necessary static files and can be deployed to:

- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your repository and set output directory to `out`
- **AWS S3**: Upload `out/` contents to an S3 bucket
- **Any web server**: Copy `out/` contents to your web root directory

## Development

For local development:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Preview Built Site Locally

```bash
# After building
cd out
python3 -m http.server 8080
# or
npx serve
```

Then open http://localhost:8080 in your browser.

## Configuration

### Next.js Config

The project is configured for static export in `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',  // Enable static export
  distDir: 'out',    // Output directory
  images: {
    unoptimized: true  // Required for static export
  },
  trailingSlash: true  // Add trailing slashes to URLs
};
```

### TypeScript

TypeScript configuration is in `tsconfig.json` with strict mode enabled.

### Styling

Tailwind CSS is configured for styling with PostCSS.

## Troubleshooting

### Build fails

```bash
# Clear caches and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Port already in use

If port 3000 is already in use during development:

```bash
PORT=3001 npm run dev
```

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Repository Issues](https://github.com/thinklab-architects/KAA_Line_Pages/issues)
