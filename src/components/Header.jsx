import React, { useState } from "react";
import logo from "../img/logo.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {



    const [Toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex text-center p-5  justify-between">
      <div className=" flex text-center  gap-8 ">
        <img
          src={logo}
          className="w-[80px] h-[40px] object-contain  md:w-[115px] "
          alt=""
        />
        <div className="hidden md:flex lg:gap-5 gap-4">
          {menu.map((item, index) => (
            <HeaderItem name={item.name} key={index} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} key={index} Icon={item.icon} />
          )}
          <div className=" md:hidden  " onClick={()=>setToggle(!Toggle)}>
            <HeaderItem Icon={HiDotsVertical} />
          {Toggle?             <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700  px-5 py-4">
            {menu.map(
            (item, index) =>
              index > 2 && <HeaderItem name={item.name} key={index} Icon={item.icon} />
          )}
            </div> : null}
          </div>
        </div>
      </div>
      <img
        src="https://img.freepik.com/vecteurs-premium/illustration-avatar-etudiant-icone-du-profil-utilisateur-avatar-jeunesse_118339-4395.jpg"
        className="w-15 h-15 object-cover rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;
