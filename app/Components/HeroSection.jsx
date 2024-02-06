"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <motion.section
      className="lg:py-16"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-tertiary-300 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ayush Chandra",
                2500, // wait 1s before replacing "Ayush Chandra" with the next string
                "A Programmer",
                2500,
                "A Ui/Ux Designer",
                2500,
                "A Web developer",
                2500, // wait 1s before restarting the sequence
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          {
            <p className="text-primary-100 text-base sm:text-lg mb-6 lg:text-xl font-bold">
              Juggling code and coffee, turning caffeine into software magic.
              ☕💻
            </p>
          }
          <div>
            <Link
              href="https://drive.google.com/file/d/1olqz0YshIrtf4HpruO6Z_mEoVnHSp4A-/view?usp=drive_link"
              passHref
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-secondary-500 to-primary-500 hover:to-primary-900 text-white transition duration-100 ease-in-out">
                <span className="block bg-[rgb(18,18,18)] hover:bg-slate-800 rounded-full px-5 py-2 transition duration-300 ease-in-out">
                  My Resume
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/cc.png"
              alt="Ayush Chandra - Software Engineer, Ui/Ux Designer, Web Developer"
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
              }}
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
