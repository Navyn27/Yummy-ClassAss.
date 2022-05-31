import { useState } from "react";
import { useEffect } from "react";

import React from "react";
import logo from "../assets/Group 66.png";
import img from "../assets/man.png";
import AboutUs from "./AboutUs";
import Footer from "./footer";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import arun from "../assets/arun.jpg";
import marques from "../assets/marques.jpg";

const Landing = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 1343 ? setWidth(true) : setWidth(false);
    });
  });

  useEffect(() => {
    window.innerWidth <= 1200 && setWidth(true);
  }, []);

  return (
    <div
      style={{ background: `linear-gradient(to bottom,#FFDFE1,white)` }}
      className="top h-[46rem]"
    > 
      <div className='w-[100%] h-fit flex flex-col '>
        <Fade top >
          <header className="flex h-[8rem] w-[28rem] justify-center items-center">
            <img src={logo} className="logo" alt="Logo"/>
          </header>
        </Fade>
        
        <main className="w-full flex items-center justify-center gap-[10rem] mt-[rem]">
          
            <div className="flex flex-col items-start justify-center  gap-[2rem] ">
              <Fade left duration={1000} >
                <div className="flex flex-col items-start justify-center gap-[2rem]">
                  <button className="w-[15rem] h-[2.5rem]  bg-[#FFDFE1] font-quicksand text-[#F54749] rounded-[34px] font-semibold">
                    More than faster
                  </button>
                  <div className="flex flex-col items-start justify-center gap-[1rem] font-semibold font-quicksand ">
                    <span className='text-4xl'>Register your <span className="text-4xl text-[#F54749]">restaurant</span> </span>
                    <span className="text-4xl text-[#F54749]"><span className='text-4xl text-black'>on</span> Yummy</span>
                  </div>
                  <div className="font-quicksand text-2xl">
                    Boost your restaurant business for free and <br />
                    receive much more revenue.
                  </div>
                  <div className="flex gap-[2rem]">
                    <button className="w-[14rem] h-[3rem] bg-[#F54749] text-[#FFFFFF] rounded-[34px]">
                      <Link to='/signup'>Register your resto</Link>
                    </button>
                    <button className="w-[14rem] h-[3rem] border-2 text-[#F54749] border-red-500 rounded-[34px]">
                      <Link to='/login'>Sign in to your resto</Link>
                    </button>
                  </div>
                </div>
              </Fade>
                <Fade left delay={1000} >
                  <div className="flex items-center justify-start gap-[2rem] mt-[3rem]">
                    <div className="w-[8rem] h-[4rem] flex relative ">
                      <img src={marques} className="w-16 rounded-[34px] absolute" alt=""></img>
                      <img
                        src={arun}
                        className="w-16 rounded-[34px] absolute left-8"
                        alt=""
                      ></img>
                      <img
                        src={marques}
                        className="w-16 rounded-[34px] absolute left-16"
                        alt=""
                      ></img>
                    </div>
                    
                    <div className="">
                      <h3>Our Happy Customers</h3>
                      <div>
                        <img src="" alt=""></img>
                        <h2>
                          <strong>7,8 </strong>(1,2k reviews)
                        </h2>
                      </div>
                    </div>
                  </div>
                </Fade>
            </div>

          { !width && <Zoom >
            <img
              className="max-w-[40rem]"
              src={img}
              alt=""
            ></img>
          </Zoom>}
        </main>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Landing;
