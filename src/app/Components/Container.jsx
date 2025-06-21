import React from 'react';
import './custom-shape.css'; // External CSS for the complex shape

export default function Container() {
  return (
    <div className="  w-[26vw] h-[40vh] bg-[#FAFAFF] clip-complex flex items-center justify-center text-black text-xl rounded-[90px] rounded-bl-[200px] relative mt-[526px] ml-[750px] opacity-[80%]">
      
<div className="relative w-[26vw] h-[40vh]  flex flex-row">
  <img src="TITTLE.png" className="absolute top-[35px] left-[160px] h-[100px]" />

  <div className="flex flex-col  ">
  <p className="text-[10px] text-[#000000] font-outfit font-bold mt-[40px] ml-[45px] ">
    Oct 2023
  </p>
  <p className='absolute font-outfit text-[#000000] mt-[40px] text-[48px]  ml-[40px]'>
 02

  </p>
</div>

</div>

    
    </div>
  );
}
