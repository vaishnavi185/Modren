import Main from './Components/Main';
import NavBar from './Components/NavBar';
import RightComp from './Components/RightComp';


export default function Home() {
  return (
    <div className="flex mt-[0px]">
  <div className="size-14 flex-none ..."><NavBar></NavBar></div>
  <div className="size-14 grow ...">
    <Main></Main>
  </div>
  <div className="size-14 flex-none ...">
    <RightComp></RightComp>
  </div>
</div>
  );
}
