import React from "react";
import rendezvous from "../../../assets/images/rendezvous.png";
import kolawole from "../../../assets/images/kolawole.png";
import SpotifyNowPlaying from "../../../assets/images/SpotifyNowPlaying.png";
import checkout from "../../../assets/images/checkout.png";
import yomo from "../../../assets/images/yomo.png";
import Footer from "@/components/footer";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Project = {
  slug: string;
  title: string;
  year: string;
  sector: string;
  image: StaticImageData;
  imageAlt: string;
};

const projects: Project[] = [
  // {
  //   slug: "yomo-studios",
  //   title: "Yomo Studios",
  //   year: "2026",
  //   sector: "E-commerce / Events",
  //   image: yomo,
  //   imageAlt: "Yomo Studios Project Image",
  // },
  {
    slug: "flutterwave-checkout-v3",
    title: "Flutterwave Checkout v3",
    year: "2026",
    sector: "Payments",
    image: checkout,
    imageAlt: "Flutterwave Checkout v3 Project Image",
  },
  {
    slug: "spotify-now-playing",
    title: "Spotify Now Playing",
    year: "2026",
    sector: "Personal",
    image: SpotifyNowPlaying,
    imageAlt: "Spotify Now Playing Project Image",
  },
  {
    slug: "rendezvous",
    title: "Rendezvous",
    year: "2023",
    sector: "Events",
    image: rendezvous,
    imageAlt: "Rendezvous Project Image",
  },
  {
    slug: "kolawole-portfolio",
    title: "Kolawole's Portfolio",
    year: "2022",
    sector: "Portfolio",
    image: kolawole,
    imageAlt: "Kolawole's Portfolio Project Image",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto animate-fadeIn duration-1000 delay-1000 ease-in">
        <section className="mt-64 mb-24 text-center max-md:mx-12 max-sm:mx-6">
          <p className="font-bold text-7xl leading-tight text-orange-500 max-md:text-5xl max-sm:text-4xl">
            Selected Projects.
          </p>
          <p className="mt-8 text-xl w-3/6 mx-auto max-md:text-lg max-md:w-full max-sm:text-base">
            Take a look at a few projects I have worked on, to see how I bring concepts to life and prioritize user experience.
          </p>
        </section>

        <section className="px-12 max-sm:px-4 w-screen relative left-1/2 -translate-x-1/2 max-w-[100rem] mx-auto">
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-xl aspect-[4/3] bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/70 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100 max-md:bg-black/60">
                  <h2 className="font-bold text-white text-4xl tracking-tight max-sm:text-3xl">
                    {project.title}
                  </h2>
                  <div className="mt-4 flex items-center gap-3 text-sm uppercase tracking-wider text-zinc-300">
                    <span>{project.year}</span>
                    <span aria-hidden="true" className="text-zinc-500">
                      &middot;
                    </span>
                    <span>{project.sector}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/60 pb-0.5">
                    View case study
                    <span aria-hidden="true">&#x2197;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex w-full pl-4 mt-24">
          <div className="mr-auto flex flex-col items-start">
            <p className="text-lg text-zinc-700 ml-6 max-md:text-lg max-sm:text-base">
              Previous
            </p>
            <Link href="/work">
              <p className="font-black mt-2 mb-16 text-3xl text-orange-500 hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 max-md:text-2xl">
                <span className="inline-block ml-[-0.6952vw] transform rotate-[-140deg] relative top-[-0em]">
                  &#x2192;
                </span>
                WORK
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
