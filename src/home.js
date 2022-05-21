import React from "react";
import logo from "./assets/Group 66.png";
import img from "./assets/man.png";
import Main from "./about";
import Footer from "./footer";

import arun from "./assets/arun.jpg";
import marques from "./assets/marques.jpg";

const Landing = () => {
  return (
    <div
      style={{ background: `linear-gradient(to bottom,#FFDFE1,white)` }}
      className="top h-[46rem]"
    >
      <div>
        <header className="h-[12rem] w-[30rem] flex justify-center items-center">
          <img src={logo} className="logo" alt="Logo" />
        </header>
        <main className="relative top-5">
          <div className="ml-32">
            <button className="w-56 h-10 mb-16 bg-[#FFDFE1] font-quicksand text-[#F54749] rounded-[34px] font-semibold">
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
              <></>
            </div>
          </div>
        </main>
        <div className="flex ml-[100px] mt-[120px]">
          <div className="images flex">
            <img src={marques} className="w-16 rounded-[34px]" alt=""></img>
            <img
              src={arun}
              className="absolute left-[140px] w-16 rounded-[34px]"
              alt=""
            ></img>
            <img
              src={marques}
              className="absolute left-[180px] w-16 rounded-[34px]"
              alt=""
            ></img>
          </div>
          <div className="absolute left-[250px]">
            <h3>Our Happy Customers</h3>
            <div>
              <img src="" alt=""></img>
              <h2>
                <strong>7,8 </strong>(1,2k reviews)
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="top-auto right-20">
        <img
          className="absolute w-[40rem]
             float-right top-[30px] right-20"
          src={img}
          alt=""
        ></img>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Landing;
