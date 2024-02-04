import './globals.css'
import Dictaphone from './components/speak'
import Speechtext from './components/getText'
import Store from './stateManagement/Store'
import NavBar from './components/navbar'
import CommonMessage from './components/CommonMessage';
export default function Home() {
  return (
   <Store>
    <NavBar/>
    <div className='pl-4' >
   <CommonMessage/>
   <Dictaphone/>
   <Speechtext/>
   </div>
   </Store>

  )
}
