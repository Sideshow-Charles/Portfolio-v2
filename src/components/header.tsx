"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
import TheCharles from "../../assets/images/TheCharles.png";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
    const pathname = usePathname();

    const getBtnClassName = () => {
        if (pathname.startsWith("/about")) {
            return "bg-red-500 text-white py-2 px-4 border border-red-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-red-700 duration-200";
        }
        if (pathname.startsWith("/work")) {
            return "bg-violet-500 text-white py-2 px-4 border border-violet-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-violet-700 duration-200";
        }
        if (pathname.startsWith("/projects")) {
            return "bg-orange-500 text-white py-2 px-4 border border-orange-500 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-orange-700 duration-200";
        }
        // homepage default
        return "bg-slate-950 text-white py-2 px-4 border border-slate-950 rounded-md mx-2 hover:-translate-y-1 hover:scale-105 hover:bg-slate-950 duration-200";
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-7 px-24 max-md:px-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" passHref>
                    <div>
                        <Image
                            src={TheCharles}
                            alt="Logo"
                            width={200}
                            className="max-md:w-11/12"
                        />
                    </div>
                </Link>
                <div className="max-md:hidden">
                    <ul className="flex justify-center text-base">
                        <li className="mx-8 my-0">
                            <Link href="/about" passHref>About</Link>
                        </li>
                        <li className="mx-8 my-0">
                            <Link href="/work" passHref>Work</Link>
                        </li>
                        <li className="mx-8 my-0">
                            <Link href="/projects" passHref>Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="text-sm">
                    <a href="mailto:charlesonuoha97@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button content="Let's Talk!" className="bg-gray-100 text-black py-2 px-4 border border-gray-100 rounded-md mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 duration-200 max-md:hidden"/>
                    </a>
                    <a href="https://drive.google.com/file/d/11cHOua8qg1LS_-le7CjaLrU3auLiflrW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button content="Resume" className={getBtnClassName()} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;