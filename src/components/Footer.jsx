export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="mt-12 border-t border-white/10 bg-black/20">
            <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-400 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="text-center md:text-left">
                    <p className="text-white font-semibold">Creative Pair</p>
                    <p className="text-gray-400">Where Creation meets Innovation</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                <a href="/home" className="hover:text-white transition-colors">Home</a>
                    <a href="/about" className="hover:text-white transition-colors">About</a>
                    <a href="/services" className="hover:text-white transition-colors">Services</a>
                    <a href="/projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-white font-semibold">Contact</p>
                    <p><a href="mailto:creativepair.team@gmail.com" className="hover:text-white transition-colors">hr.creativepair@gmail.com</a></p>
                    <p><a href="tel:+923001234567" className="hover:text-white transition-colors">(+92) 327 4968541</a></p>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-500 text-center">
                    © {year} Creative Pair. All rights reserved.
                </div>
            </div>
        </footer>
    );
}


