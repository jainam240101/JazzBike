/** @format */

import React from "react";
import Link from "next/link";

const Navbar = () => {
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
        <Link href='/login'>
          <a className='text-white text-xl font-OpenSans hover:text-green-500'>
            Login
          </a>
        </Link>
        <Link href='/signup'>
          <a className='text-white ml-5 text-xl font-OpenSans hover:text-green-500'>
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
