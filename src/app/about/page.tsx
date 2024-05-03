import Footer from "@/components/footer";
import Header from "@/components/header";

const About = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-red-500 text-white py-2 px-4 border border-red-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}

            {/* Hero Section */}
            <section className="flex justify-center flex-col items-center mt-36 mb-24">
                <p className="text-center font-bold text-7xl leading-tight text-red-500">Get To Know About Me <br></br>Professionally & Personally</p>
                <p className="text-center mt-8 text-xl text-red-500">From what I'm working on, to the music I'm listening to, <br></br>even the podcasts I'm currently hooked on!</p>
            </section>
            {/* End of Hero Section */}
        </div>
    )
}

export default About;