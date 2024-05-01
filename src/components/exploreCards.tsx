import Button from "./button"
const ExploreCards = (props:any) => {
    const className = props.className
    const btnStyle = props.btnStyle
    const contentHeader = props.contentHeader
    const contentBody = props.contentBody
    const btnContent = props.btnContent
    return (
        <div className="flex justify-center flex-col mb-11">
            <div className={className}>
                <div className="px-6 py-4">
                    <div className="font-bold mb-8 text-5xl leading-normal">{contentHeader}</div>
                    <p className="text-xl leading-relaxed">
                        {contentBody}
                    </p>
                    <Button content={btnContent} className={btnStyle}></Button>
                </div>
            </div>
        </div>
    )
}
export default ExploreCards;