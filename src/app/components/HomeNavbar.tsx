"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HomeLogo from "/public/homelogo.png";
import FamilyBg from "/public/familybg.png";
import { Menu} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Dad", href: "/home/dad" },
  { name: "Mom", href: "/home/mom" },
  { name: "Timer", href: "/home/timer" },
  { name: "Best", href: "/home/best" },
];

export default function HomeNavbar() {
  const pathname = usePathname();

  return (
    <div className="w-full mx-auto items-center justify-between px-5 sm:px-6 py-3 lg:px-8 flex z-10">
      <div className="flex items-center justify-center sm:mr-auto">
        <Link href="/home" className="w-26 mx-2">
          <Image src={HomeLogo} alt="logo" priority />
        </Link>
        <Link href="/home" className="w-40 ml-2 overflow-hidden">
          <Image src={FamilyBg} alt="logo" priority />
        </Link>
        {/* Desktop Menu */}
        <ul className="lg:flex gap-x-6 ml-16 hidden justify-between">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? ( //current path
                <li>
                  <Link
                    href={link.href}
                    className={`${ pathname === "/home"?"text-white":"text-zinc-700"} font-semibold underline text-xl`}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className={`${ pathname === "/home"?"text-gray-300":"	text-zinc-400"} text-gray-300 font-normal text-xl`}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      {/* Mobile Menu Dropdown */}
    <div className="lg:hidden">
      <DropdownMenu >
        <DropdownMenuTrigger  className="ml-auto p-2 text-white">
            <Menu size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <ul>
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? ( //current path
                <DropdownMenuItem>
                  <Link
                    href={link.href}
                    className="underline font-popping"
                  >
                    {link.name}
                  </Link>
              </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <Link
                    href={link.href}
                    className="font-popping"
                  >
                    {link.name}
                  </Link>
                  </DropdownMenuItem>
              )}
            </div>
          ))}
        </ul>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
}
