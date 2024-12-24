import Link from "next/link";

interface WorkHistoryProps {
    companyName: string;
    duration: string;
    jobTitle: string;
    roleDescription: string;
    technologies: string;
    companyLink: string;
    relevantLinks?: string; // Optional for cases with no reference links
}

const WorkHistory: React.FC<WorkHistoryProps> = (props) => {
    const {
        companyName,
        duration,
        jobTitle,
        roleDescription,
        technologies,
        companyLink,
        relevantLinks,
    } = props;

    return (
        <div>
            <section className="items-center flex-col my-52 max-md:mx-12 max-sm:mx-6">
                <Link
                    target="_blank"
                    href={companyLink}
                    className="font-bold text-violet-500 text-5xl cursor-pointer max-md:text-4xl relative hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-100"
                >
                    {companyName}<span className="ml-1">&#8599;</span>
                </Link>
                <p className="mt-8 text-xl text-dark max-md:text-lg max-sm:text-base">
                    ({duration})
                </p>
                <p className="mt-2 text-xl text-dark max-md:text-lg max-sm:text-base">
                    {jobTitle}
                </p>
                <p className="text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">
                    {roleDescription}
                </p>
                {relevantLinks && (
                    <p className="w-3/4 text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">
                        <b>Reference(s):</b>{" "}
                        <Link
                            target="_blank"
                            className="text-violet-500"
                            href={relevantLinks}
                        >
                            {relevantLinks}
                        </Link>
                    </p>
                )}
                <p className="mt-8 text-xl text-violet-500 font-bold max-md:text-lg max-sm:text-base">
                    Technologies: {technologies}
                </p>
            </section>
        </div>
    );
};

export default WorkHistory;
