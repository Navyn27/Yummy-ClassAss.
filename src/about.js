import React from "react";
import easy from "./assets/easy.png";
import fast from "./assets/fast.png";
import money from "./assets/money.png";

const images = [easy, fast, money];

const Main = () => {
  return (
    <div className=" w-full mr-50 ml-50 mt-80 grid place-items-center grid-cols-3">
      <div className="h-110 w-[370px] grid place-items-center bg-[aliceblue] rounded-[20px]">
        <img className="w-[400px]" src={images[0]} alt="" />
        <h3 className="text-[#F54749] font-semibold text-2xl">Easy to use</h3>
        <p className="mx-10 mt-4 mb-4">
          It is easy to use this app as nothing more than registering your
          restaurant and making your menu. The rest is our duty{" "}
        </p>
      </div>
      <div className="h-110 w-[370px] grid place-items-center bg-[aliceblue] rounded-[20px]">
        <img className="w-[400px] mt-5" src={images[1]} alt="" />
        <h3 className="text-[#F54749] font-semibold text-2xl">Fastest</h3>
        <p className="mx-10 mt-4 mb-4">
          it is faster ito get clients online as that’s what they prefer
        </p>
      </div>
      <div className="h-110 w-[370px] grid place-items-center bg-[aliceblue] rounded-[20px]">
        <img className="w-[400px]" src={images[2]} alt="" />
        <h3 className="text-[#F54749] font-semibold text-2xl">
          Earn more money
        </h3>
        <p className="mx-10 mt-4 mb-4">
          You can earn money sitting at your work place only by using your phone
          or whatever
        </p>
      </div>
    </div>
  );
};

export default Main;
