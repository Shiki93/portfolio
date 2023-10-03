import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2011</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Instituto Tecnologico de Costa Rica (2011 - )"
            des="Bachelor's Degree in Computer Engineering. Had to drop out due to personal and financial reasons."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="El Espiritu Santo Highschool (2006 - 2010)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Quality Assurance Engineer"
            subTitle="Testing Software - (2018 - Present)"
            result="Cartago, Costa Rica"
            des="My position as a QA Engineer is mainly based on the testing, validation and documentation of both manual and automated test cases, 
            as well as the documentation and tracking of defects found."
          />
          <ResumeCard
            title="Customer Service Representative"
            subTitle="Sykes - (2017 - 2018)"
            result="San Jose, Costa Rica"
            des="Work as a Customer Service Assistant under the Capital One account, receiving calls and helping customers resolve their 
            questions and problems with their credit cards."
          />
          <ResumeCard
            title="Sales Representative (Part-time)."
            subTitle="PC Sistemas - (2013 - 2017)"
            result="Guanacaste, Costa Rica"
            des="Worked in a hardware store where my main funtion was the cleaning, assembling and installing of diferent software and hardware, 
            as well as answering the clients questions."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education