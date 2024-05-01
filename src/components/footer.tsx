const Footer = () => {
    return (
        <div className="flex justify-between flex-col bg-black text-slate-400 px-24 py-24 text-stone-300">
            <p className="leading-loose mb-16">Built and shipped with love, Shoutout to Spotify for the jams and Apple Podcasts <br></br> for keeping me company through the process!</p>
            <p>&copy; Charles Onuoha, {(new Date().getFullYear())} All rights reserved.</p>

        </div>
    )
}
export default Footer;