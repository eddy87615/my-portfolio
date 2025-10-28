# My Portfolio

A personal portfolio website built with Next.js and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 15
- **CMS**: Sanity
- **Styling**: CSS + Styled Components
- **Animation**: Framer Motion
- **Language**: TypeScript

## Quick Start

### Prerequisites

- Node.js 18.20.2 or higher
- pnpm 9 or higher

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your Sanity credentials in `.env`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Usually "production"
- `SANITY_API_TOKEN`: Your Sanity API token (for write access)

### Development

1. Start the Next.js dev server:
```bash
pnpm dev
```

2. Start Sanity Studio (in a separate terminal):
```bash
pnpm studio
```

3. Open your browser:
   - Frontend: `http://localhost:3000`
   - Sanity Studio: `http://localhost:3333`

## Project Structure

```
my-portfolio/
├── sanity/              # Sanity schemas and configuration
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── lib/            # Utility functions and Sanity client
├── public/             # Static assets
└── tests/              # Test files
```

## Available Scripts

- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm studio` - Start Sanity Studio
- `pnpm studio:deploy` - Deploy Sanity Studio
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint

## Deployment

### Deploy Next.js Frontend

Deploy to Vercel:
```bash
vercel
```

### Deploy Sanity Studio

```bash
pnpm studio:deploy
```

## License

MIT
