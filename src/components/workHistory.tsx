import Link from "next/link"
const WorkHistory = (props: any) => {
    const companyName = props.companyName;
    const duration = props.duration;
    const jobTitle = props.jobTitle;
    const roleDescription = props.roleDescription;
    const technologies = props.technologies;
    const relevantLinks = props.relevantLinks
    return (
        <div>
            <section className="flex justify-center items-center flex-col my-52 text-center">
                <p className="font-bold text-violet-500 text-5xl">{companyName}</p>
                <p className="mt-8 text-xl text-dark">({duration})</p>
                <p className="mt-2 text-xl text-dark">{jobTitle}</p>
                <p className="w-3/4 text-xl leading-relaxed mt-8">{roleDescription}</p>
                <p className="w-3/4 text-xl leading-relaxed mt-8"><b>Relevant Links:</b> <Link className="text-violet-500" href={relevantLinks}>{relevantLinks}</Link></p>
                <p className="mt-8 text-xl text-violet-500 font-bold">Technologies: {technologies}</p>
            </section>
        </div>
    )
}
export default WorkHistory;