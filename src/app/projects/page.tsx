import Header from "@/components/header";
import rendezvous from "../../../assets/images/rendezvous.png";
import kolawole from "../../../assets/images/kolawole.png";
import rickandmorty from "../../../assets/images/RickandMorty.png"
import Footer from "@/components/footer";
import Link from "next/link";
import Button from "@/components/button";
import Image from "next/image";
const Projects = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-gray-500 text-white py-2 px-4 border border-gray-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}

            {/* Hero Section */}
            <section className=" mt-36 mx-24 text-center">
                <p className="font-bold text-7xl leading-tight text-gray-500">Checkout Selected <br></br>Projects I've Worked On.</p>
                <p className="mt-8 text-xl text-gray-500">Take a look at a few projects I've worked on, from challanegs I faced,<br></br> to how I solved them.</p>
            </section>
            {/* End of Hero Section */}

            {/* Project Section */}
            <div className="flex justify-around items-center my-52 mx-16">
                <div className="w-8/12">
                    <Link href="/projects/rendezvous">
                        <Image src={rendezvous} alt="Project Image" className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" />
                    </Link>
                </div>
                <div className="w-3/12 text-right">
                    <p className="font-bold text-gray-500 text-3xl mb-2">Rendezvous</p>
                    <p className="text-xxxl leading-relaxed my-4">Rendezvous is a merchant view of an event manangement system.</p>
                    <Link href="/projects/rendezvous"><Button content="View Project" className="bg-gray-500 text-white py-2 px-4 border border-gray-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 duration-200"></Button></Link>
                </div>
            </div>

            <div className="flex justify-around items-center flex-row-reverse my-52 mx-16">
                <div className="w-8/12">
                    <Link href="/projects/kolawole">
                        <Image src={kolawole} alt="Project Image" className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" />
                    </Link>
                </div>
                <div className="w-3/12">
                    <p className="font-bold text-gray-500 text-3xl mb-2">Kolawole's Portfolio</p>
                    <p className="text-xxxl leading-relaxed my-4">Online portfolio for Kolawole Popoola, A digital product designer.</p>
                    <Link href="/projects/kolawole"><Button content="View Project" className="bg-gray-500 text-white py-2 px-4 border border-gray-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 duration-200"></Button></Link>
                </div>
            </div>

            <div className="flex justify-around items-center my-52 mx-16">
                <div className="w-8/12">
                    <Link href="/projects/rick-and-morty">
                        <Image src={rickandmorty} alt="Project Image" className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" />
                    </Link>
                </div>
                <div className="w-3/12">
                    <p className="font-bold text-gray-500 text-3xl mb-2">Rick and Morty info</p>
                    <p className="text-xxxl leading-relaxed my-4">Locations, Characters and Episodes of popular TV show, Rick and Morty.</p>
                    <Link href="/projects/rick-and-morty"><Button content="View Project" className="bg-gray-500 text-white py-2 px-4 border border-gray-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-600 duration-200"></Button></Link>
                </div>
            </div>
            {/* End of Project Section */}

            <Footer></Footer>
        </div>
    )
}
export default Projects;