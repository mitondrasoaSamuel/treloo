import React from "react";
import bgcard from "../../assets/images/unsplash_tQpypKA92k8.png";
import Cartt from "./cartt/Cartt";

function CardContact({ className }) {
  // const bg = {
  //   backgroundImage : `url(${bgcard})`,
  //   backgroundRepeat : `no-repeat`,
  //   backgroundSize: `cover`,

  // }
  return (
    <div className={className}>
      <div className="relative ">
        <img src={bgcard} alt=".."  />
        <Cartt point="5000+" paragraphe="TOURISTS" className="absolute -left-20  bottom-80" />
        <Cartt point="300+" paragraphe="DESTINATIONS" className="absolute -right-20 top-12" />
        <Cartt point="150+" paragraphe="HOTELS" className="absolute -right-20 bottom-24" />
      </div>
    </div>
  );
}

export default CardContact;
