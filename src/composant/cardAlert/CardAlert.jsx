import React from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";

function CardAlert({image,point}) {
  return (
    <div>
      <div className="flex flex-col gap-5 max-w-[280px] bg-white p-3 rounded-3xl ">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={image}
            alt=".."
            className="cursor-pointer hover:scale-110 duration-500"
          />
          <p className="flex gap-x-2 items-center bg-white justify-center rounded-xl p-1 w-[70px] text-sm absolute right-4 top-4 cursor-pointer hover:bg-white/90">
            <i className="text-[#F8CE01]">
              <FaStar />
            </i>
            {point}
          </p>
        </div>
        <div className="px-8 space-y-1">
          <p className="font-semibold text-lg ">Kina Mountain</p>
          <p className="font-medium text-sm flex gap-x-2">
            <i className="text-[#FD787B]">
              <FaLocationDot />
            </i>
            Cambodia
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardAlert;
