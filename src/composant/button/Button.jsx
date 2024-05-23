import React from "react";

function Button({icon,label,className}) {
  return (
    <div clas>
      <button className={className}>
        <i className="text-[#3E86F5] ">
          {icon}
        </i>
        {label}
      </button>
    </div>
  );
}

export default Button;
