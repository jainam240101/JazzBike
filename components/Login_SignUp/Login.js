/** @format */

import React from "react";
import Modal from "../Modal/Modal";
import { ImCross } from "react-icons/im";

const Login = ({ func }) => {
  return (
    <Modal>
      <div className='p-5 flex-col'>
        <div className='flex justify-end'>
          <ImCross
            onClick={() => func(false)}
            className='cursor-pointer'
            size={20}
          />
        </div>

        <h1 className='text-center text-2xl font-bold text-gray-900 font-Montserrat'>
          Login
        </h1>
        <input
          className='w-64 border p-3 font-bold text-black  border-black rounded-lg mt-5'
          placeholder={"Email Id"}
        />
        <br />
        <input
          className='w-64 border p-3 font-bold text-black   border-black rounded-lg my-5'
          placeholder={"Password"}
        />
        <br />
        <button className='bg-green-800 w-full text-white font-OpenSans py-2 rounded-lg font-bold text-xl'>
          Log In
        </button>
      </div>
    </Modal>
  );
};

export default Login;
