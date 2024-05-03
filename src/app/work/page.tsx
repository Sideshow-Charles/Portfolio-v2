import Header from "../../components/header"
import SubFooter from "@/components/subFooter";
import Footer from "@/components/footer";
const Works = () => {
    return (
        <div>
            <div className="header-section">
                <Header btnclassName="bg-violet-500 text-white py-2 px-4 border border-violet-500 rounded-md mx-2"></Header>
            </div>

            {/* Hero Section */}
            <section className="flex justify-center flex-col items-center mt-36 mb-24">
                <p className="text-center font-bold text-7xl leading-tight text-violet-500">
                    Work History & <br></br> Career Overview
                </p>
                <p className="text-center mt-8 text-xl text-violet-500 font-bold">(2017 - Present)</p>
            </section>
            {/* End of Hero Section */}

            <section className="flex justify-center items-center flex-col my-52 text-center">
                <p className="font-bold text-violet-500 text-5xl">Flutterwave</p>
                <p className="mt-8 text-xl text-dark">(2021 - Present)</p>
                <p className="mt-2 text-xl text-dark">Frontend Engineer (Engineer I, Engineer II)</p>
                <p className="w-3/4 text-xl leading-relaxed mt-8"> Over at Flutterwave, (An African fintech company that provides a payment infrastructure for global merchants and payment service providers across the world), I've spent the last three years working on the white-label product, where I've built on and managed existing products like the flutterwave dashboard and checkout for white-label merchants. I also worked on building email templates and oversaw implementation of these emails across different products, marketing and brand emails. </p>
                <p className="mt-8 text-xl text-dark font-bold">Technologies: Vue.js, Nuxt.js, SCSS, HTML, CSS, Handlebars.js</p>
            </section>
            <Footer></Footer>
        </div>
    )
}
export default Works;