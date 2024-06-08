import Image from "next/image";
import Button from "../components/button"
const ProjectDescription = (props: any) => {
    const projectName = props.projectName;
    const projectImage = props.projectImage;
    const projectOverview = props.projectOverview;
    return (
        <div>
            <section className="my-52 mx-8">
                <div className="flex flex-col">
                    <div className="w-5/12">
                        <Image src={projectImage} alt="Project Image" className="rounded-md"/>
                    </div>
                    <div className="w-9/12">
                        <p className="font-bold text-blue-500 text-3xl my-8">{projectName}</p>
                        <p className="text-xxxl leading-relaxed my-8 w-2/6">{projectOverview}</p>
                        <Button content="View Project" className="bg-blue-500 text-white py-2 px-4 border border-blue-100 rounded-md"></Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProjectDescription;