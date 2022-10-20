import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Law } from "styled-icons/octicons";

function Footer() {
  return (
    <footer
      className="flex bg-[#1b1b1b] flex-col text-white md:text-lg text-md px-6 py-[2rem] outline outline-2 outline-[#414141]"
      style={{
        backgroundColor: "#252525",
        opacity: "1",
        backgroundImage:
          "linear-gradient(#1B1B1B 1.8px, transparent 1.8px), linear-gradient(90deg, #1B1B1B 1.8px, transparent 1.8px), linear-gradient(#1B1B1B 0.9px, transparent 0.9px), linear-gradient(90deg, #1B1B1B 0.9px, #252525 0.9px)",
        backgroundSize: "45px 45px, 45px 45px, 9px 9px, 9px 9px",
        backgroundPosition:
          "-1.8px -1.8px, -1.8px -1.8px, -0.9px -0.9px, -0.9px -0.9px",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row w-full place-items-center">
        <div className="flex">
          <div className="grid gap-5 md:mb-0 mb-5">
            <Law className="lg:w-12 w-8 mx-auto" />
            <div className="mr-auto cursor-pointer my-auto pt-1 text-xl md:text-2xl font-bold">
              <Link href="/">
                {/* <h1 className="md:text-4xl text-2xl select-none font-bold cursor-pointer font-gilroy tracking-widest text-white px-2 rounded-md py-1 bg-black hover:bg-[#303030]">
                  WEB3SG
                </h1> */}
                Alan J. Droste, APLC
              </Link>
            </div>
            <h1 className="text-sm text-left font-serif">
              © Copyright 2017 - Alan J. Droste, APLC
            </h1>
          </div>
        </div>
        <div className="flex place-content-between mt-5 md:w-2/3 w-full mx-auto">
          <div className="flex flex-col mx-auto ">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>MENU</h1>

            <div className="flex flex-col  md:text-md text-sm underline space-y-2 mt-3 font-serif">
              <Link href="/">Home</Link>
              <Link href="/firm">Firm</Link>
              <Link href="/counsel">Counsel</Link>
              <Link href="/practice">Practice Areas</Link>
              <Link href="/contact">Contact</Link>
              {/* <Link href="/join">Join Us</Link> */}
            </div>
          </div>
          <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>CONTACT</h1>
            <div className="flex flex-col font-bold md:text-md text-sm space-y-2 mt-3">
              <h1>Mail</h1>
              <a
                href="mailto:alan@ajdlex.com"
                className="underline font-serif tracking-wide"
              >
                alan@ajdlex.com
              </a>
            </div>
            <div className="flex flex-col md:text-md text-sm space-y-2 mt-3">
              <h1 className="font-bold">Location</h1>
              <p className="font-serif tracking-wide">
                450 Newport Center Drive,
                <br /> Suite 500 Newport Beach,
                <br /> CA 92660
              </p>
            </div>
          </div>
          {/* <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>CONTACT</h1>
          </div>
          <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>MINT</h1>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
