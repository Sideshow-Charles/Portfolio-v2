const Footer: React.FC = () => {
    return (
        <div className="bg-black flex justify-between flex-col text-slate-400 px-24 py-24 text-stone-300 max-md:px-12 max-sm:px-6 max-xl:px-32">
            <p className="leading-relaxed mb-16 min-2xl:mb-32 max-md:text-lg leading-loose max-sm:text-base">
                Built and shipped with love. Shoutout to Spotify for the jams and Apple Podcasts
                <br/>
                for keeping me company through the process!
            </p>
            <p>&copy; Charles Onuoha, {new Date().getFullYear()} All rights reserved.</p>
        </div>
    );
};

export default Footer;
