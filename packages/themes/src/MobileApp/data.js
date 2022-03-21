import FacebookF from "@pagerland/icons/src/line/FacebookF";
import Instagram from "@pagerland/icons/src/line/Instagram";
import Youtube from "@pagerland/icons/src/line/Youtube";

import CheckCircle from "@pagerland/icons/src/line/CheckCircle";
import Gift from "@pagerland/icons/src/line/Gift";
import Coffee from "@pagerland/icons/src/line/Coffee";

import { VpnLock } from "@styled-icons/material/VpnLock";
import { CommentLightning } from "@styled-icons/fluentui-system-regular/CommentLightning";
import { InfoSquareFill } from "@styled-icons/bootstrap/InfoSquareFill";
import { UserInjured } from "@styled-icons/fa-solid/UserInjured";
import { AngleDoubleUp } from "@styled-icons/fa-solid/AngleDoubleUp";
import { Badge } from "@styled-icons/open-iconic/Badge";
import { Timer } from "@styled-icons/boxicons-regular/Timer";
import secondFuture from "./assets/screenshots/AshHome.png";
import thirdFuture from "./assets/third-feature.svg";

import Phone1 from "./assets/screenshots/Phone-1.png";
import Phone1x2 from "./assets/screenshots/Phone-1@2x.png";
import Phone2 from "./assets/screenshots/Phone-2.png";
import Phone2x2 from "./assets/screenshots/Phone-2@2x.png";
import Phone3 from "./assets/screenshots/Phone-3.png";
import Phone3x2 from "./assets/screenshots/Phone-3@2x.png";
import Phone4 from "./assets/screenshots/Phone-4.png";
import Phone4x2 from "./assets/screenshots/Phone-4@2x.png";
import Phone5 from "./assets/screenshots/Phone-5.png";
import Phone5x2 from "./assets/screenshots/Phone-5@2x.png";
import Phone6 from "./assets/screenshots/Phone-6.png";
import Phone6x2 from "./assets/screenshots/Phone-6@2x.png";
import octaneHome from "./assets/screenshots/octaneHome.png";
import male from "./assets/clients/photo-male.jpg";
import malex2 from "./assets/clients/photo-male@2x.jpg";
import female from "./assets/clients/photo-female.jpg";
import femalex2 from "./assets/clients/photo-female@2x.jpg";
import { colors } from "./styles";

export default {
  title: "Mobile App",
  navbar: {
    links: [],
    actions: [
      {
        href: "http://mypags.app",
        label: "Start free trial",
      },
    ],
  },
  contact: {
    title: "Contact",
    sections: [],
  },

  about: {
    title: "Why Boostify?",
    text: `We are utmost proud of the quality of our services, this is because we enforce security and quality assurance through all our boosters through a set of guidelines.`,
    features: [
      {
        id: "feature1",
        IconProps: {
          icon: VpnLock,
          gradient: colors.primary,
        },
        title: `"Safety first, dearies, and then, of course, utter mayhem."`,
        text:
          "All our Boosters are required to connect to our VPN server before starting the boosting process. We ensure privacy and security at all times from our professionals. Then inherently they can proceed to decimate their lobbies.",
      },
      {
        id: "feature2",
        IconProps: {
          icon: CommentLightning,
          gradient: colors.primary,
        },
        title: "Lightning fast",
        text:
          "As soon as we get an order we notify all our boosters of an opening. Depending on availablity the maximum time before your order is started will be 24 hours. And we usually finish the order within those same 48h. We dont want players who love playing the game to stop for any more than they need to.",
      },
      {
        id: "feature3",
        IconProps: {
          icon: InfoSquareFill,
          gradient: colors.primary,
        },
        title: "Returns",
        text:
          "We take user satisfaction as our utmost importance. Please feel free to contact us about any complaints or inquiries about your order. We are confident in our boosters and have a 30 day Money-Back guaranteed policy for any incompleted orders or negative experiences.",
      },
    ],
  },

  features: [
    {
      ImageProps: {
        src: octaneHome,
        style: { display: "flex", alignItems: "center" },
      },
      title: "What is Apex Legends Ranked Boosting?",
      text:
        "In Ranked you drop against 19 other teams. You earn RP (Ranked Points) for successful matches and you climb up in Ranked. Your highest tier is shown to friends and other players, determening your prestige. Ranked Boosting is the best way to get your rank. We will grind on your account or one of our pros will squad up with you!",
      list: [
        {
          IconProps: {
            icon: UserInjured,
            gradient: colors.primary,
          },
          title: "Avoid Headaches",
          text:
            "From playing the game solo with misinterpreted and often downright bad teamates, to tedious grinding for a sweet victory only to be scraped away by RNG hotdrops, the ranked grind can just make the game unenjoyable. That's where we come in.",
        },
        {
          IconProps: {
            icon: AngleDoubleUp,
            gradient: colors.primary,
          },
          title: "Have fun again!",
          text:
            "Rank Boost will help you get out of the boring grind and back to competitiveness and fun. Simply select your current RP and your desired RP in our selection cards. Dont just boost your rp, but get a valuable lesson with it with our DuoQueue feature! Squad up with our professionals and learn from the best.",
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
        style: { display: "flex", alignItems: "center" },
      },
      title: "What is Badge Boosting?",
      text:
        "In Apex Legends, exceptional achievements are rewarded with badges to illustrate on your banner. Plant fear into your enemies before the match even starts with our badge boosting service! Choose from any of the of badges available in our badge boosting section and our pros will hop on and shred.",
      list: [
        {
          IconProps: {
            icon: Badge,
            gradient: colors.primary,
          },
          title: "Stop trying your luck",
          text:
            "Don't depend on SBMM to give you a lucky game for your favourite badges. Pick and choose the way you highlight your best character's banner with Acheivement Boost. Just select and search from our vast variety of badges. For any special character badges, please drop us a support ticket in the contact page",
        },
        {
          IconProps: {
            icon: Timer,
            gradient: colors.primary,
          },
          title: "Your time is valuable",
          text:
            "We understand that not all players can afford to spend the time for that 20 kill or 4K damage match, or the tens of badges available in Apex. This is why we take pride in our pros and their extremley fast delivery of any badge boosting needs. ",
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: "quaternary",
          },
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
      ],
    },
    {
      title: "Another features section",
      text:
        "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vestibulum neque.",
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: "primary",
          },
          title: "Features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: "tertiary",
          },
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: "More amazing features",
      text:
        "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      list: [
        {
          title: "Features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Another features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "Another features subheading",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
        {
          title: "And just one more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.",
        },
      ],
    },
  ],
  screenshots: {
    title: "Screenshots",
    text:
      "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
    images: [
      {
        src: Phone1,
        srcSet: `${Phone1} 1x, ${Phone1x2} 2x`,
        alt: "Phone 1",
      },
      {
        src: Phone2,
        srcSet: `${Phone2} 1x, ${Phone2x2} 2x`,
        alt: "Phone 2",
      },
      {
        src: Phone3,
        srcSet: `${Phone3} 1x, ${Phone3x2} 2x`,
        alt: "Phone 3",
      },
      {
        src: Phone4,
        srcSet: `${Phone4} 1x, ${Phone4x2} 2x`,
        alt: "Phone 4",
      },
      {
        src: Phone5,
        srcSet: `${Phone5} 1x, ${Phone5x2} 2x`,
        alt: "Phone 5",
      },
      {
        src: Phone6,
        srcSet: `${Phone6} 1x, ${Phone6x2} 2x`,
        alt: "Phone 6",
      },
    ],
  },
  clients: {
    title: "What clients say about us?",
    comments: [
      {
        author: "Pat Cooper, Big Company SEO",
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: "Orsola Jeroch, Bigger Company CTO",
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  faq: {
    title: "Do you have any questions?",
    text:
      "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
    options: [
      {
        title: "Cras quis dolor auctor mi varius tincidunt?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Mauris accumsan dolor et elementum dapibus?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title: "Pellentesque fringilla non dolor ut convallis?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
      {
        title:
          "Integer imperdiet venenatis orci, ac dictum libero semper sit amet?",
        text:
          "Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    prices: {
      currency: "USD",
      types: {
        a: "Monthly",
        b: "Annually",
      },
      sections: [
        {
          title: "Beginner",
          price: {
            a: "$0",
            b: "$0",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: false,
            },
            {
              text: "Nullam vitae tortor",
              check: false,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose beginner",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Advanced",
          price: {
            a: "$12",
            b: "$120",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: false,
            },
            {
              text: "Fusce quis vestibulum",
              check: false,
            },
          ],
          button: {
            text: "Choose advanced",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
        {
          title: "Expert",
          price: {
            a: "$24",
            b: "$240",
          },
          features: [
            {
              text: "Ut commodo suscipit",
              check: true,
            },
            {
              text: "Mauris congue viverra",
              check: true,
            },
            {
              text: "Nunc non orci ut mi",
              check: true,
            },
            {
              text: "Nullam vitae tortor",
              check: true,
            },
            {
              text: "Lorem ipsum dolor sit",
              check: true,
            },
            {
              text: "Fusce quis vestibulum",
              check: true,
            },
          ],
          button: {
            text: "Choose expert",
            ButtonProps: {
              as: "a",
              href: "https://mypags.app",
            },
          },
        },
      ],
    },
  },

  newsletter: {
    title: "Stay always up to date",
    text:
      "Sign up to our monthly newsletter and get news and grest special offers!",
    buttonText: "Sign up",
    inputPlaceholder: "Your email address",
  },
  copyright: "© 2020 Coffeecream Themes",
};
