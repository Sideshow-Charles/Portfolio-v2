// making a button component to avoid overpopulating the codebase
const Button = (props: any) => {
    const content = props.content
    const className = props.className
    return (
        <button className={className}>
            {content}
        </button>
    )
}
export default Button;