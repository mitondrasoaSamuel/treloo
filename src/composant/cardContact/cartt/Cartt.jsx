import React from "react";

function Cartt({ point, paragraphe,className }) {
  return (
    <div className={className}>
      <div className="text-center bg-white rounded-[36px] w-[174px] p-5 shadow-xl">
        <p className="text-[#3E86F5] font-semibold text-4xl  ">{point}</p>
        <p className="font-light text-lg ">{paragraphe}</p>
      </div>
    </div>
  );
}

export default Cartt;
