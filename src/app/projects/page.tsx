import React from "react";
import Header from "@/components/header";
import rendezvous from "../../../assets/images/rendezvous.png";
import kolawole from "../../../assets/images/kolawole.png";
import rickandmorty from "../../../assets/images/RickandMorty.png";
import Footer from "@/components/footer";
import Link from "next/link";
import Button from "@/components/button";
import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <div>
            {/* Header Component */}
            <Header 
                btnclassName="bg-orange-500 text-white py-2 px-4 border border-orange-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-orange-700 duration-200"
            />
            {/* End of Header Component */}

            <div className="animate-fadeIn duration-1000 delay-1000 ease-in">
            {/* Hero Section */}
            <section className="mt-36 mx-24 text-center max-md:mx-12 max-sm:mx-6">
                <p className="font-bold text-7xl leading-tight text-orange-500 max-md:text-5xl max-sm:text-4xl">
                    Selected Projects.
                </p>
                <p className="mt-8 text-xl w-3/6 mx-auto max-md:text-lg w-full max-sm:text-base">
                    Take a look at a few projects I have worked on, to see how I bring concepts to life and prioritize user experience.
                </p>
            </section>
            {/* End of Hero Section */}

            {/* Project Section */}
            <div className="flex justify-around items-center my-36 mx-16 max-md:flex-col my-16 mx-6">
                <div className="w-8/12 max-md:w-full">
                    <Link target="_blank" href="https://rendezvous-black.vercel.app">
                        <Image 
                            src={rendezvous} 
                            alt="Rendezvous Project Image" 
                            className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" 
                        />
                    </Link>
                </div>
                <div className="w-3/12 max-md:w-full text-left my-12">
                    <p className="font-bold text-orange-500 text-3xl mb-2">
                        Rendezvous
                    </p>
                    <p className="text-xxxl leading-relaxed my-4">
                        Rendezvous is a merchant view of an event management system.
                    </p>
                    <div className="flex">
                        <Link target="_blank" href="https://rendezvous-black.vercel.app">
                            <Button 
                                content="View Live" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200 mr-4" 
                            />
                        </Link>
                        {/* <Link target="_blank" href="https://github.com/Sideshow-Charles/Rendezvous">
                            <Button 
                                content="View On Github" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200" 
                            />
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-around items-center flex-row-reverse my-36 mx-16 max-md:flex-col mx-6">
                <div className="w-8/12 max-md:w-full">
                    <Link target="_blank" href="https://kola-beige.vercel.app">
                        <Image 
                            src={kolawole} 
                            alt="Kolawole's Portfolio Project Image" 
                            className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" 
                        />
                    </Link>
                </div>
                <div className="w-3/12 max-md:w-full my-12">
                    <p className="font-bold text-orange-500 text-3xl mb-2">
                        Kolawole's Portfolio
                    </p>
                    <p className="text-xxxl leading-relaxed my-4">
                        Online portfolio for Kolawole Popoola, a digital product designer.
                    </p>
                    <div className="flex">
                        <Link target="_blank" href="https://kola-beige.vercel.app">
                            <Button 
                                content="View Live" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200 mr-4" 
                            />
                        </Link>
                        {/* <Link target="_blank" href="https://github.com/Sideshow-Charles/Rendezvous">
                            <Button 
                                content="View On Github" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200" 
                            />
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-around items-center my-36 mx-16 max-md:flex-col mx-6">
                <div className="w-8/12 max-md:w-full">
                    <Link target="_blank" href="https://rick-and-morty-six-gamma.vercel.app">
                        <Image 
                            src={rickandmorty} 
                            alt="Rick and Morty Info Project Image" 
                            className="hover:scale-105 transition duration-300 ease-in-out rounded-lg h-full" 
                        />
                    </Link>
                </div>
                <div className="w-3/12 max-md:w-full text-left my-12">
                    <p className="font-bold text-orange-500 text-3xl mb-2">
                        Rick and Morty Info
                    </p>
                    <p className="text-xxxl leading-relaxed my-4">
                        Locations, Characters and Episodes of popular TV show, Rick and Morty.
                    </p>
                    <div className="flex">
                        <Link target="_blank" href="https://rick-and-morty-six-gamma.vercel.app">
                            <Button 
                                content="View Live" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200 mr-4" 
                            />
                        </Link>
                        {/* <Link target="_blank" href="https://github.com/Sideshow-Charles/rick-and-morty">
                            <Button 
                                content="View On Github" 
                                className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-200" 
                            />
                        </Link> */}
                    </div>
                </div>
            </div>
            </div>
            {/* End of Project Section */}
            <div className="flex w-full pl-4">
                <div className="mr-auto flex flex-col items-start">
                    <p className="text-lg text-zinc-700 ml-6 max-md:text-lg max-sm:text-base">Previous</p>
                    <Link href="/work">
                        <p className="font-black mt-2 mb-16 text-3xl text-orange-500 hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 max-md:text-2xl"><span className="inline-block ml-[-0.6952vw] transform rotate-[-140deg] relative top-[-0em]">&#x2192;</span>
                            WORK
                        </p>
                    </Link>
                </div>
            </div>
            {/* Footer Component */}
            <Footer />
            {/* End of Footer Component */}
        </div>
    );
};

export default Projects;
