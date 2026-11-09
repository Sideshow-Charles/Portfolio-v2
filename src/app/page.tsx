import Link from "next/link";
import Header from "@/components/header";
import ExploreCards from "../components/exploreCards";
import Button from "../components/button";
import Footer from "../components/footer";

type ExploreTile = {
  href: string;
  external?: boolean;
  bg: string;
  arrowColor: string;
  header: string;
  body: string;
  area: string;
};

const tiles: ExploreTile[] = [
  {
    href: "/about",
    bg: "rounded-2xl text-white bg-red-500 p-9 max-md:p-7 max-md:mb-5",
    arrowColor: "text-red-500",
    header: "Get To Know Me",
    body: "From what I'm working on, what I'm learning, the music I'm listening to, even the podcasts I'm currently hooked on, all that good stuff!",
    area: "know",
  },
  {
    href: "/work",
    bg: "rounded-2xl text-white bg-violet-500 p-9 max-md:p-7 max-md:mb-5",
    arrowColor: "text-violet-500",
    header: "Work History",
    body: "Take a look at places I've worked, roles and teams I worked in, also daily tasks I performed.",
    area: "work",
  },
  {
    href: "/projects",
    bg: "rounded-2xl text-white bg-orange-500 p-9 max-md:p-7 max-md:mb-5",
    arrowColor: "text-orange-500",
    header: "Projects",
    body: "Projects I've worked on, from challenges I faced, to how I solved them.",
    area: "projects",
  },
  {
    href: "mailto:charlesonuoha97@gmail.com",
    external: true,
    bg: "rounded-2xl text-white bg-teal-500 p-9 max-md:p-7 max-md:mb-5",
    arrowColor: "text-teal-500",
    header: "Want To Talk?",
    body: "Reach me if you want to talk about software, podcasts, football and all of that good stuff..",
    area: "talk",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <section className="flex justify-center flex-col items-center mt-56">
          <div className="animate-fadeIn duration-1000 delay-1000 ease-in">
            <p className="text-center font-bold text-7xl leading-tight max-md:text-5xl max-sm:text-4xl">
              Charles Onuoha,<br /> Software Engineer(Frontend).
            </p>
            <p className="text-center mt-8 text-xl max-md:text-lg">
              Based in Lagos, Nigeria
            </p>

            <div className="flex justify-center mt-7">
              <Link href="/projects" passHref>
                <Button
                  content="View Projects &#8594;"
                  className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-dark duration-200"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center flex-col text-center my-48">
          <p className="font-extrabold text-xl text-zinc-700 mb-8 max-md:text-lg">
            Brief Overview
          </p>
          <p className="font-bold mb-8 text-6xl max-md:text-3xl">
            Sleep, Code && Repeat
          </p>
          <p className="text-center w-3/4 text-xl leading-normal max-md:w-full max-md:text-lg px-4 max-sm:text-base leading-10">
            With a keen eye for design and a deep understanding of the latest web
            technologies, I'm a driving force in crafting seamless and intuitive
            interfaces while implementing and maintaining functionality. My
            expertise lies in HTML5, CSS3, Javascript (ES6) as foundation tools, and
            various frontend frameworks such as Vue, Nuxt, React, Next, SCSS, Tailwind, Typescript etc. I am proficient in writing clean,
            maintainable code with a keen eye for design and user experience,
            ensuring that every pixel is perfectly in place.
          </p>
        </section>

        {/* Explore grid */}
        <section className="my-48 w-4/5 mx-auto max-md:w-full max-md:px-4">
          <div className="explore-grid">
            {tiles.map((tile) => {
              const inner = (
                <ExploreCards
                  className={tile.bg}
                  contentHeader={tile.header}
                  contentBody={tile.body}
                  arrowColor={tile.arrowColor}
                />
              );
              const wrapperClass =
                "block h-full mb-5 md:mb-0 transition-transform duration-300 hover:-translate-y-1";

              return tile.external ? (
                <a
                  key={tile.area}
                  href={tile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wrapperClass}
                  style={{ gridArea: tile.area }}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={tile.area}
                  href={tile.href}
                  passHref
                  className={wrapperClass}
                  style={{ gridArea: tile.area }}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <section className="mt-36">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
