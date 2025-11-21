import React from "react";
import image1 from "@/assets/images/how-work/how-work-1.png";
import image2 from "@/assets/images/how-work/how-work-2.png";
import image3 from "@/assets/images/how-work/how-work-3.png";
import Image from "next/image";

const steps = [
  {
    smallTitle: "Create an account",
    title: "Create/login to an existing account to get started",
    desc: "An account is created with your email and a desired password",
    image: image1,
  },
  {
    smallTitle: "Explore varieties",
    title: "Shop for your favorites meal as e dey hot.",
    desc: "Shop for your favorite meals or drinks and enjoy while doing it.",
    image: image2,
  },
  {
    smallTitle: "Checkout",
    title: "When you done check out and get it delivered.",
    desc: "When you done check out and get it delivered with ease.",
    image: image3,
  },
];

export default function HowWork() {
  return (
    <div>
      <p className="text-[44px] tracking-[0.2px] leading-[36px] font-semibold text-center">
        How the app works
      </p>
      <div className="flex flex-col gap-16 md:gap-32 py-10 md:py-20 px-5 md:px-72">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 md:gap-[70px] ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col-reverse md:flex-row"
            }`}
          >
            <div
              className={`flex ${
                index % 2 === 1
                  ? "justify-center md:justify-end"
                  : "md:justify-strat"
              }`}
            >
              <Image
                src={step.image.src}
                alt={step.title}
                width={100}
                height={100}
                className="w-[302px] h-[525px] drop-shadow-2xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 text-center md:text-start">
              <h3 className="text-primary font-semibold mb-2 text-[24px]">
                {step.smallTitle}
              </h3>

              <h2 className="text-[40px] leading-[44px] font-bold text-[#252B42] mb-4">
                {step.title}
              </h2>

              <p className="text-secondary text-[24px] leading-[28px] font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
