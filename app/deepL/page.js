import Store from '../stateManagement/Store';
import '../globals.css';
import NavBar from '../components/navbar';
import DeepLMenu from '../components/DeepLMenu';
import CommonMessage from '../components/CommonMessage';
import Dictaphone from '../components/speak';
import SpeechtextDeepL from '../components/getTextDeepL';
export default function Home() {
  return (
   <Store>
    <NavBar/>
    <DeepLMenu/>
    <div className='pl-4' >
    <CommonMessage/>
    <Dictaphone/>
    <SpeechtextDeepL/>
    </div>
   </Store>

  )
}
