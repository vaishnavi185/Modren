import React from 'react';

export default function RightComp() {
  return (
    <div className='w-[400px] h-[600px] bg-[#F5F5FC] rounded-[110px] absolute left-[1317px]'>
      <div
        className='w-[380px] h-[580px] bg-[#FFFFFF] absolute top-[10px] left-[10px] rounded-[110px]'
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

          <img src='/iCon/location.png' className='size-[20px] ml-[240px] mt-[68px]'>
          </img>
        <div className='font-outfit text-[14px] font-bold text-[#8A8AAB]  ml-[10px] mt-[60px]'>
  Cy cinema,<br />23 Azumaki St.
</div>



        </div>
        <div className="flex gap-[10px] mt-[20px] ml-[30px]">
  {/* Selected Time */}
 <div className="w-[90px] h-[40px] rounded-full bg-[#000000] text-[#FFFFFF] text-[16px] font-medium flex items-center justify-center">
  18:00
</div>


  {/* Unselected Times */}
  <div className=" font-outfit w-[90px] h-[40px] rounded-full border-2 border-[#C2C2E2] text-[#0E0E2C] text-[16px] justify-center font-medium flex items-center justify-center">
    21:25
  </div>
  <div className="  font-outfit w-[90px] h-[40px] rounded-full border-2 border-[#C2C2E2] text-[#0E0E2C] text-[16px] justify-center font-medium flex items-center justify-center">
    23:50
  </div>
</div>

      </div>
    </div>
  );
}
