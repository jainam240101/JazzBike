/** @format */

import React from "react";

const Modal = ({ children }) => {
  return (
    <div className='bg-black opacity-95 z-10 absolute top-0 left-0 h-full w-full flex items-center justify-center'>
      <div className='bg-white rounded-lg z-20 shadow-lg'>{children}</div>
    </div>
  );
};

export default Modal;
