import React from "react";
import logo from "./assets/yummy-logo2.png";
import img from "./assets/man.png";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const name = "Jacques Mugabo";

const Landing = () => {
  return (
    <div>
      <header className="relative flex justify-around">
        <img
          src={logo}
          className="logo w-2/5 ml-[-130px] mt-[-50px]"
          alt="Logo"
        />
        <AiOutlineSearch className="icon text-2xl mt-[95px] ml-[210px] " />
        <AiOutlineBell className="icon text-2xl mt-[95px] ml-[-70px]" />
        <h2 class="text-xl mt-[90px] ml-[-52px]">{name}</h2>
        <VscAccount className="icon text-2xl mt-[95px] mr-[230px]" />
      </header>
      <main>
        <section className="ml-32">
          <button className="w-56 h-10 mt-[-15px] mb-16 bg-[#FFDFE1] font-quicksand text-[#F54749] rounded-[34px] font-semibold">
            More than faster
          </button>
          <div className="font-semibold font-quicksand text-4xl">
            Register your{" "}
            <span className="text-4xl text-[#F54749]">restaurant</span>
          </div>
          <div className="font-quicksand font-semibold text-4xl mb-6">
            On&nbsp;
            <span className="text-4xl text-[#F54749]">Yummy</span>
          </div>
          <div className="font-quicksand text-2xl">
            Boost your restaurant business for free and <br />
            receive much more revenue.
          </div>
          <div className="mt-12 flex">
            <button className="w-56 h-12 bg-[#F54749] text-[#FFFFFF] rounded-[34px]">
              Register your resto
            </button>
            <button className="w-56 h-12 border-2 text-[#F54749] border-red-500 rounded-[34px] ml-10">
              Sign in your resto
            </button>
          </div>
        </section>
        <div>
          <img
            className="relative w-[600px]
             float-right mr-[13rem] mt-[-450px]"
            src={img}
            alt=""
          ></img>
        </div>
      </main>
    </div>
  );
};

export default Landing;
