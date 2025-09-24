# Brocsa Website

A modern, responsive React.js website for Brocsa - a technology company specializing in AI and software innovation.

## Features

- 🌐 **Multi-language Support**: English and Arabic with RTL layout
- 🎨 **Modern Design**: Clean, futuristic UI with gradient backgrounds
- 📱 **Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations**: Framer Motion powered animations
- 🎯 **Interactive Components**: Hover effects and smooth transitions
- 🚀 **Fast Performance**: Built with Vite for optimal speed

## Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **i18next + react-i18next** - Internationalization
- **React Hooks** - State management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brocsa-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar with language toggle
│   ├── Hero.jsx        # Hero section with CTA buttons
│   ├── About.jsx       # About section with stats
│   ├── Services.jsx    # Services showcase
│   ├── CaseStudies.jsx # Portfolio/case studies
│   ├── Testimonials.jsx # Client testimonials carousel
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer with contact info
├── locales/            # Translation files
│   ├── en/
│   │   └── translation.json
│   └── ar/
│       └── translation.json
├── i18n.js             # i18n configuration
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Features Overview

### Language Support
- Toggle between English and Arabic
- Automatic RTL layout for Arabic
- Complete translation coverage

### Sections
1. **Hero** - Main headline with animated background
2. **About** - Company introduction with animated stats
3. **Services** - AI, Web & Mobile, Cloud, UX/UI services
4. **Case Studies** - Portfolio projects with hover effects
5. **Testimonials** - Client feedback carousel
6. **CTA** - Contact call-to-action
7. **Footer** - Contact information and links

### Animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth page transitions
- Loading animations

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ }
}
```

### Content
Update translation files in `src/locales/` to modify text content.

### Images
Replace placeholder images with your own:
- Hero background: Update gradient in Hero.jsx
- Case studies: Update image URLs in CaseStudies.jsx
- Testimonials: Update avatar URLs in Testimonials.jsx

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact us at hello@brocsa.com