import Header from "../../../components/header"
import RickandMorty from "../../../../assets/images/RickandMorty.png"
import Button from "@/components/button"
import Footer from "@/components/footer"
import Image from "next/image";
import Link from "next/link"

const Rick_and_Morty = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2"></Header>
            {/* End of Header Component*/}

            <div className="mx-24">

                <div className="text-center">
                    <p className="font-bold text-slate-950 text-5xl mt-24">Rick And Morty</p>
                    <p className="mt-8 text-xl leading-loose">Locations, Characters and Episodes of popular TV show, <br></br>Rick and Morty.</p>
                    <div className="flex justify-center mt-8">
                        <Link target="_blank" href="https://rick-and-morty-six-gamma.vercel.app"><Button content="View Live" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"></Button></Link>
                        <Link target="_blank" href="https://github.com/Sideshow-Charles/rick-and-morty"><Button content="View On Github" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"></Button></Link>
                    </div>
                </div>

                {/* Hero Image*/}
                <div className="flex justify-center my-16">
                    <Image src={RickandMorty} alt="Hero Image" className="rounded-2xl w-12/12" />
                </div>
                {/* End of Hero Image*/}

                <div className="mb-48">

                    <p className="font-bold text-slate-950 text-3xl">Project Description:</p>
                    <p className="mt-8 text-xl leading-loose">Inspired by my love for the show, I found a free API with data about the show
                        and I felt to do something with it. The API contains Locations used on the show, characters on the show, past and present
                        and Episodes of the show.
                    </p>

                    <p className="font-bold text-slate-950 text-3xl mt-24">Tools:</p>
                    <p className="mt-8 text-xl leading-loose">React, Tailwind, Redux, Typescript and React-Router.</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-left">
                        <p className=" text-xl mt-24 text-zinc-700">Previous</p>
                        <Link href="/projects/kolawole"><p className="font-black mt-2 mb-16 text-3xl text-slate-950">KOLAWOLE</p></Link>
                    </div>

                    <div className="text-right">
                        <p className=" text-xl mt-24 text-zinc-700">Next</p>
                        <Link target="_blank"href="https://github.com/Sideshow-Charles"><p className="font-black mt-2 mb-16 text-3xl text-slate-950">GITHUB</p></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Rick_and_Morty;