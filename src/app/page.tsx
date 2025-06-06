import Link from "next/link";
import Header from "@/components/header";
import ExploreCards from "../components/exploreCards";
import Button from "../components/button";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Component */}
      <Header
        btnclassName="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-slate-950 duration-200"
      />
      {/* End of Header Component */}

      <section className="flex justify-center flex-col items-center mt-36">
        <div className="animate-fadeIn duration-1000 delay-1000 ease-in">
          <p className="text-center font-bold text-7xl leading-tight max-md:text-5xl max-sm:text-4xl">
            Charles Onuoha,<br /> Software Engineer(Frontend).
          </p>
          <p className="text-center mt-8 text-xl max-md:text-lg">Based in Lagos, Nigeria</p>
        

        {/* CTA Button */}
        <div className="flex justify-center mt-7">
          <Link href="/projects" passHref>
            <Button
              content="View Projects &#8594;"
              className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"
            />
          </Link>
        </div>
        </div>
        {/* End of CTA Button */}
      </section>

      <section className="flex justify-center items-center flex-col text-center my-48">
        <p className="font-extrabold text-xl text-zinc-700 mb-8 max-md:text-lg">Brief Overview</p>
        <p className="font-bold mb-8 text-6xl max-md:text-3xl">Sleep, Code && Repeat</p>
        <p className="text-center w-3/4 text-xl leading-normal max-md:w-full max-md:text-lg px-4 max-sm:text-base leading-10">
          With a keen eye for design and a deep understanding of the latest web
          technologies, I'm a driving force in crafting seamless and intuitive
          interfaces while implementing and maintaining functionality. My
          expertise lies in HTML5, CSS3, Javascript (ES5, ES6) as foundation tools, and
          various frontend frameworks such as Vue, Nuxt, React, Next, SCSS, Tailwind, Typescript etc. I am proficient in writing clean,
          maintainable code with a keen eye for design and user experience,
          ensuring that every pixel is perfectly in place.
        </p>
      </section>

      {/* explore cards section */}
      <section className="my-48 max-w-7xl mx-auto w-4/5 max-md:w-12/12">
        <Link href="/about" passHref>
          <ExploreCards
            className="rounded-2xl text-white bg-red-500 py-16 px-9 text-center max-md:px-3"
            btnStyle="bg-white text-red-500 py-4 px-8 rounded-lg mt-10 max-md:px-4 text-base"
            contentHeader="Get To Know Me"
            contentBody="From what I'm working on, what I'm learning, the music I'm listening to,
            even the podcasts I'm currently hooked on, all that good stuff!"
            btnContent="Find Out More &#8594;"
          />
        </Link>

        <div className="flex justify-between items-center max-md:flex-col">
        <Link href="/work" passHref>
            <ExploreCards
              className="rounded-2xl text-white bg-violet-500 py-16 px-4 mr-6 text-center max-md:mr-0"
              btnStyle="bg-white text-violet-500 py-4 px-8 rounded-lg mt-10 max-md:px-4 text-base"
              contentHeader="Work History"
              contentBody="Take a look at places I've worked, roles and teams I worked in, also daily tasks I performed."
              btnContent="Work History &#8594;"
            />
          </Link>

          <Link href="/projects" passHref>
            <ExploreCards
              className="rounded-2xl text-white bg-orange-500 py-16 px-9 ml-6 text-center max-md:ml-0"
              btnStyle="bg-white text-orange-500 py-4 px-8 rounded-lg mt-10 max-md:px-4 text-base"
              contentHeader="Projects"
              contentBody="Take a look at projects I've worked on, from challenges I faced, to how I solved them."
              btnContent="Projects &#8594;"
            />
          </Link>
        </div>

        <a
          href="mailto:charlesonuoha97@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExploreCards
            className="rounded-2xl text-white bg-teal-500 py-16 px-9 text-center"
            btnStyle="bg-white text-teal-500 py-4 px-8 rounded-lg mt-10 max-md:px-4 text-base"
            contentHeader="Want To Talk?"
            contentBody="Reach me if you want to talk about software, podcasts, football and all of that good stuff.."
            btnContent="Reach Out To Me &#8594;"
          />
        </a>
      </section>
      {/* End of explore cards section */}

      {/* footer section */}
      <section className="mt-36">
        <Footer />
      </section>
      {/* end of footer section */}
    </div>
  );
};

export default Home;