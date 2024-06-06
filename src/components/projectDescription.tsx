import Image from "next/image";
import Button from "../components/button"
const ProjectDescription = (props: any) => {
    const projectName = props.projectName;
    const projectImage = props.projectImage;
    const projectOverview = props.projectOverview;
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
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProjectDescription;