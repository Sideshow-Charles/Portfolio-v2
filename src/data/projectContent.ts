import { StaticImageData } from "next/image";
import rendezvous from "../../assets/images/rendezvous.png";
import kolawole from "../../assets/images/kolawole.png";
import SpotifyNowPlaying from "../../assets/images/SpotifyNowPlaying.png";
import checkout from "../../assets/images/checkout.png";
import yomo from "../../assets/images/yomo.png";

export type CaseBlock = {
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: StaticImageData;
  imageAlt?: string;
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
  // {
  //   slug: "yomo-studios",
  //   title: "Yomo Studios",
  //   sector: "E-commerce / Events",
  //   year: "2026",
  //   role: "Full-stack Engineer",
  //   href: "https://latelieryomo.com",
  //   hero: yomo,
  //   heroAlt: "Yomo Studios — L'Atelier Yomo",
  //   sections: [
  //     {
  //       heading: "Overview",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "Yomo Studios is a full-stack web application for a Lagos-based resin art business — part storefront, part event platform, part admin tool. It sells physical products, runs ticketed workshops and events, and gives the studio a place to manage all of it without touching code.",
  //             "I built it end to end: the public-facing site, the backend APIs, the payment and email flows, and the admin panel behind them. It's live at latelieryomo.com.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "The Goal",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "The studio needed more than a brochure site. It had to take ticket payments for workshops, sell products online, send customers their confirmations automatically, and let the owner update everything herself — all while looking like a considered, branded experience rather than a generic template.",
  //             "That meant building a real full-stack system: a frontend with a distinct visual identity, a database and API layer behind it, authenticated admin tooling, and payment and email integrations that had to work reliably because real money and real orders depend on them.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "What I Built",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "I built the application on Next.js 15 with the App Router, TypeScript, and SCSS/BEM, backed by Supabase for the database, authentication, and storage. The work spans several connected systems:",
  //           ],
  //           bullets: [
  //             "Storefront & events — a branded landing page, individual event detail pages, and a product store.",
  //             "Ticketing — Multiple payment processors purchasing flow with a signed webhook, idempotency handling, and automatic confirmation emails.",
  //             "Store orders — an order backend with orders and order-items tables, order initialization, a payment webhook, stock decrement, and a confirmation page.",
  //             "Admin panel — Supabase Auth for the studio owner, with full create/read/update/delete for products and events.",
  //             "Design system — a custom palette and type system that gives the site its own identity.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Backend & Data",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "The site started on static data files and I migrated it to a Supabase-backed REST API using Next.js App Router route handlers. That shift turned a static site into a real application: content lives in a database, the frontend reads it through API routes, and the studio can change it without a deploy.",
  //             "On top of that sits full CRUD for products and events, so the owner manages the catalogue and event listings directly through the admin panel rather than asking me to edit code.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Payments & Email",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "Ticket and order payments run through Paystack. The payment webhook verifies each request with HMAC signature checking and handles idempotency, so a retried or duplicated webhook can't double-charge, double-count stock, or send a second confirmation.",
  //             "Successful payments trigger transactional email through Resend, sent from @latelieryomo.com addresses, so customers get an immediate, branded confirmation. For store orders, a successful payment also decrements stock and lands the customer on a confirmation page.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Authentication & Admin",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "The admin panel is gated behind Supabase Auth, wired up with @supabase/ssr so authentication works correctly across server and client in the App Router.",
  //             "Behind that gate, the studio owner has full control over products and events — adding new workshops, updating product details, and managing what's live on the site — without needing a developer in the loop.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Design System",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "The site has its own visual identity rather than a stock theme. The landing-page rebuild established a dark, terracotta-led palette and a type system pairing Syne with ABeeZee.",
  //             "Colours and other design tokens live as SCSS variables, so the look is consistent across the site and easy to adjust in one place rather than hunting through component styles.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Deployment & Reliability",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "The app is deployed on Vercel with both production and staging environments, so changes can be verified before they reach customers. Transactional email runs through a verified domain, and the payment webhooks are built to survive retries without side effects.",
  //             "One memorable fix: a Vercel build that passed locally but failed in CI because of macOS's case-insensitive filesystem masking a casing mismatch in a committed filename. I tracked it down by inspecting the actual committed casing and correcting the index — the kind of environment-specific bug that only shows up once it leaves your machine.",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Tech Stack",
  //       blocks: [
  //         {
  //           bullets: [
  //             "Next.js 15 (App Router) — frontend and API route handlers",
  //             "TypeScript — application logic",
  //             "SCSS / BEM — styling and design tokens",
  //             "Supabase — database, authentication, and storage",
  //             "Paystack & Flutterwave — ticket and order payments, with signed webhooks",
  //             "Resend — transactional email from the studio's domain",
  //             "Vercel — production and staging deployment",
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       heading: "Outcome",
  //       blocks: [
  //         {
  //           paragraphs: [
  //             "Yomo Studios is a live, full-stack product: customers buy tickets and products, payments are verified and confirmed automatically, and the studio runs the whole thing from an admin panel. It's the project where I've worked across the entire stack — frontend, database, auth, payments, email, and deployment — on something real people actually transact through.",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
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