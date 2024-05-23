import React from "react";
import { Link as LinkScroll } from "react-scroll";

function ListUL({ className }) {
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
    <div className="">
      <ul className={className}>
        {liste.map(({ title, to, offset }, index) => (
          <li
            key={index}
            className="cursor-pointer text-white hover:scale-95 hover:text-white/80 duration-300 "
          >
            <LinkScroll to={to} spy={true} smooth={true} offset={offset}>
              {title}
            </LinkScroll>
          </li>
        ))}
        <li className="text-[#3E86F5] max-w-[141px] bg-white shadow-xl hover:bg-white/95 hover:text-blue-500 px-8 py-3 rounded-lg cursor-pointer hover:scale-95/ duration-300">
          Blog
        </li>
      </ul>
    </div>
  );
}

export default ListUL;
