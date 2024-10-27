import Button from "./button";

interface ExploreCardsProps {
    className: string;
    btnStyle: string;
    contentHeader: string;
    contentBody: string;
    btnContent: string;
}

const ExploreCards: React.FC<ExploreCardsProps> = ({
    className,
    btnStyle,
    contentHeader,
    contentBody,
    btnContent,
}) => {
    return (
        <div className="flex justify-center flex-col mb-11">
            <div className={className}>
                <div className="px-2 py-4">
                    <div className="font-bold mb-8 text-5xl leading-normal max-md:text-3xl">
                        {contentHeader}
                    </div>
                    <p className="text-xl leading-relaxed max-md:text-lg leading-loose max-sm:text-base">
                        {contentBody}
                    </p>
                    <Button content={btnContent} className={btnStyle} />
                </div>
            </div>
        </div>
    );
};

export default ExploreCards;
