import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>*/}
    </motion.div>
  );
};

export default Experience;
