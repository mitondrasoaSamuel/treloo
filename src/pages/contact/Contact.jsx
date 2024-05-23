import React from "react";
import CardContact from "../../composant/cardContact/CardContact";

function Contact() {
  return (
    <div className=" bg-red-200/ ">
      <div className="container">
        <div className="bg-green-500/ py-20 px-2 flex xl:justify-between xl:gap-28 justify-center items-center ">
          <CardContact className="hidden xl:block cursor-pointer" />
          <div className="flex flex-col gap-5 bg-red-500/ max-w-[590px]">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-3xl md:text-5xl ">
                Travel Any Corner of
              </h2>
              <h2 className="font-semibold text-3xl md:text-5xl ">
                The World With Us
              </h2>
            </div>
            <div className="flex flex-col gap-5 leading-10 text-black/75 text-xl">
              <p>
                Would you explore nature paradise in the world, let’s find the
                best destination in world with us, Would you explore nature
                paradise in the world, let’s find the best destination in world
                with us. Would you explore nature paradise in the world, let’s
                find the best destination in world with us.
              </p>
              <p>
                Would you explore nature paradise in the world, let’s find the
                best destination in world with us.
              </p>
            </div>
            <span className="bg-[#3E86F5] hover:bg-[#3e4af5] cursor-pointer text-white text-xl p-5 w-[179px] text-center rounded-xl hover:shadow-xl">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
