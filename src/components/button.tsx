const Button = (props: any) => {
    const content:string = props.content
    const className:string = props.className
    return (
        <button className={className}>
            {content}
        </button>
    )
}
export default Button;