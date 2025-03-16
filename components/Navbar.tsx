"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import { BsBell, BsSearch } from "react-icons/bs";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import useCurrentUser from "@/hooks/useCurrentUser";

const TOP_OFFSET = 66;

const Navbar = () => {
  const {data: user} = useCurrentUser();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <div className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex gap-0.5 items-center text-2xl">
            <span className="text-white">Movie</span>
            <span className="text-emerald-400 font-medium">Stream</span>
          </div>
        </div>
        <div className="lg:flex flex-row ml-8 gap-7 hidden text-white">
            <NavbarItem label="Home" />
            <NavbarItem label="Series" />
            <NavbarItem label="Films" />
            <NavbarItem label="New & Popular" />
            <NavbarItem label="My List" />
        </div>
        <div className="lg:flex hidden flex-row items-center ml-auto gap-7">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
        </div>
        <div className="flex flex-row items-center ml-6 gap-2 cursor-pointer relative">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden">
            <Image onClick={toggleAccountMenu} src={user?.image || "/images/user.png"} alt="User Icon" width={40} height={40} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
