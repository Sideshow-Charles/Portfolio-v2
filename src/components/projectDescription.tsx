import Image from "next/image";
// import Link from "next/link";
const ProjectDescription = (props: any) => {
    const projectName = props.projectName;
    const projectImage = props.projectImage;
    const projectOverview = props.projectOverview;
    const projectLink = props.projectLink;
    const projectTechnology = props.projectTechnology;
    const projectStatus = props.projectStatus;
    const projectCode = props.projectCode 
    return (
        <div>
            <section className="flex justify-center items-center flex-col my-52 text-center">
                <p className="font-bold text-sky-500 text-5xl mb-8">{projectName}</p>
                <Image src={projectImage} alt="Project Image" width={1080} className="rounded-xl"/>
                {/* <p className="mt-8 text-xl text-sky-500">Status: {projectStatus}</p> */}
                <p className="w-3/4 text-xl leading-relaxed my-14">{projectOverview}</p>
                <p className="w-3/4 text-xl leading-relaxed mt-2"><b className="text-black">Live View:</b> <a className="text-sky-500" href={projectLink} target="_blank">{projectLink}</a></p>
                <p className="w-3/4 text-xl leading-relaxed mt-2"><b className="text-black">Source Code:</b> <a className="text-sky-500" href={projectCode} target="_blank">{projectCode}</a></p>
                <p className="mt-8 text-xl text-sky-500 font-bold">Stack: {projectTechnology}</p>
            </section>
        </div>
    )
}
export default ProjectDescription;