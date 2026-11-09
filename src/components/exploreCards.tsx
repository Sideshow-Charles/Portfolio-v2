interface ExploreCardsProps {
    className: string;
    contentHeader: string;
    contentBody: string;
    arrowColor: string; // text-color class for the arrow icon, e.g. "text-red-500"
}

const ExploreCards: React.FC<ExploreCardsProps> = ({
    className,
    contentHeader,
    contentBody,
    arrowColor,
}) => {
    return (
        <div className={`group flex flex-col justify-between h-full ${className}`}>
            <div>
                <div className="font-bold mb-6 text-4xl leading-tight max-md:text-3xl">
                    {contentHeader}
                </div>
                <p className="text-xl leading-relaxed max-md:text-lg max-sm:text-base">
                    {contentBody}
                </p>
            </div>
            <div className="mt-8 flex justify-end">
                <span
                    className={`flex items-center justify-center w-11 h-11 rounded-full bg-white ${arrowColor} transition-transform duration-300 group-hover:translate-x-1`}
                    aria-hidden="true"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default ExploreCards;
