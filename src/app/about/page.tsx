import Image from "next/image"
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

const About = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-red-500 text-white py-2 px-4 border border-red-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}

            <section className="flex justify-around items-start my-48 mx-24 max-md:flex-col-reverse my-12 max-sm:mx-6">
                <div className="w-3/6 max-md:w-full">
                    <p className="font-bold text-5xl text-red-500 max-md:text-4xl max-sm:text-3xl">Overview.</p>
                    <p className="mt-8 text-xl text-dark leading-relaxed">I'm Charles, A Frontend Engineer with over four years
                        of experience in developing, and deploying high-performance software solutions. Proven expertise in Javascript
                        and it’s frameworks, coupled with a strong foundation in product knowledge. Adept at collaborating with
                        cross-functional teams and delivering robust, scalable solutions to meet business objectives.</p>

                    <p className=" mt-16 text-xl leading-relaxed">I currently work at <a href="https://flutterwave.com" className="text-red-500">Flutterwave</a>, An African fintech company that provides a payment infrastructure for global merchants and payment service providers across the world.
                        Before then, I worked at <a href="https://www.instiq.com" className="text-red-500">Instiq</a>, a software solutions company that specializes in
                        building software solutions across different sectors.</p>

                    <p className=" mt-16 text-xl leading-relaxed"> You can read more about my career overview on the <Link href="/work" className="text-red-500">work page</Link>.</p>

                    <p className=" mt-8 text-xl text-dark leading-relaxed">My Software Engineering journey is a very surprising one. In 2017,
                        I wanted to be a <span className="italic font-extrabold text-dark-200">Network Engineer</span>. I had a four month <span className="italic font-extrabold text-dark-200">Industrial Training </span>
                        where I was meant to be trained as a <span className="italic font-extrabold text-dark-200">Network Engineer</span>,
                        the <span className="italic font-extrabold text-dark-200">Network Engineers</span> where never available because it was a busy period for them, which made me spend the four months getting trained
                        in <span className="italic font-extrabold text-dark-200">System Adminstration.</span> <br></br> <br></br> During that period, I spent a lot of time around the software engineers and became very very curious
                        and interested in what they did, which had me trying a lot of things.</p>
                </div>
                <Image src={Charles}
                    alt="Logo"
                    width={350}
                    className="max-md:w-full mb-24"
                ></Image>
            </section>
            <section className="flex flex-col my-24 mx-24 px-16 max-md:px-0 max-sm:mx-6 px-0">
                <p className="text-red-500 font-bold text-5xl max-md:text-4xl max-sm:text-3xl">Skills & Tools.</p>
                <p className="mt-8 text-xl leading-relaxed w-3/4 max-md:w-full">Across my four year career as a Frontend Engineer, working on
                    different products across different sectors, here are tools I've used to get work done and very conformtable working with;</p>
                <p className="text-dark-200 mt-8 text-xl leading-relaxed font-extrabold w-2/4 max-md:w-full">HTML5, CSS, SCSS, Bootstrap, Tailwind Javascript, Typescript,
                    React, Vue, Next, Nuxt, Jest, Git, Postman</p>
            </section>

            <section className="flex flex-col my-52 mx-24 px-16 max-md:px-0 max-sm:mx-6 px-0">
                <p className="text-red-500 font-bold text-5xl max-md:text-4xl max-sm:text-3xl">When I'm Not Writing Code?</p>
                <p className="mt-8 text-xl leading-relaxed w-3/4 max-md:w-full">When I'm not at work or writing code, I listen to a lot of music; notthing specific,
                ranging across multiple genres. Pusha T this minute, Estelle the next, nothing limited. <br></br><br></br>
                
                I watch a lot of football, I'm a Manchester United fan with keen interest in clubs like 
                Tottenham Hotspur and Inter Milan.<br></br><br></br>

                I'm very big on podcasts, here a selected few of them I listen to; </p>
                <div className="flex justify-around flex-wrap my-16 mx-8">
                <Image src={Essential}
                    alt="234 Essential Podcast"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={HappyHour}
                    alt="Frontend Happy Hour Podcast"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={LooseTalk}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={Miccheque}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={SincerelyAccra}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={TheDaily}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={ZeroConditions}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={Sobering}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                <Image src={GabandJuls}
                    alt="Logo"
                    width={300}
                    className="mb-16 rounded-md"
                ></Image>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
export default About;