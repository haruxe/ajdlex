import React from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Check, Twitter } from "styled-icons/remix-fill";
import { motion } from "framer-motion";
import Link from "next/link";
import { Law } from "styled-icons/octicons";
import { Mail } from "styled-icons/foundation";
// @ts-ignore
function Navbar() {
  return (
    <>
      <nav className="mx-auto p-2 fixed right-0 left-0 backdrop-blur-3xl bg-white bg-opacity-70 z-20">
        <div className="max-w-[1100px] mx-auto relative">
          <div className="flex">
            <div className="absolute top-2 right-2 space-x-3 my-auto">
              <a
                href="mailto:ad@mcqueendroste.com"
                target="_blank"
                rel="noreferrer"
              >
                <Mail className="w-5" />
              </a>
            </div>
            <div className="mr-auto cursor-pointer my-auto pt-1 font-bold text-xl md:text-2xl">
              <Law className="w-5 mb-1 flex mr-2" />
              <Link href="/">
                {/* <h1 className="md:text-4xl text-2xl select-none font-bold cursor-pointer font-gilroy tracking-widest text-white px-2 rounded-md py-1 bg-black hover:bg-[#303030]">
                  WEB3SG
                </h1> */}
                Alan J. Droste, APLC
              </Link>
            </div>
          </div>
          <div className="mx-auto flex mb-1 sm:w-[500px] place-content-between font-bold text-sm sm:text-lg">
            <Link className="cursor-pointer" href="/">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Home</h1>
              </motion.div>
            </Link>
            <div className="w-[2px] bg-black h-[15px] my-auto" />
            <Link className="cursor-pointer" href="/firm">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Firm</h1>{" "}
              </motion.div>
            </Link>
            <div className="w-[2px] bg-black h-[15px] my-auto" />
            <Link className="cursor-pointer" href="/counsel">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Counsel</h1>
              </motion.div>
            </Link>
            <div className="w-[2px] bg-black h-[15px] my-auto" />
            <Link className="cursor-pointer" href="/practice">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Practice Areas</h1>
              </motion.div>
            </Link>
            <div className="w-[2px] bg-black h-[15px] my-auto" />
            <Link className="cursor-pointer" href="/contact">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Contact</h1>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="pb-[6rem]" />
    </>
  );
}

export default Navbar;
