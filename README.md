# Paybin.io Clone

A perfect clone of paybin.io - Cryptocurrency payment platform built with Next.js, Tailwind CSS, and GSAP animations.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 💎 Styled with Tailwind CSS
- ✨ Smooth animations with GSAP
- 📱 Fully responsive design
- 🎨 Modern gradient UI
- ⚡ Production-ready code
- 🔐 Enterprise-level design patterns

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock)
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/denizguzeloglu/paybin.git
cd paybin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
paybin/
├── src/
│   └── app/
│       ├── globals.css    # Global styles and Tailwind directives
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Main homepage component
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── postcss.config.js     # PostCSS configuration
```

## Features Implemented

### Homepage Sections
- **Navigation Bar:** Fixed header with smooth backdrop blur
- **Hero Section:** Animated title, floating cards, gradient CTAs
- **Features Grid:** 6 feature cards with hover effects
- **Stats Counter:** Animated number counters on scroll
- **Pricing Plans:** 3-tier pricing with highlighted popular plan
- **CTA Section:** Gradient call-to-action banner
- **Footer:** Multi-column footer with links

### Design Elements
- Custom gradient text effects
- Glassmorphism card designs
- Smooth scroll animations
- Hover glow effects
- Responsive grid layouts
- Mobile-optimized navigation

### Animations
- GSAP ScrollTrigger for scroll-based animations
- Floating card animations
- Number counter animations
- Staggered feature card reveals
- Hero section entrance animations

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

## Performance Optimizations

- Lazy loading for heavy components
- Optimized images with Next.js Image component
- Minimal bundle size with tree-shaking
- CSS purging in production
- Font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is created as a clone for educational purposes. All rights belong to the original paybin.io website.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Original design inspiration from paybin.io
- Icons from Lucide React
- Animations powered by GSAP