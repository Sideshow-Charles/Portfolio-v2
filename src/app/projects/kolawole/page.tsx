import Header from "../../../components/header"
import kolawole from "../../../../assets/images/kolawole.png"
import Button from "@/components/button"
import Footer from "@/components/footer"
import Image from "next/image";
import Link from "next/link"

const Kolawole = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2"></Header>
            {/* End of Header Component*/}

            <div className="mx-24 max-md:mx-12 max-sm:mx-6">

                <div className="text-center">
                <p className="font-bold text-slate-950 text-5xl mt-24 max-md:text-4xl max-sm:text-3l">Kolawole's Portfolio</p>
                <p className="mt-8 text-xl leading-loose max-md:text-lg max-sm:text-base">Overview, Projects, Work History <br></br>
                        Of Kolawole, A Digital Product Designer</p>
                    <div className="flex justify-center mt-8">
                        <Link target="_blank" href="https://kola-beige.vercel.app"><Button content="View Live" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"></Button></Link>
                        <Link target="_blank" href="https://github.com/Sideshow-Charles/Kolawole-Portfolio"><Button content="View On Github" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"></Button></Link>
                    </div>
                </div>

                {/* Hero Image*/}
                <div className="flex justify-center my-16">
                    <Image src={kolawole} alt="Hero Image" className="rounded-2xl w-12/12" />
                </div>
                {/* End of Hero Image*/}

                <div className="mb-48">

                <p className="font-bold text-slate-950 text-3xl max-md:text-2xl">Project Description:</p>
                <p className="mt-8 text-xl leading-relaxed max-md:text-lg leading-loose mt-4 max-sm:text-base">Online Portfolio for Kolawole, A digital product designer.<br></br>
                        Idea was to display projects, work history,  Overview of Kolawole. It was built with the idea of getting to
                        know Kolawole, without meeting him in person.
                    </p>

                    <p className="font-bold text-slate-950 text-3xl mt-24 max-md:text-2xl">Tools:</p>
                    <p className="mt-8 text-xl leading-relaxed max-md:text-lg leading-loose mt-4 max-sm:text-base">Nuxt.js (a Vue.js framework), CSS, Javascript(ES6). It was designed by <Link target="_blank" className="underline" href="https://www.linkedin.com/in/kolawole-popoola-b61664143/">Kolawole Popoola.</Link></p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-left">
                    <p className="text-xl mt-24 text-zinc-700 max-md:text-lg max-sm:text-base">Previous</p>
                        <Link href="/projects/rendezvous"><p className="font-black mt-2 mb-16 text-3xl text-slate-950 max-md:text-2xl">RENDEZVOUS</p></Link>
                    </div>

                    <div className="text-right">
                    <p className="text-xl mt-24 text-zinc-700 max-md:text-lg max-sm:text-base">Next</p>
                        <Link href="/projects/rick-and-morty"><p className="font-black mt-2 mb-16 text-3xl text-slate-950 max-md:text-2xl">RICK AND MORTY</p></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Kolawole;