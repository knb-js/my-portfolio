import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";


export const Skills = () => {
  return (

    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white mt-10 mb-10">Skills</h1>
      
      {/* Contenedor de los iconos con grid */}
      <div className="grid grid-cols-5 gap-8 justify-center items-center">
        
        {/* Icono Java */}
        <div className="icon-container border-4 border-orange-500">
          <FaJava className="icon text-orange-500 text-4xl rounded-full" />
        </div>

        {/* Icono Javascript */}
        <div className="icon-container border-4 border-yellow-500">
          <IoLogoJavascript className="icon text-yellow-500 text-3xl rounded-full" />
        </div>

        {/* Icono Python */}
        <div className="icon-container border-4 border-blue-500">
          <FaPython className="icon text-blue-500 text-3xl rounded-full" />
        </div>

        {/* Icono NodeJs */}
        <div className="icon-container border-4 border-green-500">
          <FaNodeJs className="icon text-green-500 text-3xl rounded-full" />
        </div>

        {/* Icono Spring */}
        <div className="icon-container border-4 border-green-500">
          <SiSpring className="icon text-green-500 text-3xl rounded-full" />
        </div>

        <div className="icon-container border-4 border-cyan-400">
          <FaReact className="icon text-cyan-500 text-3xl rounded-full" />
        </div>

        <div className="icon-container border-4 border-green-700">
          <SiDjango className="icon text-green-700 text-3xl rounded-full" />
        </div>

        <div className="icon-container border-4 border-red-500">
          <SiNestjs className="icon text-red-500 text-4xl rounded-full" />
        </div>

        <div className="icon-container border-4 border-blue-500">
          <FaDocker className="icon text-blue-500 text-3xl rounded-full" />
        </div>

        <div className="icon-container border-4 border-orange-500">
          <FaAws className="icon text-orange-500 text-3xl rounded-full" />
        </div>

      </div>
    </div>
  )
}
