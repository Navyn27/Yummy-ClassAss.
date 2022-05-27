import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Sidebarcomponent(props) {
  console.log(props.link);
  return (
    <>
      {props.name !== "Lightmode" && props.name !== "Darkmode" ? (
        <Link to={`${props.link}`}>
          <div className="SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]">
            <div className="text-[white] text-3xl font-bold">{props.icon}</div>
            <b className="text-[white]">{props.name}</b>
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
