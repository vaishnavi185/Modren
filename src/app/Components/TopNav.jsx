export default function TopNav() {
  return (
    <div className="h-[70px] bg-[#F5F5FC] flex items-center justify-center rounded-[50px] ml-[540px] mt-[20px] w-[270px] flex-row gap-[20px]">
      
      {/* Ticket Section */}
      <div className="flex flex-row items-center gap-[6px]">
        <span className="text-[#8A8AAB] text-[18px] mt-[3px]">32</span>
        <img src="iCon/ticket.png" className="size-[30px]" />
      </div>

      {/* Vertical Dashed Line */}
      <div className=" h-[15px] border-r-2 border-dashed border-[#8A8AAB] "></div>

      {/* Wallet Section */}
      <div className="flex flex-row items-center gap-[6px]">
        <span className="text-[#8A8AAB] text-[18px] mt-[3px]">65</span>
        <img src="iCon/wallet.png" className="size-[30px]" />
      </div>

      {/* Vertical Dashed Line */}
      <div className=" h-[15px] border-r-2 border-dashed border-[#8A8AAB]"></div>

      {/* Bell Icon */}
      <img src="iCon/Bell.png" className="size-[35px]" />
    </div>
  );
}
