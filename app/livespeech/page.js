import Store from '../stateManagement/Store';
import '../globals.css';
import NavBar from '../components/navbar';
import CommonMessage from '../components/CommonMessage';
import Livespeech from '../components/speak-update'

export default function LiveSpeech() {
  return (
   <Store>
    <NavBar/>
    <div className='pl-4' >
    <CommonMessage/>
    <Livespeech/>
    </div>
   </Store>

  )
}
