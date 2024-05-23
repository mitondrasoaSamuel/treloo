import React from "react";
import CartCard from "../../../composant/cartCard/CartCard";
import { IoAirplaneSharp } from "react-icons/io5";
import { PiCalendarDots } from "react-icons/pi";
import Button from "../../../composant/button/Button";
import { FaHotel } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Card() {
  return (
    <div className="w-ful px-10 flex items-center container relative">
      <div className=" absolute -bottom-[38rem] md:-bottom-[24rem] lg:-bottom-[14rem] left-0 right-0 bg-red-500/ lg:container container w-full px-5 ">
        <div className="bg-white py-20 rounded-r-[50px] rounded-bl-[50px] flex flex-col lg:flex-row lg:justify-center lg:gap-x-10 items-center gap-y-10 relative shadow-xl ">
          <div className="flex gap-x-5 bg-white p-5 w-[280px] rounded-t-3xl absolute left-0 -top-24 ">
            <Button
              className="flex gap-1 items-center bg-white  focus:bg-[#3E86F5]/20  p-5 rounded-3xl  "
              label="Fight"
              icon={<IoAirplaneSharp className="-rotate-45 text-[25px]" />}
            />
            <Button
              label="Hotel"
              icon={<FaHotel className=" text-[25px]" />}
              className="flex gap-1 items-center bg-white  focus:bg-[#3E86F5]/20  p-5 rounded-3xl  "
            />
          </div>

          <div className="flex flex-col  items-center gap-10 bg-red-200/ md:flex-row">
            <CartCard
              paragraphLiving="Living From"
              paragraphGoing="Going to"
              villeGauche="Dubai"
              villeDroit="New York"
              icon={<IoAirplaneSharp className="text-[25px]" />}
              className="bg-white xl:w-[45vh] 2xl:w-[50vh] flex gap-x-5  xl:gap-x-16 items-center justify-center py-10 px-5 rounded-3xl border-2 border-black/20"
            />
            <CartCard
              paragraphLiving="Leave"
              iconParagraph1={<IoAirplaneSharp className="text-[25px]" />}
              iconParagraph2={
                <IoAirplaneSharp className="rotate-180 text-[25px]" />
              }
              paragraphGoing="Return"
              villeGauche="23 Jan, Sat"
              villeDroit="14 Jan, Thu"
              icon={<PiCalendarDots className="text-[21px]" />}
              className="bg-white xl:w-[45vh] 2xl:w-[50vh] flex gap-x-5 xl:gap-x-16 items-center justify-center py-10 px-4 rounded-3xl border-2 border-black/20"
            />
          </div>

          <div>
            <button className="bg-[#3E86F5] p-10 w-full rounded-3xl text-white flex items-center gap-x-4  text-xl lg:hidden">
              Search
              <IoSearch className="text-4xl" />
            </button>
            <button className="bg-[#3E86F5] p-12 w-full rounded-full text-white  text-xl hidden lg:block">
              <IoSearch className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
