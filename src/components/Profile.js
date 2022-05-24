import React from "react";
import { useSate, useEffect } from "react";
import Image from "../assets/marques.jpg";
import "./profile.css";

const Form = () => {
  return (
    <div>
      <form>
        <div className="flex mt-[40px]">
          <label>
            First Name:
            <br />
            <input
              type="text"
              className="border-2 border-[#f5474aa8] rounded-[8px] h-[35px] mt-[10px]"
              name="fname"
            />
          </label>

          <label className="ml-[50px]">
            Last Name:
            <br />
            <input
              type="text"
              className="border-2 border-[#f5474aa8] rounded-[8px] h-[35px] mt-[10px]"
              name="lname"
            />
          </label>
          <br />
        </div>

        <div className="mt-[20px]">
          <label>
            Email:
            <br />
            <input
              type="text"
              className="border-2 border-[#f5474aa8] rounded-[8px] h-[35px] mt-[10px]"
              name="email"
            />
          </label>
        </div>
        <br />

        <div>
          <label>
            Phone Number:
            <br />
            <input
              type="text"
              className="border-2 border-[#f5474aa8] rounded-[8px] h-[35px] mt-[10px]"
              name="num"
            />
          </label>
        </div>

        <br />

        <div>
          <label>
            Address:
            <br />
            <input
              type="text"
              className="border-2 border-[#f5474aa8] rounded-[8px] h-[35px] mt-[10px]"
              name="address"
            />
          </label>
        </div>
        <br />
        <input
          type="submit"
          className="border-2 border-[#f5474aa8] rounded-[8px] w-[100px] h-[35px] mb-[20px] bg-[#f5474a] mt-[10px] text-[white] font-bold"
          value="Update"
        />
      </form>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="w-[73%] mt-[2.5rem] absolute right-0">
      <h2 className="text-2xl mb-[20px] mt-[20px] font-bold">
        <strong>Edit Profile</strong>
      </h2>
      <img
        className="w-40 rounded-[120px] border-2 border-[#f5474aa8]"
        src={Image}
        alt=""
      />
      <Form />
    </div>
  );
};

export default Profile;
