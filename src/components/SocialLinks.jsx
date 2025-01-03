import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-6 mt-4">
            <a 
                href="https://www.linkedin.com/in/kahlil-nu%C3%B1ez-bayuk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 hover:text-green-500 transition duration-300 text-2xl"
            >
                <FaLinkedin />
            </a>
            <a 
                href="https://github.com/knb-js" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 hover:text-green-500 transition duration-300 text-2xl"
            >
                <FaGithub />
            </a>
        </div>
  )
}

