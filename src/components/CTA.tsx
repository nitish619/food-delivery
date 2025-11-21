import React from "react";
import background from "@/assets/images/cta.png";

export default function CTA() {
  return (
    <div>
      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex relative w-full h-[516px] bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <h2 className="text-white font-bold text-[58px] tracking-[0.2px] leading-[80px] mt-4">
            Download the app now.
          </h2>

          <h4 className="text-tertiary mt-4 text-[24px] tracking-[0.2px] leading-[38px]">
            Available on your favorite store. Start your premium experience now
          </h4>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow-md">
              Playstore
            </button>

            <button className="border border-white text-white px-10 py-4 rounded-xl font-semibold shadow-md">
              App store
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="relative flex md:hidden flex-col items-center text-center px-4 pt-10 pb-16 z-50">
        <h2 className="text-white font-bold text-3xl leading-tight mt-4">
          Download the app now.
        </h2>

        <h4 className="text-[#BDBDBD] mt-4 text-base">
          Most calendars are designed for teams.
        </h4>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-primary text-white px-6 py-4 rounded-xl font-semibold shadow-md">
            Buy now
          </button>

          <button className="border border-white text-white px-6 py-4 rounded-xl font-semibold shadow-md">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}
