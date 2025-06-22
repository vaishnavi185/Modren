import React from 'react';

export default function Topp() {
  return (
    <div className='flex flex-row mt-[40px] ml-[50px] gap-[750px]'>
      <div className='w-[180px] h-[54px] rounded-[64px] bg-[#FFFFFF] flex flex-row items-center px-4 shadow-md'>
        <img src='iCon/left.png' className='size-[24px] ml-[10px]' alt='Back' />
        <span className='font-outfit text-[16px] font-bold text-[#000000] ml-[20px]'>
          Back to home
        </span>
      </div>
      <div className='w-[180px] h-[54px] rounded-[64px] bg-[#FFFFFF] flex flex-row items-center px-4 shadow-md'>
        
        <span className='font-outfit text-[16px] font-bold text-[#000000] ml-[20px]'>
            
          Next:The Null
        </span>
        <img src='iCon/right.png' className='size-[24px] ml-[20px]' alt='Back' />
      </div>
      
    </div>
  );
}
