import React from "react";
import unsplash from "../../assets/images/unsplash_Q1p7bh3SHj8.png";
import { Link as LinkScroll } from "react-scroll";

function CopiRight() {
  const bg = {
    backgroundImage: `url(${unsplash})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };
  const liste = [
    {
      title: "Review",
      to: "review",
      offset: 0,
    },
    {
      title: "Tips",
      to: "tips",
      offset: -150,
    },
    {
      title: "Alerts",
      to: "alert",
      offset: -170,
    },
    {
      title: "Blog",
      to: "blog",
      offset: -130,
    },
  ];
  return (
    <div className=" pt-20">
      <div className="container flex flex-col gap-y-32">
        <div
          style={bg}
          className=" flex flex-col items-center justify-center gap-10 p-24 rounded-[60px]"
        >
          <p className="text-white font-semibold text-3xl md:text-5xl text-center leading-10 max-w-[743px]">
            Don’t Miss The 50% Discount if You register Today
          </p>
          <span className="text-[#3E86F5] text-xl bg-white rounded-2xl p-5">
            Register Today
          </span>
        </div>
        <div className="bg-white/ flex items-center justify-center md:justify-between pb-10">
          <p className="text-black/75 ">
            © 2022 Treloo LLC - All right reserved.
          </p>
          <div className="hidden md:block">
            <ul className="flex gap-10 text-xl cursor-pointer">
              {liste.map(({ title, to, offset }, index) => (
                 <LinkScroll to={to} spy={true} smooth={true} offset={offset}>
                 {title}
               </LinkScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopiRight;
