import Header from "@/components/header";
import ProjectDescription from "@/components/projectDescription";
import rendezvous from "../../../assets/images/rendezvous.png";
import kolawole from "../../../assets/images/kolaowle.png";
import Footer from "@/components/footer";
import Link from "next/link";
const Projects = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-sky-500 text-white py-2 px-4 border border-sky-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}

            {/* Hero Section */}
            <section className="flex justify-center flex-col items-center mt-36 mb-24">
                <p className="text-center font-bold text-7xl leading-tight text-sky-500">Checkout Selected Projects <br></br>I've Worked On</p>
                <p className="text-center mt-8 text-xl text-sky-500">Take a look at a few projects I've worked on,<br></br> from challanegs I faced, to how I solved them.</p>
            </section>
            {/* End of Hero Section */}

            {/* Project Section */}
            <ProjectDescription
                projectName="Rendezvous"
                projectImage={rendezvous}
                projectStatus="Ongoing"
                projectOverview="Rendezvous is a merchant view of an event manangement system.
                Rendezvous shows you a list of events available and you can selectively view details for each event and purchase tickets.
                Worked on this using Nuxt (a Vue framework), vanilla CSS for styling and javascript for logic. The events being displayed
                are gotten from a dummy API and they're pretty much dummy events."
                projectLink="https://rendezvous-black.vercel.app"
                projectCode="https://github.com/Sideshow-Charles/Rendezvous"
                projectTechnology="Nuxt, Javascript, CSS">
            </ProjectDescription>

            <ProjectDescription
                projectName="Kolawole's Portfolio"
                projectImage={kolawole}
                projectStatus="Ongoing"
                projectOverview="Online portfolio for Kolawole Popoola, A digital product designer.
                I Worked on this using Nuxt (a Vue framework), vanilla CSS for styling and javascript for logic. The events being displayed
                are gotten from a dummy API and they're pretty much dummy events."
                projectLink="https://kola-beige.vercel.app"
                projectCode="https://github.com/Sideshow-Charles/Kolawole-Portfolio"
                projectTechnology="Nuxt, Javascript, CSS">
            </ProjectDescription>
            {/* End of Project Section */}

            <Footer></Footer>
        </div>
    )
}
export default Projects;