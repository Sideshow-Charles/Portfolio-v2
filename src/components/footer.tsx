import Link from "next/link";
const Footer: React.FC = () => {
    return (
        <div className="bg-black flex justify-between flex-col text-slate-400 px-24 py-24 text-stone-300 max-md:px-12 max-sm:px-6 max-xl:px-32">
            <p className="leading-relaxed mb-16 min-2xl:mb-32 max-md:text-lg leading-loose max-sm:text-base">
                Built and shipped with love. Shoutout to Spotify for the jams and Apple Podcasts
                <br />
                for keeping me company through the process!
            </p>
            <div className="flex justify-between flex-row max-sm:flex-col-reverse">
                <div>
                    <p>&copy; Charles Onuoha, {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex max-sm:mb-4">
                    <p className="leading-relaxed mr-4 max-md:text-lg leading-loose max-sm:text-base">
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/charles-onuoha-37b6011a1"
                            className="relative hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            LinkedIn &#8599;
                        </Link>
                    </p>
                    <p className="leading-relaxed max-md:text-lg leading-loose max-sm:text-base">
                        <Link target="_blank"
                            href="https://github.com/Sideshow-Charles"
                            className="relative hover:underline transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                            Github &#8599;
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
