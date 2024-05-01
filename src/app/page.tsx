import Header from "@/components/header";
import ExploreCards from "../components/exploreCards";
import Button from "../components/button";
import SubFooter from "@/components/subFooter";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header
        btnContent="Get a copt of my resume!"></Header>
      {/* End of Header Component */}

      <section className="flex justify-center flex-col items-center mt-36">
        <p className="text-center font-bold text-7xl leading-tight">
          Charles Onuoha,<br></br>
          Software Engineer(Frontend)
        </p>
        <p className="text-center mt-8 text-xl">Based in Lagos, Nigeria</p>

        {/* CTA Button */}
        <div className="flex justify-center mt-7">
          <Button content="View Projects &#8594;" className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2"></Button>
        </div>
        {/* End of CTA Button */}
      </section>

      <section className="flex justify-center items-center flex-col text-center h-96 mt-48">
        <p className="font-extrabold text-xl text-zinc-700 mb-8">
          Brief Overview
        </p>
        <p className="font-bold mb-8 text-6xl">Sleep, Code && Repeat</p>
        <p className="w-3/4 text-xl leading-relaxed">
          With a keen eye for design and a deep understanding of the latest web
          technologies, I'm a driving force in crafting seamless and intuitive
          interfaces while implementing and maintaining functionality. My
          expertise lies in HTML5, CSS3, Javascript as foundation tools, and
          various frontend frameworks such as Vue, Nuxt, React,
          Next, SCSS, Tailwind, Tyescript etc. I am proficient in writing clean,
          maintainable code with a keen eye for design and user experience,
          ensuring that every pixel is perfectly in place.
        </p>
      </section>


      {/* explore cards section */}
      <section className="my-48 mx-auto w-4/5">
        <ExploreCards
          className="rounded-2xl text-white bg-red-500 py-16 px-9 text-center"
          btnStyle="bg-white text-red-500 py-4 px-8 rounded-lg mt-10"
          contentHeader="Get To Know About Me"
          contentBody="From what I'm working on, what I'm learning, the music I'm listening to,
          even the podcasts I'm currently hooked on, all that good stuff!"
          btnContent="Find Out More &#8594;">
        </ExploreCards>

        <div className="flex justify-between items-center">
          <ExploreCards
            className="rounded-2xl text-white bg-sky-500 py-16 px-9 mr-6 text-center"
            btnStyle="bg-white text-sky-500 py-4 px-8 rounded-lg mt-10"
            contentHeader="Featured Work"
            contentBody="Take a look at projects I've worked on, from challanegs I faced, to how I solved them."
            btnContent="Projects &#8594;">
          </ExploreCards>

          <ExploreCards
            className="rounded-2xl text-white bg-violet-500 py-16 px-4 ml-6 text-center"
            btnStyle="bg-white text-violet-500 py-4 px-8 rounded-lg mt-10"
            contentHeader="Want To Talk?"
            contentBody="Find out where you can reach me. If you want to talk about software, podcasts, football and all of that good stuff."
            btnContent="Reach Out To Me &#8594;">
          </ExploreCards>
        </div>
        <ExploreCards className="rounded-2xl text-white bg-teal-500 py-16 px-9 text-center"
          btnStyle="bg-white text-teal-500 py-4 px-8 rounded-lg mt-10"
          contentHeader="Checkout my technical articles."
          contentBody="I ocassionally write technical articles on frontend engineering
          fundamentals for beginners. If you're new to frontend engineering,
          you'd probably find something in there that you like."
          btnContent="Checkout My Articles &#8594;">
        </ExploreCards>
      </section>
      {/* End of explore cards section */}

      {/* sub-footer section */}
      <section className="flex justify-center mb-11">
        <SubFooter></SubFooter>
      </section>
      {/* End of sub-footer section */}

      {/* footer section */}
      <section className="mt-36">
        <Footer></Footer>
      </section>
      {/* end of footer section */}
    </div>
  );
};
export default Home;
