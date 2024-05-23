import React from "react";

function CartCard({
  paragraphLiving,
  paragraphGoing,
  iconParagraph1,
  iconParagraph2,
  villeGauche,
  villeDroit,
  icon,
  className
}) {
  return (
    <div>
      <div className={className}>
        <div className="">
          <div className="flex  items-center gap-x-3">
            <p className="text-black/75 ">{paragraphLiving} </p>
            <i className="text-[#3E86F5] ">{iconParagraph1}</i>
          </div>
          <p className="text-xl">{villeGauche}</p>
        </div>
        <div className="text-black/35 text-[20px] rounded-full p-1 flex items-center justify-center border-dashed border-2 border-black/35 ">
          {icon}
        </div>
        <div className="">
          <p className="text-black/75 flex items-center gap-3 ">
            {paragraphGoing} <i className=" text-[#3E86F5]">{iconParagraph2}</i>
          </p>
          <p className="text-xl">{villeDroit}</p>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
