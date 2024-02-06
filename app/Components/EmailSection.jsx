"use client";
import React from "react";
import GitHubIcon from "./gh.svg";
import LinkedInIcon from "./li.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done");
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-extrabold bg-secondary-200 text-transparent bg-clip-text my-2">
          Lets Connect
        </h5>
        <p className="text-tertiary-300 font-semi-bold mb-4 max-w-md">
          Thank you for considering my application. I am enthusiastic about the
          possibility of contributing to your team and would welcome the
          opportunity to discuss how my skills align with your needs.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Ayusshhh27">
            <Image
              src={GitHubIcon}
              alt="GitHub icon"
              width={40}
              height={40}
              fallback={<div>GitHub icon not available</div>}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ayush-chandra-a25b381bb">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn icon"
              width={40}
              height={40}
              fallback={<div>LinkedIn icon not available</div>}
            />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What should i call you?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button className="bg-gradient-to-r from-primary-400 to-secondary-300 text-black font-medium py-2.5 px-5 rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
