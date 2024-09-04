const Footer = () => {
    return (
        <div className="bg-black flex justify-between flex-col text-slate-400 px-24 py-24 text-stone-300 max-md:px-12 max-sm:px-6">
            {/* <div className="max-2xl:max-w-7xl mx-auto w-4/5"> */}
            <p className="leading-relaxed mb-16 min-2xl:mb-32 max-md:text-lg leading-loose max-sm:text-base">Built and shipped with love, Shoutout to Spotify for the jams and Apple Podcasts <br></br> for keeping me company through the process!</p>
            <p>&copy; Charles Onuoha, {(new Date().getFullYear())} All rights reserved.</p>
            {/* </div> */}
        </div>
    )
}
export default Footer;