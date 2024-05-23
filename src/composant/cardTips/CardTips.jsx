import React from "react";
import plage1 from "../../assets/images/unsplash_7uXn7nudorc.png";

function CardTips({ image, paragrDate, titre, date, prix, className, legend }) {
  return (
    <div className="bg-white p-5 pr-8  md:pr-10 rounded-3xl flex flex-col gap-y-5  cursor-pointer">
      <div className="bg-red-200/ relative overflow-hidden rounded-[50px] ">
        <img src={image} alt=".." className="w-[260px] h-[255px] hover:scale-110 " />
        <p className="text-black/75 text-lg whitespace-pre rotate-90 bg-red-200/ h-[20px] textcente absolute -right-[95px] md:-right-[100px] bottom-28">
          {paragrDate}
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-4 items-center">
          <span className={className}>{legend}</span>
          <span className="text-[14px] text-black/75">{date}</span>
        </div>
        <h2 className="text-[24px] font-semibold ">{titre}</h2>
        <div className="flex items-center justify-between">
          <p className="text-[24px]">
            {prix}
            <span className="text-[18px] text-black/75">/Person</span>
          </p>
          <span className="text-[#3E86F5] bg-[#F2F6FF] p-3 rounded-xl text-sm hover:bg-[#dbe4fa] ">
            Book Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardTips;
