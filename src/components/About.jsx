import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As an adept software developer
        I bring valuable experience in TypeScript and JavaScript, coupled with expertise
        in frameworks such as React, Node.js, and Spring Boot.
        My true passion lies in crafting interactive and responsive software solutions that captivate users.
        With a sharp learning curve, I readily adapt to new technologies
        and closely collaborate with clients to develop efficient, scalable,
        and user-friendly solutions that effectively address real-world challenges.
        Together, let's transform your ideas into tangible, innovative realities!
      </motion.p>
      <button className='cursor-text flex flex-row gap-5 mt-10'>
        <a
          href='https://drive.google.com/file/d/1yfk0VmsbyXvIz7Wwrmj17W_w3XiZyUWx/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer flex justify-center items-center gap-2 bg-[#915EFF] px-5 py-2 rounded-lg text-white font-medium text-[16px] hover:bg-[#7F4FFF] transition-all duration-300'
        >
          <img
            src='https://img.icons8.com/ios-filled/50/ffffff/download--v1.png'
            alt='download'
            className='w-5 h-5 object-contain'
          />
          Download Resume
        </a>
      </button>
      <div className='mt-20 flex justify-center flex-wrap gap-16'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
