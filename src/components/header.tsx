import Image from "next/image"
import Link from "next/link"
import Button from "../components/button"
import TheCharles from "../../assets/images/TheCharles.png"
const Header = (props: any) => {
    const btnclassName = props.btnclassName
    return (
        <header className="flex justify-between items-center py-7 px-24">
            <Link href="/"><div className="logo__container">
                <Image src={TheCharles}
                    alt="Logo"
                    width={200}
                />
            </div></Link>
            <div className="header__items__center">
                <ul className="flex justify-center text-base">
                    <Link href="/about"><li className="mx-8 my-0">About</li></Link>
                    <Link href="../work"><li className="mx-8 my-0">Work</li></Link>
                    <Link href="/contact"><li className="mx-8 my-0">Projects</li></Link>
                </ul>
            </div>
            <div className="text-sm">
                <Button content="Let's Talk!" className="bg-gray-100 text-black py-2 px-4 border border-gray-100 rounded-md mx-2"></Button>
                <Button content="Get a copy of my resume" className={btnclassName}></Button>
            </div>
        </header>
    )
}
export default Header;