import { StaticImageData } from "next/image";
import rendezvous from "../../assets/images/rendezvous.png";
import kolawole from "../../assets/images/kolawole.png";
import SpotifyNowPlaying from "../../assets/images/SpotifyNowPlaying.png";
import checkout from "../../assets/images/checkout.png";
import yomo from "../../assets/images/yomo.png";
import yomoStoreDesktop from "../../assets/images/store-desktop-view.png";
import yomoStoreMobile from "../../assets/images/store-mobile-view.png";
import yomoProductDesktop from "../../assets/images/product-desktop-view.png";
import yomoProductMobile from "../../assets/images/product-mobile-view.png";
import yomoEventsDesktop from "../../assets/images/events-desktop-view.png";
import yomoEventsMobile from "../../assets/images/events-mobile-view.png";
import yomoBlogDesktop from "../../assets/images/blog-desktop-view.png";
import yomoHomeMobile from "../../assets/images/home-mobile-view.png";
import yomoBlogMobile from "../../assets/images/blog-mobile-view.png";


export type CaseBlock = {
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: StaticImageData;
  imageAlt?: string;
  mobileImage?: StaticImageData;
  mobileImageAlt?: string;
};

export type CaseSection = {
  heading: string;
  blocks: CaseBlock[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  year: string;
  role: string;
  href: string;
  hero: StaticImageData;
  heroAlt: string;
  sections: CaseSection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "yomo-studios",
    title: "Yomo Studios",
    sector: "Full-Stack E-commerce & Community",
    year: "2026",
    role: "Full-stack Engineer",
    href: "https://latelieryomo.com",
    hero: yomo,
    heroAlt: "Yomo Studios — L'Atelier Yomo",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            paragraphs: [
              "Yomo Studios is a Lagos-based creative art studio offering handcrafted products, creative workshops, events, and a growing community around art and making.",
              "I designed and developed a full-stack platform that brings the studio's different offerings into one digital experience. Customers can explore and purchase products, discover upcoming events and workshops, engage with studio content, and stay connected through its newsletter and community.",
              "Beyond the public-facing website, I built a comprehensive admin dashboard that gives the studio control over its digital operations, from managing products and orders to publishing content and managing subscribers.",
              "The goal was to build more than a business website: a digital platform that supports the studio's creative identity while giving its team the tools to operate and grow online.",
            ],
            image: yomo,
            imageAlt: "Yomo Studios homepage on desktop",
            mobileImage: yomoHomeMobile,
            mobileImageAlt: "Yomo Studios homepage on mobile",
          },
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          {
            paragraphs: [
              "Yomo Studios operates across several parts of the creative space. It sells handmade resin and cement products, offers merchandise, hosts workshops and events, publishes articles, and builds a community around shared creative experiences.",
              "Bringing all of this together meant balancing different customer journeys without making the experience feel fragmented.",
              "But the challenge extended beyond the customer-facing experience. The studio also needed a central place to manage the different parts of its business without relying on a developer for routine updates.",
              "This meant building two connected experiences: an engaging public website for customers and a functional administrative dashboard for the studio.",
            ],
          },
        ],
      },
      {
        heading: "What I Built",
        blocks: [
          {
            paragraphs: [
              "I developed a full-stack web application comprising two major parts.",
            ],
          },
          {
            subheading: "Customer-facing website",
            paragraphs: [
              "The public website serves as the studio's digital storefront and community hub, covering the full range of what the studio offers:",
            ],
            bullets: [
              "E-commerce storefront — product discovery and shopping experiences for resin pieces, cement products, and merchandise.",
              "Events and workshops — dedicated experiences for discovering the studio's events and creative workshops.",
              "Content and blog — an editorial section for publishing articles and sharing stories around the studio and its work.",
              "Community experience — a dedicated space that communicates the studio's community-led identity and creative activities.",
              "Brand and studio pages — pages introducing the studio, its story, creative practice, and services.",
              "Newsletter subscriptions — an integration that allows visitors to subscribe to studio updates and announcements.",
            ],
          },
          {
            paragraphs: [
              "The storefront lets customers browse the studio's products across categories, with a responsive layout that adapts from desktop to mobile.",
            ],
            image: yomoStoreDesktop,
            imageAlt: "Yomo Studios store page on desktop",
            mobileImage: yomoStoreMobile,
            mobileImageAlt: "Yomo Studios store page on mobile",
          },
          {
            paragraphs: [
              "Each product has a dedicated detail page for viewing and purchasing an individual piece.",
            ],
            image: yomoProductDesktop,
            imageAlt: "Yomo Studios product detail page on desktop",
            mobileImage: yomoProductMobile,
            mobileImageAlt: "Yomo Studios product detail page on mobile",
          },
          {
            paragraphs: [
              "The events and workshops section surfaces the studio's upcoming sessions, giving each one room to communicate what it is and how to take part.",
            ],
            image: yomoEventsDesktop,
            imageAlt: "Yomo Studios events page on desktop",
            mobileImage: yomoEventsMobile,
            mobileImageAlt: "Yomo Studios events page on mobile",
          },
          {
            paragraphs: [
              "An editorial blog section lets the studio publish articles and share stories around its work and community.",
            ],
            image: yomoBlogDesktop,
            imageAlt: "Yomo Studios blog section on desktop",
            mobileImage: yomoBlogMobile,
            mobileImageAlt: "Yomo Studios blog page on mobile",
          },
          {
            subheading: "Administrative dashboard",
            paragraphs: [
              "I also built a comprehensive admin dashboard that serves as the operational centre of the platform. The studio can manage its digital operations from one place, including:",
            ],
            bullets: [
              "Products — create, update, and manage product listings.",
              "Orders — view and manage customer orders.",
              "Events and workshops — create and manage events and workshop listings.",
              "Blog — publish and manage articles and editorial content.",
              "Subscribers — manage newsletter subscribers.",
              "Website content — maintain the content that powers the public-facing experience.",
            ],
          },
          {
            paragraphs: [
              "This gives the studio direct control over its website and day-to-day content operations without needing developer involvement for routine management.",
            ],
          },
        ],
      },
      {
        heading: "Full-Stack Development & Integrations",
        blocks: [
          {
            paragraphs: [
              "I handled the frontend and backend implementation, connecting the application to the services needed to support its functionality.",
              "The application was built with Next.js and TypeScript, with SCSS for styling and Supabase providing the backend infrastructure. I integrated several third-party services to support the platform:",
            ],
            bullets: [
              "Supabase — backend infrastructure and data management.",
              "Flutterwave — payment processing for online transactions.",
              "Resend — email delivery for application communications.",
              "Mailchimp — newsletter subscriber management and audience communication.",
            ],
          },
          {
            paragraphs: [
              "Together, these services support the platform's commerce, communication, and audience-management workflows.",
            ],
          },
        ],
      },
      {
        heading: "Building for a Real Business",
        blocks: [
          {
            paragraphs: [
              "A key consideration throughout development was that this wasn't simply a portfolio piece or a static brand website. It was built for a business with products to sell, orders to manage, events to promote, content to publish, and an audience to maintain relationships with.",
              "The public website and admin dashboard had to work as parts of one product. Changes made through the dashboard needed to support the content and experiences presented to customers, while the integrations supported the business processes happening behind the scenes.",
              "Building both sides gave me the opportunity to work across the full development lifecycle, from customer-facing interfaces and administrative tools to backend functionality and third-party integrations.",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            paragraphs: [
              "The result is a full-stack platform that gives Yomo Studios a central online presence for its products, events, content, and community, alongside a comprehensive dashboard for managing its operations.",
              "Rather than having separate tools and workflows for every part of its online presence, the studio can manage its products, orders, events, blog, subscribers, and website content from one place.",
              "The project demonstrates my ability to take a multi-faceted business requirement and turn it into a complete product, covering frontend development, backend implementation, administrative tooling, and third-party service integrations.",
            ],
          },
        ],
      },
      {
        heading: "Tech Stack",
        blocks: [
          {
            bullets: [
              "Next.js",
              "TypeScript",
              "SCSS",
              "Supabase",
              "Flutterwave",
              "Resend",
              "Mailchimp",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "flutterwave-checkout-v3",
    title: "Flutterwave Checkout v3",
    sector: "Payments",
    year: "2026",
    role: "Frontend Engineer",
    href: "",
    hero: checkout,
    heroAlt: "Flutterwave Checkout v3",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            paragraphs: [
              "I worked on Flutterwave Checkout v3 to improve the card payment experience by making important checkout states more visible and providing users with immediate feedback while completing their payments.",
              "The work focused on two areas of the checkout flow: session timeout handling and real-time card validation.",
            ],
          },
        ],
      },
      {
        heading: "The Problem",
        blocks: [
          {
            paragraphs: [
              "Checkout sessions are valid for 15 minutes. Previously, the session timeout was handled in the background, and once the 15-minute window elapsed, the checkout was replaced by a full-screen session timeout state.",
              "While this correctly prevented an expired session from continuing, users had no visibility into how much time remained on their session while completing their payment. This created an opportunity to make the session lifecycle more transparent and give users an indication of the time available to complete their transaction.",
              "Card validation also happened later in the payment flow. A user could enter an incomplete or invalid card number and would only discover the problem after clicking the Pay button. This meant that errors which could be identified while the user was entering their details were only surfaced when they attempted to submit the payment.",
            ],
          },
        ],
      },
      {
        heading: "What I Built",
        blocks: [
          {
            subheading: "Session Timeout",
            paragraphs: [
              "I introduced a real-time session countdown banner that displays the remaining time on the checkout session.",
              "The countdown runs throughout the 15-minute session, giving users a clear indication of how much time they have left to complete their payment. When the session expires, the countdown is replaced with a \"Your session has expired\" banner.",
              "Once the session has expired, payment transactions can no longer be processed against that session. This ensures that the UI clearly reflects the state of the underlying payment session.",
              "The change also introduced a more visible session lifecycle: instead of users only discovering that their session had expired after the fact, they could see the remaining time throughout the checkout process.",
            ],
          },
          {
            subheading: "Real-time Card Validation",
            paragraphs: [
              "I improved the card input experience by introducing client-side validation for card details.",
              "Previously, users could enter an incomplete or invalid card number, CVV, or expiry date and only receive feedback after attempting to make a payment.",
              "I implemented real-time validation so the checkout could provide feedback while users were entering their details. Card numbers are validated using the Luhn algorithm, while the card number, CVV, and expiry fields are checked for valid and complete input.",
              "This allows users to identify and correct card-detail errors before submitting the payment rather than discovering them only after clicking Pay.",
            ],
          },
        ],
      },
      {
        heading: "Testing",
        blocks: [
          {
            paragraphs: [
              "I added and updated unit tests around the session timeout and card validation logic to cover the different states and edge cases introduced by the changes.",
              "For the session lifecycle, this included testing the countdown behaviour, session expiry, and the behaviour of the checkout once a session was no longer valid.",
              "For card validation, the tests covered valid and invalid card numbers, Luhn validation, incomplete input, CVV and expiry validation, and the different validation states presented to the user.",
              "This helped ensure that the new behaviour remained predictable and that future changes to the checkout logic would not unintentionally break the payment flow.",
            ],
          },
        ],
      },
      {
        heading: "Measuring the Impact",
        blocks: [
          {
            paragraphs: [
              "The session countdown was introduced based on a product hypothesis: giving users a visible indication of the remaining session time could encourage them to complete their payments more quickly.",
              "Following the introduction of the countdown, we began tracking payment success rate to measure its impact on the checkout experience.",
              // "Payment success rate increased by [X%] following the introduction of the session countdown.",
              "This gave us a measurable way to evaluate the effect of the change rather than relying solely on user feedback or assumptions about the new experience.",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            paragraphs: [
              "The changes made Checkout v3 more transparent and responsive during card payments.",
              "Users can now see how much time remains in their payment session and receive immediate feedback when their card details are incomplete or invalid. At the same time, the payment flow continues to enforce the 15-minute session lifecycle and prevents transactions from being processed against expired sessions.",
              // "The session countdown also enabled a measurable product improvement, with payment success rate increasing by [X%] after its introduction.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "spotify-now-playing",
    title: "Spotify Now Playing",
    sector: "Personal Project",
    year: "2026",
    role: "Design & Build",
    href: "https://music.charlesonuoha.xyz",
    hero: SpotifyNowPlaying,
    heroAlt: "Spotify Now Playing",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            paragraphs: [
              "I'm a big music and podcast listener, so I wanted to build something around the data generated by what I listen to every day.",
              "Spotify Now Playing is a personal listening-data application that connects to the Spotify API and displays what I'm currently listening to, including both music and podcasts. What started as a simple Now Playing widget has become the foundation for a larger project around managing and exploring my personal listening data, with plans to add features such as playlists, listening history, and other ways of interacting with that data.",
            ],
          },
        ],
      },
      {
        heading: "The Problem",
        blocks: [
          {
            paragraphs: [
              "The initial idea was simple: connect to Spotify and display whatever I'm currently listening to.",
              "The interesting part was everything around that request.",
              "Spotify's API requires authentication, but I didn't want every visitor to my portfolio to go through Spotify's authorization flow just to see what I was listening to. The application needed to authenticate specifically against my Spotify account, retrieve my listening data securely, and then expose only the information needed by the frontend.",
              "This was also my first time working with backend-related functionality. I needed to understand how to introduce a server-side layer into a frontend application, handle Spotify authentication and token refreshes, and deploy that functionality alongside the application.",
              "There was also the question of keeping the displayed information up to date without constantly making requests to the Spotify API.",
            ],
          },
        ],
      },
      {
        heading: "What I Built",
        blocks: [
          {
            paragraphs: [
              "I built the application with Nuxt 2, JavaScript and SCSS, using the Spotify Web API as the data source and Vercel for deployment.",
              "The frontend communicates with a custom server-side proxy rather than directly handling the Spotify authentication flow. The proxy manages authentication specifically for my Spotify account and handles the communication with Spotify's API before returning the relevant playback data to the frontend.",
              "This allowed me to build the experience around my own listening data without requiring visitors to authenticate with their own Spotify accounts.",
              "The application retrieves my current playback state and displays the relevant information for both music and podcasts. When there isn't an actively playing track, the application can fall back to my recent listening activity rather than leaving the widget completely empty.",
              "I also implemented periodic polling so the displayed information stays reasonably current without continuously requesting the Spotify API.",
            ],
          },
        ],
      },
      {
        heading: "Backend & Authentication",
        blocks: [
          {
            paragraphs: [
              "This project was my first real introduction to handling backend functionality as part of a frontend application.",
              "Rather than exposing Spotify authentication directly to the client, I created a proxy layer responsible for communicating with Spotify and managing the authentication required to access my account's listening data.",
              "One of the challenges was working with Spotify's short-lived access tokens. The proxy handles the authentication lifecycle so the application can continue retrieving my listening data without requiring me to repeatedly authorize the application.",
              "This gave me practical experience with concepts I hadn't previously worked with extensively, including server-side API requests, authentication flows, access tokens, refresh tokens, and environment-based configuration.",
            ],
          },
        ],
      },
      {
        heading: "API & Data Handling",
        blocks: [
          {
            paragraphs: [
              "The application periodically checks Spotify's playback state and updates the UI when my listening activity changes.",
              "The polling interval was designed to balance freshness with API usage. The goal wasn't to request data continuously, but to make the Now Playing experience feel current while keeping the number of API requests reasonable.",
              "The application also handles different playback states, including active songs, podcasts, and situations where there is no current playback.",
            ],
          },
        ],
      },
      {
        heading: "Testing & Reliability",
        blocks: [
          {
            paragraphs: [
              "Because the application is permanently embedded in my portfolio, reliability was an important consideration. It needs to continue working even when I'm not actively thinking about it.",
              "The application has now been running on my portfolio for over a year with no maintenance, continuing to retrieve and display my listening data without requiring manual intervention.",
              "That longevity was particularly valuable for me because this was one of my first projects involving backend functionality. It gave me practical experience taking an application beyond simply getting an API integration working locally and actually deploying and maintaining a small full-stack system.",
            ],
          },
        ],
      },
      {
        heading: "Tech Stack",
        blocks: [
          {
            bullets: [
              "Nuxt 2 — frontend application and application structure",
              "JavaScript — application logic and API integration",
              "SCSS — styling",
              "Spotify Web API — playback and listening data",
              "Vercel — deployment and server-side functionality",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            paragraphs: [
              "Spotify Now Playing started as a small personal experiment and became my first project where I had to work across both frontend and backend concerns.",
              "It gave me hands-on experience with third-party API integration, authentication, token management, server-side proxying, API polling, deployment, and handling real-world application states.",
              "Most importantly, it has continued running on my portfolio for over a year without maintenance, while giving me a foundation to expand the project into a broader tool for managing and exploring my personal music and podcast listening data.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "rendezvous",
    title: "Rendezvous",
    sector: "Events",
    year: "2023",
    role: "Frontend Engineer",
    href: "https://rendezvous-black.vercel.app",
    hero: rendezvous,
    heroAlt: "Rendezvous",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            paragraphs: [
              "Rendezvous is a merchant-facing event management experience designed around discovering and exploring events.",
              "I worked primarily on the frontend and UI implementation, building the event discovery experience, event detail views, and the interactions that connect them. The application consumes event data from an API and uses that data to dynamically populate the interface.",
              "The project uses dummy events and content, but the frontend was structured to represent a realistic event platform rather than a collection of static screens.",
            ],
          },
        ],
      },
      {
        heading: "The Goal",
        blocks: [
          {
            paragraphs: [
              "The goal was to create a straightforward event experience where users could quickly browse available events, understand the key information about each one, and move into a more detailed view when they found something they wanted to explore.",
              "The challenge was therefore largely an interface problem: taking event data from an API and turning it into a clear, consistent, and responsive experience.",
              "The interface needed to make event information easy to scan without overwhelming the user, while also maintaining a consistent experience across different events and screen sizes.",
            ],
          },
        ],
      },
      {
        heading: "What I Built",
        blocks: [
          {
            paragraphs: [
              "I built the frontend experience for the event discovery and detail flow.",
              "The homepage retrieves event data from the API and renders the available events as interactive cards. Each card surfaces the most relevant information at a glance and provides a clear entry point into the event.",
              "When an event is selected, the application navigates to a dedicated event detail view, where additional information about that event is presented.",
              "This creates a simple user journey: Browse events → Select an event → View event details.",
              "Rather than building each page around hardcoded content, the UI is driven by the API response, allowing the same components and layouts to work with different event data.",
            ],
          },
        ],
      },
      {
        heading: "API Integration",
        blocks: [
          {
            paragraphs: [
              "One of the key parts of the project was connecting the frontend to a REST API.",
              "The API provides the event data consumed by the application, which the frontend then maps into the appropriate UI components.",
              "This meant handling the relationship between the data structure and the interface — deciding which information should appear in an event card, which information belongs on the detail page, and how the UI should respond when different event data is provided.",
              "Working this way also made the application closer to a real production workflow, where frontend interfaces are typically consuming data from external services rather than relying entirely on static content.",
            ],
          },
        ],
      },
      {
        heading: "Component Architecture",
        blocks: [
          {
            paragraphs: [
              "I approached the interface with reusable components so that common elements of the event experience could be maintained in one place.",
              "Event cards, event information sections, navigation elements, and other repeated UI patterns were structured as reusable pieces rather than duplicated across pages.",
              "This made it easier to maintain visual consistency throughout the application and allowed the event interface to scale across different pieces of content.",
            ],
          },
        ],
      },
      {
        heading: "UI & Interaction",
        blocks: [
          {
            paragraphs: [
              "A significant part of the work was translating the event experience into a clear visual hierarchy.",
              "The event listing needed to communicate enough information for users to quickly compare events, while the detail view needed to provide additional context without becoming visually dense.",
              "I focused on:",
            ],
            bullets: [
              "Visual hierarchy — making important event information immediately visible.",
              "Reusable components — keeping repeated UI patterns consistent.",
              "Responsive design — ensuring the experience adapts across different screen sizes.",
              "Spacing and typography — creating a clean, readable interface.",
              "Interactive states — making event cards and navigation feel intuitive and predictable.",
              "API-driven rendering — allowing the UI to respond to the event data supplied by the API.",
            ],
          },
        ],
      },
      {
        heading: "Responsive Experience",
        blocks: [
          {
            paragraphs: [
              "The interface was designed to work across different viewport sizes rather than treating the desktop layout as the only experience.",
              "Event cards, content sections, navigation, and event details adapt to the available screen space while maintaining the same overall hierarchy and interaction model.",
              "This was particularly important for an event platform, where users may discover or explore events from different devices.",
            ],
          },
        ],
      },
      {
        heading: "Challenges",
        blocks: [
          {
            paragraphs: [
              "The main challenge was not the complexity of the underlying event data, but turning that data into an interface that felt intentional rather than simply rendering API responses onto a page.",
              "I had to make decisions about how information should be grouped, what should be prioritised on the event card versus the detail page, and how to maintain consistency when the same UI needs to represent different events.",
              "The project also gave me practical experience working with an API-driven frontend, particularly around structuring components around external data rather than designing each page as an isolated static interface.",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            paragraphs: [
              "Rendezvous became a complete frontend experience for browsing and exploring events, with an API-driven homepage, interactive event cards, and dedicated event detail views.",
              "Although the project currently uses dummy event data, the underlying frontend architecture demonstrates how the interface could support a larger event platform with real event information.",
              "For me, the project was an opportunity to focus heavily on frontend architecture, UI implementation, responsive design, reusable components, and API integration, while turning a product concept into a working experience rather than a collection of static designs.",
            ],
          },
        ],
      },
      {
        heading: "Tech Stack",
        blocks: [
          {
            bullets: [
              "Vue.js — frontend application and component architecture",
              "JavaScript — application logic and API integration",
              "REST API — event data",
              "HTML / CSS — interface structure, styling, and responsive layouts",
            ],
          },
        ],
      },
      {
        heading: "Screens & Experience",
        blocks: [
          {
            subheading: "Event Discovery",
            paragraphs: [
              "The homepage provides the starting point for exploring available events. Event data is retrieved from the API and rendered into reusable event cards.",
            ],
            // image: rendezvousHome,
            imageAlt: "Rendezvous homepage — event discovery",
          },
          {
            subheading: "Event Details",
            paragraphs: [
              "Selecting an event takes the user into a dedicated detail view containing additional information about the selected event.",
            ],
            // image: rendezvousDetail,
            imageAlt: "Rendezvous event detail view",
          },
          {
            subheading: "Responsive UI",
            paragraphs: [
              "The interface was designed to maintain its hierarchy and usability across different screen sizes.",
            ],
            // image: rendezvousMobile,
            imageAlt: "Rendezvous responsive / mobile layout",
          },
        ],
      },
    ],
  },
  {
    slug: "kolawole-portfolio",
    title: "Kolawole's Portfolio",
    sector: "Portfolio",
    year: "2022",
    role: "Frontend Engineer",
    href: "https://kola-beige.vercel.app",
    hero: kolawole,
    heroAlt: "Kolawole's Portfolio",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            paragraphs: [
              "A personal portfolio website for a digital product designer, built to showcase his work, career, and personality through a visual experience that feels as considered as the work itself.",
              "Rather than treating the site as a simple collection of projects, I built the experience around storytelling — giving each case study enough space to communicate the problem, process, and outcome while keeping the overall interface clean and easy to navigate.",
            ],
          },
        ],
      },
      {
        heading: "The Goal",
        blocks: [
          {
            paragraphs: [
              "The goal was to create a portfolio that could do more than display screenshots.",
              "As a product designer, the website itself needed to reflect Kolawole's approach to design — thoughtful, visual, and intentional. That meant creating a layout where typography, spacing, imagery, transitions, and content hierarchy all worked together without competing with the actual work.",
              "The challenge was finding the balance between personality and usability: making the portfolio feel distinctive while keeping the focus on the projects and the designer behind them.",
            ],
          },
        ],
      },
      {
        heading: "What I Built",
        blocks: [
          {
            paragraphs: [
              "I designed and developed the portfolio as a responsive Vue application, translating the visual direction into a structured, reusable frontend.",
              "The implementation focused on:",
            ],
            bullets: [
              "Project presentation — structured case study layouts that give each project room to communicate its story.",
              "Typography & hierarchy — a clear type system used to establish relationships between headings, supporting information, and project content.",
              "Motion & transitions — restrained interactions that make navigation and page transitions feel intentional without distracting from the work.",
              "Responsive layouts — adapting project presentations and content across different screen sizes.",
              "Reusable UI structure — consistent components and layouts across the portfolio while allowing individual projects to retain their own character.",
              "Personal brand — incorporating elements of Kolawole's personality and career alongside his design work, so the portfolio feels like a personal space rather than a generic portfolio template.",
            ],
          },
        ],
      },
      {
        heading: "Engineering the Experience",
        blocks: [
          {
            paragraphs: [
              "One of the interesting parts of the project was translating a designer's visual language into a working interface.",
              "The implementation wasn't just about reproducing individual designs. I had to think about how the layouts would behave as real content was introduced, how project pages would remain consistent, and how interactions could enhance the experience without becoming the focus.",
              "This meant treating typography, spacing, responsive behaviour, component structure, and transitions as part of the frontend system rather than isolated visual details.",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          {
            paragraphs: [
              "The result is a personal portfolio that brings together Kolawole's projects, career, and personality in a single cohesive experience.",
              "For me, the project was an opportunity to explore the frontend side of a highly visual product — taking a designer's work and building the interface that presents it. It also reinforced an important part of frontend engineering: the implementation is part of the product experience, especially when the product is a designer's portfolio.",
            ],
          },
        ],
      },
      {
        heading: "Tech Stack",
        blocks: [
          {
            bullets: ["Vue.js", "JavaScript", "CSS"],
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy | null {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return null;
  return caseStudies[(i + 1) % caseStudies.length];
}