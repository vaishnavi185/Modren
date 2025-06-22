import Container from "./Container";
import RightComp from "./RightComp";
import TopNav from "./TopNav";
import Topp from "./Topp";

export default function Main() {
  return (
    <div className="relative w-[1200px] h-[900px] md:w-[400px] md:h-[400px] overflow-hidden ml-[120px]">
      
      {/* Image with polygon clip-path */}
      <img
        src="BG.png"
        alt="Styled character"
        className="rounded-[100px] absolute w-full h-full object-cover transition-all duration-300 ease-in-out [clip-path:polygon(2%_0%,_2%_50%,_20%_64%,_27%_67%,_27%_94%,_98%_95%,_99%_0%,_78%_0%,_68%_12%,_44%_12%,_34.5%_0%)]"
      />



      {/* TopNav on top of the image */}
      <div className="absolute ">
        <TopNav />
      </div>
      <div className="absolute">
<Topp></Topp>
      </div>

      <Container></Container>
    
    </div>
  );
}
