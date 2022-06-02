import React, { useState } from "react";
import logo from "../assets/yummyW.png";
import { SiAirtable } from "react-icons/si";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineViewInAr, MdLightMode, MdDarkMode } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import useDarkMode from "../Hooks/useDarkMode";

import Sidebarcomponent from "./Sidebarcomponent";

function Sidebar() {
  const [theme, setTheme] = useDarkMode();
  const [sidebarComponentsData1, setSidebarComponentsData1] = useState([{
      icon: <HiViewGrid />,
      content: "Menu",
      id: 1,
      whiteBack: false
    },
    {
      icon: <SiAirtable />,
      content: "Tables",
      id: 2,
      whiteBack: false
    },
    {
      icon: <MdOutlineViewInAr />,
      content: "overview",
      id: 3,
      whiteBack: false
    },
    {
      icon: <FaFirstOrder />,
      content: "Orders",
      id: 4,
      whiteBack: false
    }])

  const sidebarComponentsData2 = [
    {
      icon: theme === "dark" ? <MdDarkMode /> : <MdLightMode />,
      content: theme === "dark" ? "Darkmode" : "Lightmode",
      id: 5,
      whiteBack: false
    },
    {
      icon: <CgProfile />,
      content: "Profile",
      id: 6,
      whiteBack: false
    },
  ];

  function handleTheme() {
    setTheme(theme);
  }

  const handleComponentColor = id => {
    setSidebarComponentsData1(prevSidebarComponentsData=>{
      return prevSidebarComponentsData.map(sidebarComponentsData=>{
            if(sidebarComponentsData.whiteBack === true) {
              return {...sidebarComponentsData, whiteBack: false}
            }
            return sidebarComponentsData.id === id ? {...sidebarComponentsData, whiteBack: true} : sidebarComponentsData
      })
    })
  }

  const sidebarComponents1 = sidebarComponentsData1.map(
    (sidebarcomponentData, index) => {
      return (
        <Sidebarcomponent
          key={index}
          icon={sidebarcomponentData.icon}
          name={sidebarcomponentData.content}
          link={sidebarcomponentData.content}
          id={sidebarcomponentData.id}
          whiteBack={sidebarcomponentData.whiteBack}
          handleComponentColor={handleComponentColor}
        />
      );
    }
  );

  const sidebarComponents2 = sidebarComponentsData2.map(
    (sidebarcomponentData, index) => {
      return (
        <Sidebarcomponent
          key={index}
          icon={sidebarcomponentData.icon}
          name={sidebarcomponentData.content}
          link={sidebarcomponentData.content}
          handleTheme={handleTheme}
          id={sidebarcomponentData.id}
        />
      );
    }
  );

  return (
    <div className="w-[25rem] h-[100vh] bg-myred flex flex-col items-center justify-between fixed z-[1] ">
      <div className="w-full h-[50%] flex flex-col items-center justify-around ">
        <div className="logo w-[15rem] h-fit flex items-center justify-start ">
          <header className="flex h-[8rem] w-[26rem] justify-center items-center">
            <img src={logo} className="logo" alt="Logo" width='210px' />
          </header>
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center gap-[2rem]">
          {sidebarComponents1}
        </div>
      </div>
      <div className="w-full h-[20%]  flex flex-col items-center justify-center gap-[2rem]">
        {sidebarComponents2}
      </div>
    </div>
  );
}

export default Sidebar;
