import React from 'react'

const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 md:py-6 px-4 md:px-12 bg-white/30 backdrop-blur-xl rounded-3xl">
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                Horizon Courts
            </h1>

            <div className="hidden md:flex gap-8 items-center">
                <a href="#about" className="text-sm font-medium text-slate-600 px-2 py-1 rounded-4xl transition-all focus:ring focus:ring-slate-300">About Us</a>
                <a href="#services" className="text-sm font-medium text-slate-600 px-2 py-1 rounded-4xl transition-all focus:ring focus:ring-slate-300">Services</a>
                <a href="#coaches" className="text-sm font-medium text-slate-600 px-2 py-1 rounded-4xl transition-all focus:ring focus:ring-slate-300">Coaches</a>
                <a href="#events" className="text-sm font-medium text-slate-600 px-2 py-1 rounded-4xl transition-all focus:ring focus:ring-slate-300">Events</a>
                <a href="#contacts" className="text-sm font-medium text-slate-600 px-2 py-1 rounded-4xl transition-all focus:ring focus:ring-slate-300">Contacts</a>
            </div>

            <a href="#booking" className="bg-[#1e293b] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-black transition-colors flex items-center gap-2">
                Book now <span className="text-xs">↗</span>
            </a>
        </nav>

    )
}

export default Header