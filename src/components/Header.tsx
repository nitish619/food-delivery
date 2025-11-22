"use client";

import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const header = [
  { label: "home", link: "/" },
  { label: "product", link: "/product" },
  { label: "faq", link: "/faq" },
  { label: "contact", link: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[112px] md:h-[156px] flex items-center">
      <div className="w-full flex items-center justify-between px-4 md:px-20">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={246}
            height={101}
            priority
            className="w-[104px] h-[51.37303924560547px] md:w-[246px] md:h-[101px]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-[77px]">
          {header.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="capitalize text-[16px] font-semibold tracking-[0.2px] leading-[28px] hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="flex md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute top-[112px] left-0 flex flex-col bg-white px-4 py-4 space-y-4 border-t border-b border-gray-200 z-50 w-full">
          {header.map((item, index) => {
            const delay = `${index * 0.25}s`;
            return (
              <Link
                key={index}
                href={item.link}
                className="capitalize text-[16px] font-medium animate__animated animate__fadeInBottomRight"
                style={{ animationDelay: delay }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
