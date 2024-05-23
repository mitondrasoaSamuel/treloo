import React from "react";

function Review() {
  return (
    <div className=" h-[100vh] flex items-center  justify-center " id="review">
      <div className="text-white px-5 container> bg-red-500/ flex flex-col justify-center max-w-[830px] gap-y-8 ">
        <h1 className="font-semibold text-5xl sm:text-6xl md:text-[64px] text-center leading-[60px] sm:leading-[70px] md:leading-[80px]  bg-red-300/">
          Discover Your Life, Travel Where You Want
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl mx-10/ bg-green-200/">
          Would you explore natur paradise in the world, let’s find the best
          destination in world with us.
        </p>
      </div>
    </div>
  );
}

export default Review;
