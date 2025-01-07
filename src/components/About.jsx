import React from 'react'
import MeLogo from '../assets/me.jpg';
import MeCv from '../assets/pdf/CV-KAHLIL-FULLSTACK.pdf';
import { SocialLinks } from "../components/SocialLinks";

export const About = () => {
    return (
        <section id="about" className="p-4 flex flex-col items-center">
            <h1 className='text-3xl text-white mt-6'>About me</h1>
            <div className="flex items-center mt-10">
                <div className="text-left mr-4">
                    <p className='text-green-400 text-xl'>Software Developer</p>
                    <p className='text-white text-3xl mt-4'>Hello I'm</p>
                    <p className='text-green-400 text-3xl'>Kahlil Núñez</p>
                    <p className='text-white mt-4'>I'm a developer specialized in Java</p>
                    <p className='text-white'>and in different technologies</p>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href={MeCv}
                            download="CV-KAHLIL-FULLSTACK.pdf"
                            className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300">
                            Download CV
                        </a>
                        <SocialLinks />
                    </div>
                </div>
                <img src={MeLogo} alt="React Logo" className="w-52 h-52 rounded-full border-4 border-green-600" />
            </div>
        </section>
    )
}
