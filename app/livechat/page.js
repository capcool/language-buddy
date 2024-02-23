import Store from '../stateManagement/Store';
import '../globals.css';
import NavBar from '../components/navbar';
import CommonMessage from '../components/CommonMessage';
import ChatComponent from '../components/ablyChat'
import ChatLanguage from '../components/chatLanguage'


export default function Home() {
  return (
   <Store>
    <NavBar/>
    <div className='pl-4' >
    <CommonMessage/>
    <ChatLanguage/>
    <ChatComponent/>
    </div>
   </Store>

  )
}
