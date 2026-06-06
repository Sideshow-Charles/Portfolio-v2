import React from "react";
import Header from "../../components/header";
import Footer from "@/components/footer";
import WorkHistory from "@/components/workHistory";
import Link from "next/link";

const Works: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-24">
        {/* Hero Section */}
        <section className="animate-fadeIn duration-1000 delay-1000 ease-in text-center my-52 max-md:mx-12 max-sm:mx-6">
          <p className="font-bold text-7xl leading-tight text-violet-500 max-md:text-5xl leading-loose max-sm:text-4xl">
            Work History & <br /> Career Overview.
          </p>
        </section>
        {/* End of Hero Section */}

        {/* Work History Section */}
        <WorkHistory
          companyLink="https://flutterwave.com"
          companyName="Flutterwave"
          duration="March 2021 - Present"
          jobTitle="Senior Frontend Engineer"
          progression="Engineer I → Engineer II → Senior Frontend Engineer"
          intro="I joined Flutterwave in 2021 as a Junior Frontend Engineer and have since progressed to Senior Frontend Engineer, contributing across customer-facing products, internal platforms, and merchant-focused solutions that power payment experiences at scale. Over the years, I have worked across merchant-facing products, internal operational tools, payment experiences, and platform solutions that support businesses and customers across Africa and beyond."
          sections={[
            {
              heading: "White-Label Solutions",
              body: "I lead frontend development for Flutterwave's white-label platform, a customizable version of our flagship products tailored to the branding, operational, and business requirements of enterprise merchants. The platform enables businesses to launch payment and financial experiences that feel native to their brand while leveraging Flutterwave's infrastructure underneath. Beyond implementation, I regularly participate in technical discovery and solutioning sessions with merchants, helping translate business requirements into scalable product experiences and demonstrating the technical capabilities of the platform. My responsibilities include:",
              bullets: [
                "Designing and building reusable architectures that support multiple merchant configurations.",
                "Scaling and maintaining customized dashboard, checkout, and payment experiences.",
                "Defining engineering standards and documentation for white-label product development.",
                "Collaborating with product, design, and merchant-facing teams to deliver tailored solutions efficiently.",
                "Participating in merchant-facing technical presentations and solution discussions.",
                "Conducting code reviews to maintain engineering quality and consistency.",
              ],
            },
            {
              heading: "Email Templates",
              body: "Alongside my responsibilities on the White-Label team, I spent my first two years at Flutterwave building and implementing email templates across the company's product ecosystem. As the primary frontend engineer responsible for email development, I built and maintained transactional, marketing, and brand email templates used across multiple Flutterwave products. This involved working closely with product, marketing, design, and brand teams to deliver consistent customer communication experiences while supporting the needs of various business units. Balancing this responsibility alongside my work on White-Label products gave me early exposure to cross-functional collaboration, large-scale frontend ownership, and supporting multiple business-critical initiatives simultaneously.",
            },
            {
              heading: "Card Collections",
              body: "I contribute to Flutterwave's card collections ecosystem, focusing specifically on frontend development for card payment experiences across both merchant-facing and customer-facing products. This includes building and maintaining card payment features on:",
              bullets: [
                "Flutterwave for Business (F4B), Flutterwave's merchant dashboard.",
                "Checkout, Flutterwave's payment experience used by customers during payment flows.",
              ],
            },
            {
              body: "My work focuses exclusively on the frontend layer of card payments, delivering intuitive user experiences, enabling new card payment capabilities, and helping merchants reliably accept and manage card transactions across multiple markets.",
            },
            {
              heading: "Control Center (Internal Administration Platform)",
              body: "I also develop features within Control Center (CC), Flutterwave's internal administration platform used by operational teams across the company. Control Center serves as the operational backbone for several departments, including Account Configuration, Settlements, Compliance, Risk Operations, and Customer Support. Through Control Center, I build tools and workflows that help internal teams manage products, investigate issues, configure merchant accounts, automate operational processes, and support Flutterwave's payment infrastructure at scale.",
            },
            {
              heading: "Growth & Impact",
              body: "Throughout my time at Flutterwave, I have:",
              bullets: [
                "Progressed from Junior Frontend Engineer to Senior Frontend Engineer.",
                "Led critical product initiatives and frontend architecture decisions.",
                "Supported onboarding efforts for engineers joining the team.",
                "Conducted code reviews to maintain engineering quality and consistency across projects.",
                "Worked across customer-facing products, merchant solutions, payment experiences, and internal operational systems.",
                "Contributed to products that support merchants, operational teams, and millions of payment transactions across Africa and beyond.",
              ],
            },
            {
              heading: "Beyond Team Boundaries",
              body: "While my primary ownership areas are White-Label Solutions, Card Collections, and Control Center, I regularly contribute to strategic initiatives across Flutterwave's broader product ecosystem.",
            },
            {
              body: "Most recently, I contributed to the launch of the Send App Travel Card, building frontend functionality for the web experience of a product that enables Nigerians in the diaspora to fund and spend through a Naira-denominated card when visiting Nigeria. The feature expanded Send App beyond remittances into everyday spending, creating a more seamless financial experience for customers returning home.",
            },
          ]}
          outro="I enjoy opportunities like this because they allow me to collaborate across teams, solve new product challenges, and contribute to experiences outside my immediate area of ownership."
          technologies="Vue, Nuxt, React, Next.js, TypeScript, SCSS, HTML, CSS, Handlebars.js, Git"
          relevantLinks={[
            {
              label: "Send App Travel Card",
              url: "https://send.flutterwave.com/blog/introducing-send-app-travel-card-spend-like-you-never-left",
            },
          ]}
        />

        <WorkHistory
          companyLink="https://www.instiq.com"
          companyName="Instiq"
          duration="August 2020 - November 2020"
          jobTitle="Junior Frontend Engineer"
          intro="In my short time at Instiq, I worked on two different projects. One was a microfinance bank for a client, which included everyday financial features like funds transfer and bill payments. Second project was an online portfolio for a construction company based in Ekiti, Nigeria, with ecommerce functionalities."
          sections={[]}
          technologies="React, Vue, CSS, SCSS, Bootstrap, Javascript, HTML, Git"
          relevantLinks={[{ label: "https://canaantowersltd.com", url: "https://canaantowersltd.com" }]}
        />

        <WorkHistory
          companyLink="http://lopworks.com"
          companyName="Lopworks"
          duration="May 2017 - August 2017"
          jobTitle="System Administration Intern"
          intro="Managed Linux servers, which included scheduled updates and upgrades. Set up virtual environments for installations for new updates."
          sections={[]}
          technologies="VMware, CentOS"
        />
        {/* End of Work History Section */}

        <div className="flex justify-between items-center max-sm:overflow-x-hidden">
          <div className="text-left">
            <p className="text-xl ml-8 text-zinc-700 max-md:text-lg max-sm:text-base">Previous</p>
            <Link href="/about">
              <p className="font-black mt-2 mb-16 text-3xl text-violet-500 hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 max-md:text-2xl">
                <span className="inline-block ml-[-0.6952vw] transform rotate-[-140deg] relative top-[-0em] mr-1">&#x2192;</span>
                ABOUT
              </p>
            </Link>
          </div>

          <div className="text-right">
            <p className="text-xl mr-10 text-zinc-700 max-md:text-lg max-sm:text-base">Next</p>
            <Link href="/projects">
              <p className="font-black mt-2 mb-16 text-3xl text-violet-500 hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 max-md:text-2xl">
                PROJECTS
                <span className="inline-block transform rotate-[-40deg] relative top-[-0.1em] ml-1">&#x2192;</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
      {/* End of Footer Component */}
    </div>
  );
};

export default Works;