import Button from "../components/button";
const SubFooter = () => {
    return (
        <div className="flex justify-center items-center flex-col w-3/5">
            <p className="text-center mb-4 font-bold mb-8 text-5xl leading-normal">If You Like What You See And Would Like To Collaborate,</p>
            <Button content="Let's Talk!" className="bg-gray-100 text-black py-2 px-12 border border-gray-100 rounded-md mx-2"></Button>
        </div>
    )
}

export default SubFooter;