/** @format */

import React, { useState } from "react";
import Login from "../Login_SignUp/Login";
import SignUp from "../Login_SignUp/SignUp";

const Navbar = () => {
  const [loginModal, setloginModal] = useState(false);
  const [signUpModal, setsignUpModal] = useState(false);
  return (
    <div className='bg-blue-800 flex justify-between px-44 py-4'>
      <div className=''>
        <h1 className='font-Jura text-3xl font-semibold text-white'>
          Jazzbike
        </h1>
        <div className='text-pink-800 text-xl mt-3'>
          Easiest Bicycle Sharing Platform
        </div>
      </div>
      <div className='flex items-center'>
        <div
          onClick={() => setloginModal(true)}
          className='text-white cursor-pointer text-xl font-OpenSans hover:text-green-500'>
          Login
        </div>
        <div
          onClick={() => setsignUpModal(true)}
          className='text-white cursor-pointer ml-5 text-xl font-OpenSans hover:text-green-500'>
          Sign Up
        </div>
      </div>
      {loginModal && <Login func={setloginModal} />}
      {signUpModal && <SignUp func={setsignUpModal} />}
    </div>
  );
};

export default Navbar;
