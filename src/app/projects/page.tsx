import Header from "@/components/header";

const Projects = () => {
    return (
        <div>
            {/* Header Component */}
            <Header btnclassName="bg-sky-500 text-white py-2 px-4 border border-sky-500 rounded-md mx-2"></Header>
            {/* End of Header Component */}
            
            {/* Hero Section */}
            <section className="flex justify-center flex-col items-center mt-36 mb-24">
                <p className="text-center font-bold text-7xl leading-tight text-sky-500">Checkout Selected Projects <br></br>I've Worked On</p>
                <p className="text-center mt-8 text-xl text-sky-500">Take a look at a few projects I've worked on,<br></br> from challanegs I faced, to how I solved them.</p>
            </section>
            {/* End of Hero Section */}
        </div>
    )
}

export default Projects;