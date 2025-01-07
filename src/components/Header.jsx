import React from 'react'

export const Header = () => {
    return (
        <header className="bg-gray-700 text-white p-4 flex justify-center">
            <div className="w-full max-w-7xl flex justify-between items-center">

                <h1 className="text-3xl font-bold text-green-400">Software Engineer</h1>

                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-green-400">Home</a></li>
                        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
