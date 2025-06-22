import React from 'react';

export default function RightComp() {
  return (
    <div className='w-[400px] h-[600px] bg-[#F5F5FC] rounded-[110px] absolute left-[1317px]'>
      <div
        className='w-[380px] h-[580px] bg-[#000000] absolute top-[10px] left-[10px] rounded-[110px]'
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
      </div>
    </div>
  );
}
