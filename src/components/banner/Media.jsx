import React from 'react'
import { FaFacebookF, FaPython, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiPostman, SiJirasoftware } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiJirasoftware />
            </span>
            <span className="bannerIcon">
              <SiPostman />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media