import Image from "next/image";
import Button from "../components/button"
const ProjectDescription = (props: any) => {
    const projectName = props.projectName;
    const projectImage = props.projectImage;
    const projectOverview = props.projectOverview;
    // const projectLink = props.projectLink;
    // const projectTechnology = props.projectTechnology;
    // const projectStatus = props.projectStatus;
    // const projectCode = props.projectCode
    return (
        <div>
            <section className="my-52 mx-24">
                <div className="flex justify-around items-center">
                    <div className="w-7/12">
                        <Image src={projectImage} alt="Project Image" />
                    </div>
                    <div className="w-4/12">
                    <p className="font-bold text-orange-500 text-3xl mb-2">{projectName}</p>
                        <p className="text-xxxl leading-relaxed my-4">{projectOverview}</p>
                        <Button content="View Project" className="bg-orange-500 text-white py-2 px-4 border border-orange-100 rounded-md"></Button>
                        {/* <p className="text-xxxl leading-relaxed mt-2"><b className="text-black">Live View:</b> <a className="text-orange-500" href={projectLink} target="_blank">{projectLink}</a></p>
                        <p className="text-xxxl leading-relaxed mt-2"><b className="text-black">Source Code:</b> <a className="text-orange-500" href={projectCode} target="_blank">{projectCode}</a></p>
                        <p className="mt-8 text-xxxl text-orange-500 font-bold">Stack: {projectTechnology}</p> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProjectDescription;