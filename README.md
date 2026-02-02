# Portfolio Web App - Mostly Works Studio

A modern, dual-persona portfolio website showcasing both personal professional work and studio projects. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a premium design aesthetic.

## 🌐 Live Demo

**Production:** [https://panshul.dev](https://panshul.dev)

## ✨ Features

- **Dual Portfolio System**: Toggle between Personal and Studio portfolios
- **Modern Design**: Glassmorphism effects, smooth animations, and vibrant gradients
- **Responsive Layout**: Optimized for all device sizes
- **SEO Optimized**: Complete meta tags for search engines and social media
- **Fast Performance**: Built with Vite for lightning-fast builds and HMR
- **Type-Safe**: Full TypeScript support throughout

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **React Router DOM 7.13.0** - Client-side routing

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Motion 12.23.24** - Animation library
- **Material-UI 7.3.5** - Component library
- **Radix UI** - Unstyled, accessible components

### Additional Libraries
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Next Themes** - Dark mode support
- **Recharts** - Data visualization

## 📁 Project Structure

```
portfolio-web-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon-personal.png    # Personal portfolio favicon
│   ├── favicon-studio.png      # Studio portfolio favicon
│   └── images/                 # Project and profile images
├── src/
│   ├── app/
│   │   ├── components/         # React components
│   │   ├── data/              # Portfolio data
│   │   │   ├── personalData.ts
│   │   │   └── studioData.ts
│   │   └── App.tsx            # Main app component
│   ├── styles/                # Global styles
│   └── main.tsx               # App entry point
├── index.html                 # HTML template
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **pnpm**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

## 🎨 Customization

### Personal Portfolio Data

Edit `src/app/data/personalData.ts` to update:
- Profile information
- Work experience
- Technologies/skills
- Education
- Contact details
- Social links

### Studio Portfolio Data

Edit `src/app/data/studioData.ts` to update:
- Studio information
- Projects
- Services
- Contact information

### Styling

- Global styles: `src/styles/index.css`
- Tailwind configuration: Uses Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Theme customization: Modify CSS variables in `index.css`

## 🌍 Deployment

### GitHub Pages (Automatic)

The project is configured for automatic deployment to GitHub Pages:

1. Push to the `master` branch
2. GitHub Actions workflow automatically builds and deploys
3. Site is live at your configured GitHub Pages URL

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting provider

## 🔍 SEO

The app includes comprehensive SEO optimization:
- Meta descriptions and keywords
- Open Graph tags for social media
- Twitter Card metadata
- Canonical URLs
- Semantic HTML structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

**Panshul Dixit**
- Website: [panshul.dev](https://panshul.dev)
- LinkedIn: [linkedin.com/in/panshuldixit](https://www.linkedin.com/in/panshuldixit)
- GitHub: [github.com/panshuldixit](https://github.com/panshuldixit)
- Email: contact@panshul.dev

---

**Mostly Works Studio** - Building digital experiences that mostly work, all the time.
