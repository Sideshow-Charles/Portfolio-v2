import Image from "next/image"
import TheCharles from "../../assets/images/TheCharles.png"
export default function Header() {
    return (
        <header className="flex justify-between items-center py-7 px-24">
            <div className="logo__container">
                <Image src={TheCharles}
                    alt="Logo"
                    width={200}
                />
            </div>
            <div className="header__items__center">
                <ul className="flex justify-center text-base">
                    <li className="mx-8 my-0">Work</li>
                    <li className="mx-8 my-0">About</li>
                    <li className="mx-8 my-0">Contact</li>
                </ul>
            </div>
            <div className="text-sm">
                <button className="bg-gray-100 text-black py-2 px-4 border border-gray-100 rounded-md mr-2">Let's Talk!</button>
                <button className="bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md">Get a copy of my resume!</button>
            </div>
        </header>
    )
}