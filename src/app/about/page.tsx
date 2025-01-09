import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import Charles from "../../../assets/images/Charles.jpeg";
import Footer from "@/components/footer";
import Essential from "../../../assets/images/234Essential.webp";
import HappyHour from "../../../assets/images/frontendhappyhour.svg";
import LooseTalk from "../../../assets/images/LooseTalk.webp";
import Miccheque from "../../../assets/images/miccheque.jpeg";
import SincerelyAccra from "../../../assets/images/sincerelyaccra.png";
import Sobering from "../../../assets/images/sobering.jpeg";
import TheDaily from "../../../assets/images/thedaily.jpeg";
import ZeroConditions from "../../../assets/images/zeroconditions.jpeg";
import GabandJuls from "../../../assets/images/GabandJuls.jpeg";


const About: React.FC = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-red-500 text-white py-2 px-4 border border-red-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-red-700 duration-200 hover:shadow-2xl" />
            {/* End of Header Component */}

            <div className="max-w-7xl mx-auto">
                <section className="animate-fadeIn duration-1000 delay-1000 ease-in flex justify-around items-start my-48 max-md:flex-col-reverse max-md:mx-6 max-sm:mx-6">
                    <div className="w-3/6 max-md:w-full">
                        <p className="font-bold text-5xl text-red-500 max-md:text-4xl max-sm:text-3xl">Overview.</p>
                        <p className="mt-8 text-xl text-dark leading-relaxed max-md:text-lg max-sm:text-base leading-loose">
                            I'm Charles, A Frontend Engineer with over four years
                            of experience in developing, and deploying high-performance software solutions. Proven expertise in Javascript
                            and it’s frameworks, coupled with a strong foundation in product knowledge. Adept at collaborating with
                            cross-functional teams and delivering robust, scalable solutions to meet business objectives.
                        </p>

                        <p className="mt-16 text-xl leading-relaxed max-md:text-lg max-sm:text-base leading-loose">
                            I currently work at <a target="_blank" href="https://flutterwave.com" className="text-red-500">Flutterwave</a>, An African fintech company that provides a payment infrastructure for global merchants and payment service providers across the world.
                            Before then, I worked at <a target="_blank" href="https://www.instiq.com" className="text-red-500">Instiq</a>, a software solutions company that specializes in
                            building software solutions across different sectors.</p>

                        <p className="mt-16 text-xl leading-relaxed max-md:text-lg max-sm:text-base leading-loose">
                        You can read more about my career overview on the <Link href="/work" className="text-red-500">work page</Link>.</p>

                        <p className=" mt-8 text-xl text-dark leading-relaxed max-md:text-lg max-sm:text-base leading-loose">My Software Engineering journey is a very surprising one. In 2017,
                            I wanted to be a <span className="italic font-extrabold text-dark-200">Network Engineer</span>. I had a four month <span className="italic font-extrabold text-dark-200">Industrial Training </span>
                            where I was meant to be trained as a <span className="italic font-extrabold text-dark-200">Network Engineer</span>,
                            the <span className="italic font-extrabold text-dark-200">Network Engineers</span> were never available because it was a busy period for them, which made me spend the four months getting trained
                            in <span className="italic font-extrabold text-dark-200">System Adminstration.</span> <br></br> <br></br> During that period, I spent a lot of time around the software engineers and became really curious
                            and interested in what they did, which had me trying a lot of things.</p>
                    </div>

                    <Image src={Charles} alt="Charles Onuoha" className="max-md:w-3/6 mb-24 max-sm:w-full" />
                </section>

                <section className="flex flex-col my-24 px-16 max-md:px-8  px-0">
                    <p className="text-red-500 font-bold text-5xl max-md:text-4xl max-sm:text-3xl">Skills & Tools.</p>
                    <div className="w-4/6 max-md:w-full">
                        <p className="mt-8 text-xl leading-relaxed max-md:text-lg w-full max-sm:text-base leading-loose">Across my four year career as a Frontend Engineer, working on
                            different products across different sectors, here are tools I've used to get work done and very conformtable working with;</p>
                        <p className="text-dark-200 mt-8 text-xl leading-relaxed font-extrabold w-2/4 max-md:text-lg w-full max-sm:text-base leading-loose">HTML5, CSS, SCSS, Bootstrap, Tailwind Javascript, Typescript,
                            React, Vue, Next, Nuxt, Jest, Git, Postman</p>
                    </div>
                </section>

                <section className="flex flex-col mt-52 px-16 max-md:px-8">
                    <p className="text-red-500 font-bold text-5xl max-md:text-4xl max-sm:text-3xl">When I'm Not Writing Code?</p>
                    <div className="w-4/6 max-md:w-full">
                        <p className="mt-8 text-xl leading-relaxed w-3/4 max-md:text-lg w-full max-sm:text-base leading-loose">When I'm not at work or writing code, I listen to a lot of music; nothing specific,
                            ranging across multiple genres. Pusha T this minute, Estelle the next, nothing limited. <br></br><br></br>

                            I watch a lot of football, I'm a Manchester United fan with keen interest in clubs like
                            Tottenham Hotspur and Inter Milan.<br></br><br></br>

                            I'm very big on podcasts, here a selected few of them I listen to; </p>
                    </div>

                    <div className="flex justify-between flex-wrap my-16 max-md:justify-center">
                        <a href="https://open.spotify.com/show/5V8IeydCBDLwUc3E9kluiC?si=c75a946d929f4ad9" target="_blank" rel="noopener noreferrer">
                            <Image src={Essential} alt="234 Essential Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/0Giuw6eNbTzP9CDZODDrA2?si=fac38bb81fa744be" target="_blank" rel="noopener noreferrer">
                            <Image src={HappyHour} alt="Frontend Happy Hour Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/0VbJJTihIQ7OFrC2vA5Aej?si=5233e7afade144c5" target="_blank" rel="noopener noreferrer">
                            <Image src={LooseTalk} alt="LooseTalk Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/3JI1oNMx00PeIIxJfbz4ux?si=2445232ca9b849b7" target="_blank" rel="noopener noreferrer">
                            <Image src={Miccheque} alt="Mic Cheque Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/0YrGiZbIFLuUjhEOlLKPxh?si=97f8bf3cc5744c8b" target="_blank" rel="noopener noreferrer">
                            <Image src={SincerelyAccra} alt="Sincerely Accra Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/3IM0lmZxpFAY7CwMuv9H4g?si=e3ee27bef0cc4fb6" target="_blank" rel="noopener noreferrer">
                            <Image src={TheDaily} alt="The Daily Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/2vHU0PPLc07S03lK9mHG0e?si=a0a038a276cf4b7f" target="_blank" rel="noopener noreferrer">
                            <Image src={ZeroConditions} alt="Zero Conditions Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/1t6XNlxeQ1vFk4dVw1hJNu?si=66d8b4e4e8684185" target="_blank" rel="noopener noreferrer">
                            <Image src={Sobering} alt="Sobering Podcast" width={300} className="mb-16 rounded-md" />
                        </a>
                        <a href="https://open.spotify.com/show/3QaGBvwVZ21OgzmZkN8B9N?si=0478e820bd6740ae" target="_blank" rel="noopener noreferrer">
                            <Image src={GabandJuls} alt="Gab and Juls Podcast" width={300} className="mb-16 rounded-md max-md:mb-0" />
                        </a>
                    </div>
                </section>
                <div className="flex w-full pr-4">
                    <div className="ml-auto flex flex-col items-end">
                        <p className="text-xl text-zinc-700 mr-10 max-md:text-lg max-sm:text-base">Next</p>
                        <Link href="/work">
                            <p className="font-black mt-2 mb-16 text-3xl text-red-500 hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 max-md:text-2xl">
                                WORK <span className="inline-block transform rotate-[-40deg] relative top-[-0.18em]">&#x2192;</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
