import React from 'react';
import './custom-shape.css';
import BottomNav from './BottomNav';

export default function Container() {
  return (
    <div className="relative mt-[526px] ml-[750px] w-[26vw]">
      {/* Opaque box with content */}
      <div className="w-full h-[40vh] bg-[#FAFAFF] clip-complex flex items-center justify-center text-black text-xl rounded-[90px] rounded-bl-[200px] opacity-[80%] relative">
        <div className="relative w-full h-full flex flex-row">
          <img
            src="TITTLE.png"
            className="absolute top-[35px] left-[160px] h-[100px]"
          />

          <div className="flex flex-col">
            <p className="text-[10px] text-[#000000] font-outfit font-bold mt-[40px] ml-[45px]">
              Oct 2023
            </p>
            <p className="absolute font-outfit text-[#000000] mt-[40px] text-[48px] ml-[40px]">
              02
            </p>
          </div>
        </div>
      </div>

      {/* Fully opaque BottomNav below the faded box */}
      <div className="absolute top-[230px] left-1/2 transform -translate-x-1/2 opacity-100">
        <BottomNav />
      </div>
    </div>
  );
}
