export default function BottomNav() {
  return (
    <div className="h-[90px] bg-[#FFFFFF] flex items-center justify-center rounded-[50px] ml-[125px]  w-[250px] flex-row gap-[20px] ">
      
      {/* Ticket Section */}
      <div className="flex flex-col items-center gap-[6px]">
        
        <img src="iCon/heart.png" className="size-[25px]" />
        <span className="text-[#00000] text-[10px] mt-[0px]">32,234</span>
      </div>

      {/* Vertical Dashed Line */}
      <div className=" h-[30px] border-r-1 border-dashed border-[#8A8AAB] "></div>

      {/* Wallet Section */}
      <div className="flex flex-col items-center gap-[6px]">
        
        <img src="iCon/star.png" className="size-[25px]" />
        <span className="text-[#00000] text-[10px] mt-[3px]">9571</span>
      </div>

      {/* Vertical Dashed Line */}
      <div className=" h-[30px] border-r-1 border-dashed border-[#8A8AAB]"></div>

      {/* Bell Icon */}
     <div className="flex flex-col items-center gap-[6px]">
        
        <img src="iCon/frame.png" className="size-[25px]" />
        <span className="text-[#000000] text-[10px] mt-[3px]">2,168</span>
      </div>
    </div>
  );
}
