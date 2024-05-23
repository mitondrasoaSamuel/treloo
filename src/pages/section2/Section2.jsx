import React from "react";
import Home from "../home/Home";
import Card from "./card/Card";
import Tips from "../tips/Tips";

function Section2() {
  return (
    <div className="flex flex-col gap-y-[680px] md:gap-y-[480px] lg:gap-y-[330px] ">
      <div className="">
        <Home />
        <Card />
      </div>

      <Tips className="w-full" />
    </div>
  );
}

export default Section2;
