import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Otoniel Murillo</h3>
        <p className="text-lg font-normal text-gray-400">
          QA Enginner
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Feel free to reach out! I am always open to new opportunities and collaborations. 
          Whether you have a question, project idea, or just want to say hello, I'd love to hear from you. Don't hesitate to use any of the contact options below to get 
          in touch.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+506 6214-3145</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">murillo.tec@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href='https://www.facebook.com/otoniel.murillovalerio' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href='https://github.com/Shiki93' className="bannerIcon">
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/otoniel-murillo-valerio-0301b821a/' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft