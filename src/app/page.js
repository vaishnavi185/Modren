import Main from './Components/Main';
import NavBar from './Components/NavBar';


export default function Home() {
  return (
    <div className="flex ...">
  <div className="size-14 flex-none ..."><NavBar></NavBar></div>
  <div className="size-14 grow ...">
    <Main></Main>
  </div>
  <div className="size-14 flex-none ...">03</div>
</div>
  );
}
