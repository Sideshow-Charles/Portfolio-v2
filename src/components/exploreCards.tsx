import Button from "./button"
const ExploreCards = (props:any) => {
    const className:string = props.className
    const btnStyle:string = props.btnStyle
    const contentHeader:string = props.contentHeader
    const contentBody:string = props.contentBody
    const btnContent:string = props.btnContent
    return (
        <div className="flex justify-center flex-col mb-11">
            <div className={className}>
                <div className="px-2 py-4">
                    <div className="font-bold mb-8 text-5xl leading-normal max-md:text-3xl">{contentHeader}</div>
                    <p className="text-xl leading-relaxed max-md:text-lg leading-loose max-sm:text-base">
                        {contentBody}
                    </p>
                    <Button content={btnContent} className={btnStyle}></Button>
                </div>
            </div>
        </div>
    )
}
export default ExploreCards;