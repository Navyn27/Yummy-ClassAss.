import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sidebarcomponent(props) {
  
  return (
    <>
      {props.name !== "Lightmode" && props.name !== "Darkmode" ? (
        props.id !== 6 ? <Link to={`${props.link}`} onClick={()=>props.handleComponentColor(props.id)} className={`bg-[${props.whiteBack ? 'white' : 'none'}]`}>
          <div className="SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]" style={{padding: props.whiteBack && '1rem' }} >
            <div className={`text-[${props.whiteBack ? 'black' : 'white'}] text-3xl font-bold`}>{props.icon}</div>
            <b className={`text-[${props.whiteBack ? 'black' : 'white'}]`}>{props.name}</b>
          </div>
        </Link>:
        <Link to={`${props.link}`}  className={`bg-[${props.whiteBack ? 'white' : 'none'}]`}>
          <div className="SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]" style={{padding: props.whiteBack && '1rem' }} >
            <div className={`text-[${props.whiteBack ? 'black' : 'white'}] text-3xl font-bold`}>{props.icon}</div>
            <b className={`text-[${props.whiteBack ? 'black' : 'white'}]`}>{props.name}</b>
          </div>
        </Link>
      ) : (
        <div
          className="SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]"
          onClick={props.handleTheme}
        >
          <div className="text-[white] text-3xl font-bold">{props.icon}</div>
          <b className="text-[white]">{props.name}</b>
        </div>
      )}
    </>
  );
}

export default Sidebarcomponent;
