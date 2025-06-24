import React from 'react';

export default function RightComp() {
  return (
    <>
    <div className='w-[320px] h-[624px] bg-[#F5F5FC] rounded-[110px] absolute left-[1317px]'>
      <div
        className='w-[304px] h-[610px] bg-[#FFFFFF] absolute top-[10px] left-[10px] rounded-[110px]'
        style={{
          clipPath: `path('
            M 100 0
            Q 40 0 60 60
            Q 70 100 0 120
            V 580
            Q 0 580 60 580
            H 320
            Q 380 580 380 520
            V 60
            Q 380 0 320 0
            H 120
            Q 110 0 100 0
            Z
          ')`,
          borderRadius: '60px'
        }}
      >
        {/* Content goes here */}


        <div className='flex flex-row '>

          <img src='/iCon/location.png' className='size-[20px] ml-[180px] mt-[68px]'>
          </img>
        <div className='font-outfit text-[12px] font-bold text-[#8A8AAB]  ml-[10px] mt-[60px]'>
  Cy cinema,<br />23 Azumaki St.
</div>



        </div>
        <div className="flex gap-[10px] mt-[20px] ml-[10px]">
  {/* Selected Time */}
 <div className="w-[80px] h-[40px] rounded-full bg-[#000000] text-[#FFFFFF] text-[16px] font-medium flex items-center justify-center">
  18:00
</div>


  {/* Unselected Times */}
  <div className=" font-outfit w-[80px] h-[40px] rounded-full border-2 border-[#C2C2E2] text-[#0E0E2C] text-[16px] justify-center font-medium flex items-center justify-center">
    21:25
  </div>
  <div className="  font-outfit w-[80px] h-[40px] rounded-full border-2 border-[#C2C2E2] text-[#0E0E2C] text-[16px] justify-center font-medium flex items-center justify-center">
    23:50
  </div>
</div>

      </div>

    </div>
    <div className='w-[320px] h-[287px] bg-[#F5F5FC] rounded-[88px] absolute top-[639px] left-[1310px]'>
<div className="w-[304px] h-[207px] bg-white rounded-[88px] mt-[69px] ml-[8px] bg-[url('/right.png')] bg-cover bg-center bg-no-repeat flex flex-col">
 <div className='mt-[100px] ml-[155px] w-[140px] h-[58px] rounded-[84px] bg-[#FFFFFF] flex flex-row items-center gap-[4px] shadow-md opacity-[80%]'>
        <img src='/Ellipse 1.png' className='size-[30px] ml-[10px]' alt='Back' />
        <span className='font-outfit text-[12px] font-bold text-[#000000] ml-[20px]'>
          Shitoda Shikamru
        </span>

      </div>
  
    <div className='flex flex-row absolute '>
  <div className='ml-[136px] mt-[165px] w-[122px] h-[32px] rounded-[64px] bg-[#FFFFFF] flex flex-row items-center px-4 shadow-md opacity-[80%]'>
        <img src='/Ellipse2.png' className='size-[24px] ml-[10px]' alt='Back' />
        <span className='font-outfit text-[14px] font-bold text-[#000000] ml-[20px]'>
      James Carl
        </span>
      </div>
      </div>
</div>

    </div>
    </>
  );
}
