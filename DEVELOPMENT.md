# Development Quick Start

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

## 📦 Development Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🗂️ Project Structure Quick Reference

```
src/
├── assets/      # Images, icons, videos
├── components/  # Reusable React components
├── constants/   # Routes, data, configuration
├── context/     # Global state (Theme, etc.)
├── hooks/       # Custom React hooks
├── layouts/     # Page layouts
├── pages/       # Page components
├── services/    # API integration
└── utils/       # Helper functions
```

See `PROJECT_STRUCTURE.md` for detailed structure documentation.

## 💡 Key Imports

### Routes & Navigation
```javascript
import { ROUTES, NAVIGATION_LINKS } from '@/constants';
```

### Components
```javascript
import { Button, Container, SectionTitle } from '@/components/common';
import { Navbar, Footer, Loader } from '@/components/common';
```

### Context & Hooks
```javascript
import { useTheme } from '@/context';
import { useColors } from '@/hooks';
```

### Utilities
```javascript
import { classNames, validateEmail, validateForm } from '@/utils';
```

## 🎨 Tailwind CSS

The project uses Tailwind CSS for styling. Check `tailwind.config.cjs` for custom configuration.

### Custom Classes Example
```jsx
<div className="bg-brand-dark text-white p-4 rounded-lg">
  Content here
</div>
```

## 🚀 Adding Features

### Adding a New Page
1. Create page component in `src/pages/YourPage.jsx`
2. Add route to `src/constants/routes.js`
3. Update `src/pages/index.js` with export
4. Add route in `src/App.jsx`

### Adding a New Component
1. Create component in `src/components/common/YourComponent.jsx`
2. Export in `src/components/common/index.js`
3. Use in pages or other components

### Adding Project Data
Update `src/constants/projects.js` with your project information:
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Brief description',
  category: 'web-app',
  image: '/images/project-1.jpg',
  technologies: ['React', 'Tailwind'],
}
```

## 📱 Responsive Design

The project uses Tailwind's responsive breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example:
```jsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Then restart
npm run dev
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

When making changes:
1. Keep components focused and reusable
2. Follow the established folder structure
3. Use meaningful variable and function names
4. Add comments for complex logic
5. Test changes in different screen sizes

---


