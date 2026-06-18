# Project Structure Guide

## 📁 Directory Structure

```
src/
├── assets/                 # Static files (images, icons, videos)
│   ├── images/
│   ├── icons/
│   └── videos/
├── components/            # React components
│   ├── common/            # Reusable components (Button, Navbar, Footer, etc.)
│   ├── sections/          # Section components (HeroSection, FeaturesSection, etc.)
│   └── index.js           # Component exports
├── constants/             # Constants and configuration
│   ├── routes.js          # Route definitions
│   ├── projects.js        # Project portfolio data
│   ├── services.js        # Services data
│   └── index.js           # Constants exports
├── context/               # React Context providers
│   ├── ThemeContext.jsx   # Theme context
│   └── index.js           # Context exports
├── hooks/                 # Custom React hooks
│   ├── useColors.js
│   ├── useTheme.js
│   └── index.js           # Hooks exports (if needed)
├── layouts/               # Layout components
│   └── MainLayout.jsx     # Main layout wrapper
├── pages/                 # Page components (route-level)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Projects.jsx
│   └── ...other pages
├── services/              # API calls and external services
│   └── api.js             # API client (if needed)
├── styles/                # Global styles (if needed)
│   └── globals.css
├── utils/                 # Utility functions
│   ├── classNames.js      # Class name utilities
│   ├── validation.js      # Form validation
│   └── index.js           # Utils exports
├── App.jsx                # Main App component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## 📋 Key Files

### Constants
- **routes.js**: Define all application routes
- **projects.js**: Store project portfolio data
- **services.js**: Store services information

### Context
- **ThemeContext.jsx**: Theme management (dark/light mode)

### Layouts
- **MainLayout.jsx**: Main wrapper with Navbar, Footer, and global components

### Components
- **common/**: Reusable components like Button, Container, SectionTitle
- **sections/**: Larger reusable section components

### Utilities
- **classNames.js**: Helper for conditional class names
- **validation.js**: Form validation functions

## 🚀 Usage Examples

### Import Constants
```javascript
import { ROUTES, NAVIGATION_LINKS } from '@/constants';
```

### Import Components
```javascript
import { Button, Container, SectionTitle } from '@/components';
```

### Use Theme Context
```javascript
import { useTheme } from '@/context';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  // ...
}
```

### Use Validation
```javascript
import { validateEmail, validateForm } from '@/utils';
```

## 📝 Next Steps

1. **Move existing components** to `components/common/` folder
2. **Update imports** in existing files to use new structure
3. **Add project data** to `constants/projects.js`
4. **Add services data** to `constants/services.js`
5. **Create section components** in `components/sections/`
6. **Add images/assets** to `assets/` folders
7. **Update App.jsx** to use MainLayout and new imports

## 🎯 Best Practices

- Keep components small and focused
- Use index.js files for cleaner exports
- Store static data in constants folder
- Use context for global state (theme, user, etc.)
- Place utility functions in utils folder
- Use layouts for page structure
