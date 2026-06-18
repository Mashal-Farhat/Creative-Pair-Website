/**
 * Application Routes Configuration
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  PROJECTS: '/projects',
  PORTFOLIO_WEB: '/projects/portfolio-web',
  MOBILE_APP: '/projects/mobile-app',
  WEB_APP: '/projects/web-app',
  DESIGN_PROJECTS: '/projects/design',
  UI_DESIGNS: '/projects/ui-design',
  GRAPHIC_DESIGN: '/projects/graphic-design',
  ECOM_PROJECTS: '/projects/ecommerce',
};

export const NAVIGATION_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Projects', path: ROUTES.PROJECTS },
  { label: 'Contact', path: ROUTES.CONTACT },
];
