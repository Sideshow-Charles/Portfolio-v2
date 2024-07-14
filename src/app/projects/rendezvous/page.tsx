import Header from "../../../components/header"
import rendezvous from "../../../../assets/images/rendezvous.png"
import Button from "@/components/button"
import Footer from "@/components/footer"
import Image from "next/image";
import Link from "next/link"
import EventMenu from "../../../../assets/images/event-menu.png"
import EventMenu2 from "../../../../assets/images/EventMenu2.png"

const Rendezvous = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2"></Header>
            {/* End of Header Component*/}

            <div className="mx-24 max-md:mx-12 max-sm:mx-6">

                <div className="text-center">
                    <p className="font-bold text-slate-950 text-5xl mt-24 max-md:text-4xl max-sm:text-3l">Rendezvous</p>
                    <p className="mt-8 text-xl leading-loose max-md:text-lg max-sm:text-base">Event Planning and Organization, Registration and Ticketing,<br></br>
                        all in one place.</p>
                    <div className="flex justify-center mt-8">
                        <Link target="_blank" href="https://rendezvous-black.vercel.app"><Button content="View Live" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200 max-md:text-lg max-sm:text-base"></Button></Link>
                        <Link target="_blank" href="https://github.com/Sideshow-Charles/Rendezvous"><Button content="View On Github" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200 max-md:text-lg max-sm:text-base"></Button></Link>
                    </div>
                </div>

                {/* Hero Image*/}
                <div className="flex justify-center my-16">
                    <Image src={rendezvous} alt="Hero Image" className="rounded-2xl w-12/12" />
                </div>
                {/* End of Hero Image*/}

                <div className="mb-48">

                    <p className="font-bold text-slate-950 text-3xl max-md:text-2xl">Project Description:</p>
                    <p className="mt-8 text-xl leading-relaxed max-md:text-lg leading-loose mt-4 max-sm:text-base">Rendezvous is a merchant view of and event management system. Rendezvous shows a user
                        a list of events available, details of these events, contact information to the organizers of these events and ability
                        to purchase tickets. <br></br>
                        Rendezvous allows users to search for events by keywords and also by categories. It's built on the web and also
                        available and compactible on every device with internet connectivity.</p>

                    <p className="font-bold text-slate-950 text-3xl mt-24 max-md:text-2xl">Tools:</p>
                    <p className="mt-8 text-xl leading-relaxed max-md:text-lg leading-loose mt-4 max-sm:text-base">I worked on this project strictly as a Frontend Engineer and these are the list of tools I used in the development of this project:<br></br>
                        Nuxt.js (a Vue.js framework), CSS, Javascript(ES6).</p>

                    <p className="font-bold text-slate-950 text-3xl mt-24 max-md:text-2xl">Events Section</p>
                    <p className="mt-8 mb-16 text-xl leading-relaxed max-md:text-lg leading-loose mt-4 mb-8 max-sm:text-base">Snapshots of the events list section:</p>
                    <div className="flex justify-between items-center max-md:flex-col">
                        <Image src={EventMenu} alt="event menu" className="rounded-md w-6/12 max-md:w-full mb-8" />
                        <Image src={EventMenu2} alt="event menu" className="rounded-md w-6/12 max-md:w-full" />
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-xl mt-24 text-zinc-700 max-md:text-lg max-sm:text-base">Next</p>
                    <Link href="/projects/kolawole"><p className="font-black mt-2 mb-16 text-3xl text-slate-950 max-md:text-2xl">KOLAWOLE'S PORTFOLIO</p></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Rendezvous;