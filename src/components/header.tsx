import Image from "next/image"
import Link from "next/link"
import Button from "../components/button"
import TheCharles from "../../assets/images/TheCharles.png"
const Header = (props: any) => {
const btnclassName:string = props.btnclassName
    return (
        <header className="flex justify-between items-center py-7 px-24 max-md:px-2">
            <Link href="/"><div>
                <Image src={TheCharles}
                    alt="Logo"
                    width={200}
                    className="max-md:w-11/12"
                />
            </div></Link>
            <div className="max-md:hidden">
                <ul className="flex justify-center text-base">
                    <Link href="/about"><li className="mx-8 my-0">About</li></Link>
                    <Link href="/work"><li className="mx-8 my-0">Work</li></Link>
                    <Link href="/projects"><li className="mx-8 my-0">Projects</li></Link>
                </ul>
            </div>
            <div className="text-sm">
            <a href="mailto:charlesonuoha97@gmail.com" target="_blank"><Button content="Let's Talk!" className="bg-gray-100 text-black py-2 px-4 border border-gray-100 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 duration-200 max-md:hidden"></Button></a>
            <a href="https://drive.google.com/file/d/11cHOua8qg1LS_-le7CjaLrU3auLiflrW/view?usp=sharing" target="_blank"><Button content="Resume" className={btnclassName}></Button></a>
            </div>
        </header>
    )
}
export default Header;