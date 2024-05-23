import React from "react";
import eclipe2 from "../../assets/images/1200px-Cquote2_black 1.png"

function CardCaroussel({nom}) {
  const bg = {
    backgroundImage: `url(${eclipe2})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `auto`,
    backgroundPosition: `50% 10%`,
  };
  return (
    <div className=" max-w-[580px]" >
      <div className="bg-white  rounded-[50px] px-10 py-20 relative " style={bg}>
        {/* <img src={eclipe2} alt=".." className="bg-white p-10 rounded-[80px] absolute -bottom-20 left-28 " /> */}
        <div className="flex flex-col items-center gap-y-5">
          <p className="text-xl max-w-[508px] text-center leading-10">
            Our trip to Morocco was truly a onece in a lifetime experience and
            we are so grateful to everyone that made it happen seamlessly. Our
            travel planner, Jaouad, was increadible.
          </p>
          <p className="text-[#3E86F5] text-xl">{nom}</p>
          <p className="text-black/75 text-xl z-30">Happy Treloo</p>
        </div>
      </div>
    </div>
  );
}

export default CardCaroussel;
