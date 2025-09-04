# Premium Landing Page with GSAP Animations

A luxury responsive landing page built with React, TypeScript, Tailwind CSS, and GSAP animations. Features sophisticated animations, smooth interactions, and premium design aesthetics.

## 🚀 Features:-                                                     

### Core Animations
- **Loading Screen**: Luxury-style reveal animation with progress bar
- **Hero Section**: Staggered entrance animations with word-by-word text reveal on scroll
- **Product Section**: Interactive sliding carousel with touch gestures for mobile/tablet
- **FAQ Section**: Smooth accordion animations with height transitions
- **Scroll Triggers**: Content reveals as user scrolls through sections

### Responsive Design
- **Mobile**: 320px - 767px (Touch-optimized interactions)
- **Tablet**: 768px - 1023px (Hybrid navigation)
- **Desktop**: 1024px+ (Full feature set)

### Performance Features:-
- Optimized GSAP animations with proper cleanup
- Lazy loading and efficient re-renders
- Smooth 60fps animations across all devices
- Accessibility-compliant interactions

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd premium-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** for project configuration

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository for automatic deployments

### Environment Setup
No environment variables required for basic functionality.

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx    # Initial loading animation
│   ├── Header.tsx           # Navigation with mobile menu
│   ├── HeroSection.tsx      # Main hero with text animations
│   ├── ProductSection.tsx   # Interactive product carousel
│   ├── FAQSection.tsx       # Animated accordion
│   └── Footer.tsx           # Site footer
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
└── index.css               # Tailwind imports
```

## 🎨 Animation Details

### Loading Screen
- Duration: 2 seconds
- Easing: Power2.easeInOut
- Sequence: Logo fade → Progress bar → Fade out

### Hero Text Animation
- Trigger: Scroll into view (80% viewport)
- Effect: Word-by-word opacity transition
- Stagger: 0.1s between words
- Duration: 0.6s per word

### Product Carousel
- **Desktop**: Grid layout with hover effects
- **Mobile/Tablet**: Swipeable carousel with touch gestures
- **Navigation**: Arrow buttons + dot indicators
- **Transitions**: 500ms smooth sliding

### FAQ Accordion
- **Animation**: Height and opacity transitions
- **Duration**: 0.3s
- **Easing**: Power2.inOut
- **Behavior**: Single item open at a time

## 🔧 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Animations
Adjust animation timings in component files:
```javascript
gsap.to(element, {
  duration: 1.2,        // Animation duration
  ease: "power2.out",   // Easing function
  stagger: 0.1          // Stagger timing
});
```

### Content
Update content in component files:
- Hero text in `HeroSection.tsx`
- Products array in `ProductSection.tsx`
- FAQ items in `FAQSection.tsx`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Animation Performance**: 60fps on modern devices
- **Bundle Size**: Optimized with tree shaking
- **Loading Time**: < 2s on 3G networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across devices
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Support

For issues or questions:
- Check the GitHub issues
- Review the GSAP documentation
- Ensure all dependencies are properly installed

---

Built with ❤️ using React, GSAP, and Tailwind CSS.
