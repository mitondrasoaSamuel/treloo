import React, { useState } from "react";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import ListUL from "../listeNav/ListUL";

function PropsNavBar({ className }) {
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openSidebar = () => {
    setVisible(true);
    setSidebarOpen(true);
  };

  // Fonction pour fermer le modal
  const closeSidebar = () => {
    setVisible(false);
    setSidebarOpen(false);
  };

  return (
    <div className={className}>
      <div>
        {sidebarOpen ? (
          <span className="text-5xl" onClick={closeSidebar}>
            <MdMenuOpen className="text-5xl text-white cursor-pointer hover:scale-105 duration-300 " />
          </span>
        ) : (
          <MdOutlineMenu
            className="text-5xl text-white cursor-pointer hover:scale-105 duration-300"
            onClick={openSidebar}
          />
        )}
      </div>
      {visible && (
        <div className="absolute bg-[#4F5F6A] right-0 top-[104px] w-full rounded-b-3xl ">
          <ListUL className="flex flex-col items-center py-8 gap-8 text-xl" />
        </div>
      )}
    </div>
  );
}

export default PropsNavBar;
