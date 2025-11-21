import React from "react";
import heromobile from "@/assets/images/hero/heromobile.png";
import herobackground from "@/assets/images/hero/herobackground.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex relative w-full h-[619px] bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage: `url(${herobackground.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <p className="uppercase text-white tracking-[0.1px] leading-9 font-bold text-[24px]">
            Food app
          </p>

          <h1 className="text-white font-bold text-[58px] tracking-[0.2px] leading-[80px] mt-4">
            Why stay hungry when <br /> you can order form Bella Onojie
          </h1>

          <p className="text-tertiary mt-4 text-[24px] tracking-[0.2px] leading-[38px]">
            Download the bella onoje’s food app now on
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-primary text-white px-10 py-3 rounded-full font-semibold shadow-md">
              Playstore
            </button>

            <button className="border border-white text-white px-10 py-3 rounded-full font-semibold shadow-md">
              App store
            </button>
          </div>
        </div>

        {/* Phones (Desktop absolute) */}
        <div className="hidden md:flex absolute left-1/2 top-[520px] transform -translate-x-1/2">
          <Image
            src={heromobile}
            alt="Food App"
            width={548}
            height={640}
            className="drop-shadow-xl"
          />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="flex md:hidden flex-col items-center text-center px-5 pt-10 pb-16 gap-6 bg-[#FAFAFA]">
        <p className="uppercase text-gray-700 tracking-wide text-sm">
          Food app
        </p>

        <h1 className="text-gray-900 font-bold text-3xl leading-tight mt-4">
          Why stay hungry when you can order form Bella Onojie
        </h1>

        <p className="text-gray-700 mt-4 text-[24px]">
          Download the bella onoje’s food app now on
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-primary text-white px-16 py-4 rounded-full font-semibold shadow-md">
            Playstore
          </button>

          <button className="border border-primary text-gray-900 px-16 py-4 rounded-full font-semibold shadow-md">
            App store
          </button>
        </div>

        {/* Phone Image BELOW content */}
        <Image
          src={heromobile}
          alt="Food App"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}
