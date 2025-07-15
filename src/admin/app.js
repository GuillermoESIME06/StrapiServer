import Logo from "./extensions/LOGO.png";
import favicon from "./extensions/favicon.png";
import MenuLogo from "./extensions/favicon.png";

const config = {
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
  locales: ["es"],
  auth: {
    logo: Logo,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: MenuLogo,
  },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },

    // overwrite dark theme properties
    dark: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
  },
  translations: {
    en: {
      "Auth.form.welcome.title": "Aileron",
      "Auth.form.welcome.subtitle": "Log in to your koppi account",
      "app.components.LeftMenu.navbrand.title": "Dev Koppi",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
    },
    es: {
      "Auth.form.welcome.title": "Aileron",
      "Auth.form.welcome.subtitle": "Inicia con tu cuenta koppi",
      "app.components.LeftMenu.navbrand.title": "Dev Koppi",
      "app.components.LeftMenu.navbrand.workplace": "Tablero",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
