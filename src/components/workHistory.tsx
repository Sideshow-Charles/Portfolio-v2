import Link from "next/link";

interface WorkHistoryProps {
    companyName: string;
    duration: string;
    jobTitle: string;
    roleDescription: string;
    technologies: string;
    relevantLinks?: string; // Make this optional in case no link is provided
}

const WorkHistory: React.FC<WorkHistoryProps> = (props) => {
    const {
        companyName,
        duration,
        jobTitle,
        roleDescription,
        technologies,
        relevantLinks,
    } = props;

    return (
        <div>
            <section className="items-center flex-col my-52 max-md:mx-12 max-sm:mx-6">
                <p className="font-bold text-violet-500 text-5xl max-md:text-4xl">{companyName}</p>
                <p className="mt-8 text-xl text-dark max-md:text-lg max-sm:text-base">({duration})</p>
                <p className="mt-2 text-xl text-dark max-md:text-lg max-sm:text-base">{jobTitle}</p>
                <p className="text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">{roleDescription}</p>
                {relevantLinks && (
                    <p className="w-3/4 text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">
                        <b>Reference(s):</b>{" "}
                        <Link
                            target="_blank"
                            className="text-violet-500"
                            href={relevantLinks}>{relevantLinks}
                        </Link>
                    </p>
                )}
                <p className="mt-8 text-xl text-violet-500 font-bold max-md:text-lg max-sm:text-base">Technologies: {technologies}</p>
            </section>
        </div>
    );
};

export default WorkHistory;
