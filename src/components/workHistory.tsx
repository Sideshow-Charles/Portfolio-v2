import Link from "next/link";

interface WorkHistorySection {
    heading?: string;
    body?: string;
    bullets?: string[];
}

interface WorkHistoryProps {
    companyName: string;
    duration: string;
    jobTitle: string;
    progression?: string;
    intro: string;
    sections: WorkHistorySection[];
    outro?: string;
    technologies: string;
    companyLink: string;
    relevantLinks?: { label: string; url: string }[];
}

const WorkHistory: React.FC<WorkHistoryProps> = (props) => {
    const {
        companyName,
        duration,
        jobTitle,
        progression,
        intro,
        sections,
        outro,
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
                    className="font-bold text-violet-500 text-5xl cursor-pointer max-md:text-4xl relative hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300">
                    {companyName}
                    <span className="inline-block ml-[-0.2952vw] transform rotate-[-40deg] relative top-[-0.18em]">
                        &#x2192;
                    </span>
                </Link>

                <p className="mt-8 text-xl text-dark max-md:text-lg max-sm:text-base">
                    ({duration})
                </p>
                <p className="mt-2 text-xl text-dark max-md:text-lg max-sm:text-base">
                    {jobTitle}
                </p>
                {progression && (
                    <p className="mt-1 text-lg text-zinc-500 max-md:text-base max-sm:text-sm italic">
                        {progression}
                    </p>
                )}

                <p className="text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">
                    {intro}
                </p>

                {sections.map((section, index) => (
                    <div key={index} className="mt-8">
                        {section.heading && (
                            <p className="text-xl font-bold text-dark mt-2 mb-3 max-md:text-lg max-sm:text-base">
                                {section.heading}
                            </p>
                        )}
                        {section.body && (
                            <p className="text-xl leading-relaxed max-md:text-lg max-sm:text-base">
                                {section.body}
                            </p>
                        )}
                        {section.bullets && section.bullets.length > 0 && (
                            <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
                                {section.bullets.map((bullet, i) => (
                                    <li key={i} className="text-xl leading-relaxed max-md:text-lg max-sm:text-base">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                {outro && (
                    <p className="text-xl leading-relaxed mt-8 max-md:text-lg max-sm:text-base">
                        {outro}
                    </p>
                )}

                {relevantLinks && relevantLinks.length > 0 && (
                    <div className="mt-8">
                        <p className="text-xl font-bold max-md:text-lg max-sm:text-base">Reference(s):</p>
                        {relevantLinks.map((link, i) => (
                            <Link
                                key={i}
                                target="_blank"
                                className="text-violet-500 text-xl block mt-1 max-md:text-lg max-sm:text-base"
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}

                <p className="mt-8 text-xl text-violet-500 font-bold max-md:text-lg max-sm:text-base">
                    Technologies: {technologies}
                </p>
            </section>
        </div>
    );
};

export default WorkHistory;