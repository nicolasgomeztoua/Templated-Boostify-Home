
import background from "./assets/boostify/Horizon.webp";
import background2x from "./assets/boostify/Horizon2.jpg";

export default {
  title: "Real Estate",
  navbar: {
    links: [
      {
        to: "",
        "data-to": "",
        label: "Home",
      },
      {
        to: "about",
        "data-to": "about",
        label: "About",
      },
      {
        to: "location",
        "data-to": "location",
        label: "Location",
      },
      {
        to: "exterior",
        "data-to": "exterior",
        label: "Exterior",
      },
      {
        to: "interior",
        "data-to": "interior",
        label: "Interior",
      },
      {
        to: "surroundings",
        "data-to": "surroundings",
        label: "Surroundings",
      },
      {
        to: "gallery",
        "data-to": "gallery",
        label: "Gallery",
      },
      {
        to: "contact",
        "data-to": "contact",
        label: "Contact",
      },
    ],
    actions: [
      {
        href:
          "https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567",
        label: "Buy theme",
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: "Horizon",
    },
    title: "Welcome To Boostify, Your Hive For",
    price: "Apex Legends Boosting",
    features: [],
    cta: {
      to: "about",
      children: "Buy Rank Boosting",
    },
  },

};
