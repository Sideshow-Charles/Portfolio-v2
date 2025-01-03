import React from "react";
import Header from "../../components/header";
import Footer from "@/components/footer";
import WorkHistory from "@/components/workHistory";
import Link from "next/link";

const Works: React.FC = () => {
  return (
    <div>
      {/* Header Component */}
      <Header 
        btnclassName="bg-violet-500 text-white py-2 px-4 border border-violet-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-violet-700 duration-200"
      />
      {/* End of Header Component */}

      <div className="max-w-7xl mx-auto">
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
          duration="2021 - Present"
          jobTitle="Frontend Engineer (Engineer I, Engineer II)"
          roleDescription="In March 2021, I joined Flutterwave (An African fintech company that provides a payment 
            infrastructure for global merchants and payment service providers across the world). I joined the white-label
            team, one of two engineers. The white-label product is to support businesses with financial tools to reach their goals,
            this was to be achieved based on existing Flutterwave products, like the dashboard and checkout, customised to the
            branding requests of the merchants.
            I also worked as a sole engineer in building email templates across different products, marketing and brand, overseeing
            implementations of these emails. 
            In 2022, I stopped working on email templates creation and implementation to focus fully on scaling the white-label 
            product, I spent the latter part of that year onboarding the new engineer who was to work on email creation and 
            implementation to ensure a seamless transition.
            In 2023, I briefly led the white-label engineering team, after the departure of an engineer, 
            I focused on onboarding a new engineer and scaling the products, wrote documentations on new 
            engineering guidelines on building and managing white-label products."
          technologies="Vue, Nuxt, SCSS, HTML, CSS, Handlebars.js, Git"
          relevantLinks=""
        />

        <WorkHistory
        companyLink="https://www.instiq.com"
          companyName="Instiq"
          duration="August 2020 - November 2020"
          jobTitle="Junior Frontend Engineer"
          roleDescription="In my short time at Instiq, I worked on two different projects. One was a microfinance bank
            for a client, which included everyday financial features like funds transfer and bill payments. 
            Second project was an online portfolio for a construction company based in Ekiti, Nigeria,
            with ecommerce functionalities."
          relevantLinks="https://canaantowersltd.com"
          technologies="React, Vue, CSS, SCSS, Bootstrap, Javascript, HTML, Git"
        />

        <WorkHistory
        companyLink="http://lopworks.com"
          companyName="Lopworks"
          duration="May 2017 - August 2017"
          jobTitle="System Administration Intern"
          roleDescription="Managed Linux servers, which included scheduled updates and upgrades.
            Set up virtual environments for installations for new updates."
          relevantLinks=""
          technologies="VMware, CentOS"
        />
        {/* End of Work History Section */}

        <div className="flex justify-between items-center">
          <div className="text-left">
            <p className="text-xl ml-10 text-zinc-700 max-md:text-lg max-sm:text-base">Previous</p>
            <Link href="/about"><p className="font-black mt-2 mb-16 text-3xl text-violet-500 max-md:text-2xl"><span className="inline-block ml-[-0.6952vw] transform rotate-[-140deg] relative top-[-0em] ">&#x2192;</span>ABOUT</p></Link>
          </div>

        <div className="text-right">
          <p className="text-xl mr-10 text-zinc-700 max-md:text-lg max-sm:text-base">Next</p>
          <Link href="/projects"><p className="font-black mt-2 mb-16 text-3xl text-violet-500 max-md:text-2xl">PROJECTS <span className="inline-block ml-[-0.2952vw] transform rotate-[-40deg] relative top-[-0.18em]">&#x2192;</span></p></Link>
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
