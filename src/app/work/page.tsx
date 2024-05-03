import Header from "../../components/header"
import Footer from "@/components/footer";
import WorkHistory from "@/components/workHistory";
const Works = () => {
    return (
        <div>
            {/* Header Component */}
                <Header btnclassName="bg-violet-500 text-white py-2 px-4 border border-violet-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}

            {/* Hero Section */}
            <section className="flex justify-center flex-col items-center mt-36 mb-24">
                <p className="text-center font-bold text-7xl leading-tight text-violet-500">
                    Work History & <br></br> Career Overview
                </p>
                <p className="text-center mt-8 text-xl text-violet-500 font-bold">(2017 - Present)</p>
            </section>
            {/* End of Hero Section */}

            {/* Work History Section */}
            <WorkHistory
                companyName="Flutterwave"
                duration="2021 - Present"
                jobTitle="Frontend Engineer (Engineer I, Engineer II)"
                roleDescription=" Over at Flutterwave; An African fintech company that provides a payment infrastructure
                 for global merchants and payment service providers across the world, I've spent the last three years working
                 on the white-label product, where I've built on and managed existing products like the flutterwave dashboard
                 and checkout for white-label merchants. I also worked on building email templates and oversaw implementation 
                 of these emails across different products, marketing and brand emails."
                technologies="Vue.js, Nuxt.js, SCSS, HTML, CSS, Handlebars.js"
                relevantLinks="None">
            </WorkHistory>

            <WorkHistory
                companyName="Instiq"
                duration="August 2020 - November 2020"
                jobTitle="Junior Frontend Engineer"
                roleDescription="In my short time at Instiq, I worked on two different projects. One was a microfinance bank
                 for a client, which included everyday financial features like funds transfer, bill payments. 
                 Second project was an online portfolio for a construction company based in Ekiti, Nigeria,
                 with ecommerce functionalities."
                relevantLinks="https://canaantowersltd.com"
                technologies="React.js, Vue.js, CSS, SCSS, Bootstrap, Javascript, HTML">
            </WorkHistory>

            <WorkHistory
                companyName="Lopworks"
                duration="May 2017 - August 2017"
                jobTitle="System Adminstration Intern"
                roleDescription="Managed Linux serves, which included scheduled updates and upgrades.
                Set up virtual environments for installations for new updates."
                relevantLinks="None"
                technologies="VMware, CentOS">
            </WorkHistory>
            {/* End of Work History Section */}

            <Footer></Footer>
        </div>
    )
}
export default Works;