import React from "react";
import PropsNavBar from "../propsNavBar/PropsNavBar";
import ListUL from "../listeNav/ListUL";
import { Link as LinkScroll } from "react-scroll";

function Navbar() {
  return (
    <div className="shadow-md fixed bg-[#4F5F6A] opacity-95/ w-full z-50 ">
      <div className="relative container">
        <div className="bg-green-400/ py-4 flex items-center justify-between ">
          <LinkScroll to="review" spy={true} smooth={true} offset={0}>
            <h2 className="text-white text-[48px] cursor-pointer">Treloo</h2>
          </LinkScroll>
          <div className="hidden md:block">
            <ListUL className="flex gap-10 lg:gap-16 text-white text-xl  items-center " />
          </div>
          <PropsNavBar className="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
