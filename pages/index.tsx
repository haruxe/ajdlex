import type { NextPage } from "next";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import { LeftArrowAlt, RightArrowAlt } from "styled-icons/boxicons-regular";
import { data } from "../components/slideData";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="mx-auto">
          {/* MOVING IMAGES CAROUSEL <div className="max-w-[1024px] mx-auto px-5 ">
            <Fade
              duration={3000}
              prevArrow={
                <LeftArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 ml-2 bg-opacity-40 backdrop-blur-2xl shadow-3xl" />
              }
              nextArrow={
                <RightArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 mr-2 bg-opacity-40 backdrop-blur-2xl shadow-3xl" />
              }
            >
              {data.map((i, key) => (
                <div
                  className="flex flex-col place-content-center shadow-3xl"
                  key={key}
                >
                  <Image
                    src={i.image}
                    alt={i.image}
                    layout="intrinsic"
                    width={"1024px"}
                    height={"684px"}
                    className="flex mx-auto shadow-3xl"
                  />
                  <h1 className="flex absolute bottom-5 right-5 text-xl lg:text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-sm font-serif italic">
                    Zealous Advocacy, Creative Solutions - Newport Beach,
                    California
                  </h1>
                </div>
              ))}
            </Fade>
          </div> */}
          <div className="mx-auto max-w-[1100px] relative">
            <Image
              src="/images/hero.png"
              alt="hero banner"
              layout="intrinsic"
              width={"1500px"}
              height={"500px"}
              className="flex mx-auto shadow-3xl"
            />
            {/* <h1 className="flex absolute bottom-5 right-5 text-md lg:text-lg bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-sm font-serif italic">
              Zealous Advocacy, Creative Solutions - Newport Beach, California
            </h1> */}
          </div>
        </div>
        <div className=" my-auto flex flex-col max-w-[1100px] mx-auto">
          <div className="py-10 md:px-6 place-content-center mx-auto text-black flex flex-col">
            <h1 className="lg:text-3xl text-xl mx-auto text-center font-serif italic p-3 backdrop-blur-xl">
              Zealous Advocacy, Creative Solutions - Newport Beach, California
            </h1>
            <div className="h-[2px] bg-black w-[10rem] mx-auto my-6" />
          </div>
          <div className="mx-auto px-5 py-5 bg-black max-w-[1100px] w-full place-items-center">
            <Slide
              duration={5000}
              prevArrow={
                <LeftArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 ml-2 shadow-3xl" />
              }
              nextArrow={
                <RightArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 mr-2 shadow-3xl" />
              }
              arrows={false}
              transitionDuration={1000}
              autoplay={true}
              easing="ease"
              indicators={(i) => (
                //@ts-ignore
                <div className="indicator text-white mx-3 hover:bg-gray-700 px-5 duration-300 cursor-pointer rounded-full">
                  {i ? i + 1 : "1"}
                </div>
              )}
            >
              {data.map((i, key) => (
                <div
                  className="flex flex-col place-content-center shadow-3xl max-w-[1100px] my-auto"
                  key={key}
                >
                  <div className="md:p-6 p-4 mx-auto place-content-center place-items-center grid space-y-5 text-white ">
                    <Image
                      src={i.image}
                      alt={i.image}
                      layout="intrinsic"
                      width={"500px"}
                      height={"350px"}
                      className="flex mx-auto shadow-3xl"
                    />
                    <h1 className="md:text-3xl text-2xl text-center font-bold">
                      {i.title}
                    </h1>
                    <p className="text-center font-serif tracking-wide">
                      {i.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div className="bg-[#1b1b1b] md:mt-[2rem] mt-5 text-white">
          <div className="max-w-[1100px] mx-auto px-5 flex pb-5">
            <div className="mt-10 place-content-center mx-auto">
              <h1 className="text-3xl mx-auto text-center font-bold">
                SERVICES
              </h1>
              <div className="h-[2px] bg-white w-[10rem] mx-auto my-6" />
              <div className="flex md:flex-row place-content-between md:space-x-5 md:space-y-0 space-y-10 flex-col ">
                <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <h1 className="mx-auto  text-xl">Business Litigation</h1>
                  <div className="">
                    <Image
                      src={"/images/gavel.jpg"}
                      alt={"placeholder"}
                      layout="intrinsic"
                      width={"300px"}
                      height={"200px"}
                      className="flex mx-auto rounded-sm grayscale-[50%]"
                    />
                  </div>
                </div>
                <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <h1 className="mx-auto text-xl text-center">
                    Alternative Dispute Resolution
                  </h1>
                  <div className="">
                    <Image
                      src={"/images/adr.png"}
                      alt={"placeholder"}
                      layout="intrinsic"
                      width={"300px"}
                      height={"200px"}
                      className="flex mx-auto rounded-sm grayscale-[50%]"
                    />
                  </div>
                </div>
                {/* <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <h1 className="mx-auto text-xl">Real Estate Finance</h1>
                  <div className="">
                    <Image
                      src={"/images/estate.jpg"}
                      alt={"placeholder"}
                      layout="intrinsic"
                      width={"340px"}
                      height={"210px"}
                      className="flex mx-auto rounded-sm grayscale-[50%] "
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
