import React from "react";
import CardAlert from "../../composant/cardAlert/CardAlert";
import bg1 from "../../assets/images/unsplash_DlkF4-dbCOU.png";
import bg2 from "../../assets/images/unsplash_CSpjU6hYo_0.png";
import bg3 from "../../assets/images/unsplash_Ai2TRdvI6gM.png";
import bg4 from "../../assets/images/unsplash_K_TbABnVzHo.png";

function Alert() {
  return (
    <div className="" id="alert">
      <div className=" container flex flex-col gap-y-20">
        <div className="flex flex-col items-center gap-y-10">
          <h2 className="font-semibold text-3xl md:text-5xl text-center leading-10">
            Recommended Destination
          </h2>
          <div className="space-x-2 py-3  flex flex-wrap">
            <button className=" py-3 px-4 text-[18px]  font-semibold text-black/75 focus:bg-white focus:text-[#3E86F5]   rounded-xl">
              Populor
            </button>
            <button className=" py-3 px-2  text-[18px] font-semibold text-black/75 focus:bg-white focus:text-[#3E86F5]  rounded-xl">
              Adventure
            </button>
            <button className=" py-3 px-4 text-[18px] font-semibold text-black/75 focus:bg-white focus:text-[#3E86F5]  rounded-xl">
              Beath
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3 xl:grid-cols-4">
          <CardAlert image={bg1} point="3.4" />
          <CardAlert image={bg2} point="4.5" />
          <CardAlert image={bg3} point="4.2" />
          <CardAlert image={bg4} point="3.5" />
        </div>
      </div>
    </div>
  );
}

export default Alert;
