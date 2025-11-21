import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import snapchat from "@/assets/images/social/snapchat.png";
import instagram from "@/assets/images/social/instagram.png";
import facebook from "@/assets/images/social/facebook.png";
import linkedin from "@/assets/images/social/linkedin.png";

export default function Footer() {
  return (
    <footer className="h-[112px] md:h-[156px] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-4 md:px-10">
        {/* Left - Logo */}
        <Link href="/" className="hidden md:flex">
          <Image
            src={logo}
            alt="Logo"
            width={246}
            height={101}
            priority
            className="w-[104px] h-[51px] md:w-[246px] md:h-[101px]"
          />
        </Link>

        {/* Center - Social Icons */}
        <div className="flex items-center gap-6">
          <Link href="#">
            <Image
              src={snapchat}
              alt="snapchat"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          <Link href="#">
            <Image
              src={facebook}
              alt="facebook"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          <Link href="#">
            <Image
              src={instagram}
              alt="instagram"
              width={24}
              height={24}
              className="w-7 h-7"
            />
          </Link>
          <Link href="#">
            <Image
              src={linkedin}
              alt="instagram"
              width={24}
              height={24}
              className="w-7 h-7"
            />
          </Link>
        </div>

        {/* Right - Copyright */}
        <div className="hidden md:flex text-sm whitespace-nowrap">
          Copyright 2020 Bella Onojie.com
        </div>
        <div className="md:hidden flex text-[12px] whitespace-nowrap">
          Just type what&apos;s on your mind and we&apos;ll
        </div>
      </div>
    </footer>
  );
}
