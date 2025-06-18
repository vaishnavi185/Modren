import React from 'react'
import TopNav from './TopNav';

export default function Main() {
  return (
    <>
      <div className="bg-[url('/BG.png')] bg-no-repeat bg-cover h-screen 
        bg-[right_20px_top_5px] 
        rounded-[90px] rounded-bl-[790px] rounded-tl-[600px]
      ">
        <TopNav></TopNav>
        {/* Add your content here */}
      </div>
    </>
  );
}
