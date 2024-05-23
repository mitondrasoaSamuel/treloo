import React from "react";
import CardTips from "../../composant/cardTips/CardTips";
import plage1 from "../../assets/images/unsplash_7uXn7nudorc.png";
import plage2 from "../../assets/images/unsplash_HUk2W9fa-Jw.png";
import plage3 from "../../assets/images/unsplash_Yui5vfKHuzs.png";

function Tips({ className }) {
  return (
    <div className={className} id="tips">
      <div className=" w-full">
        <div className="container  flex flex-col items-center gap-y-10">
          <h2 className="font-semibold text-3xl md:text-5xl text-center">
            Special Upcoming Offers
          </h2>
          <div className="flex flex-col gap-y-8 items-center">
            <div className="bg-white rounded-2xl p-3 space-x-3 w-[325px]">
              <button className="bg-white py-3 px-4 text-[18px]  text-black/75 focus:text-white focus:bg-[#3E86F5]   rounded-xl">
                Team
              </button>
              <button className="bg-white py-3 px-4 text-[18px] text-black/75 focus:text-white focus:bg-[#3E86F5]  rounded-xl">
                Couple
              </button>
              <button className="bg-white py-3 px-4 text-[18px] text-black/75 focus:text-white focus:bg-[#3E86F5]  rounded-xl">
                Family
              </button>
            </div>

            {/* card-------------------------------- */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-20 ">
              <CardTips
                image={plage1}
                paragrDate="1 4   F E B   2 0 2 2"
                titre="Loga Sea"
                date="3 Days, 3 Nights"
                prix="700$"
                legend="Relax"
                className="text-[#F178B6] bg-[#FCDDEC] py-1 px-3 rounded-full text-[14px]"
              />
              <CardTips
                image={plage2}
                paragrDate="1 8   J U N   2 0 2 2"
                titre="Ansgar Scheffold"
                date="4 Days, 3 Nights"
                prix="400$"
                legend="Adventure"
                className="text-[#7879F1] bg-[#F1F1FD] py-1 px-3 rounded-full text-[14px]"
              />
              <CardTips
                image={plage3}
                paragrDate="2 2   D E C   2 0 2 2"
                titre="Lona X"
                date="7 Days, 6 Nights"
                prix="340$"
                legend="Relax"
                className="text-[#F178B6] bg-[#FCDDEC] py-1 px-3 rounded-full text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;
