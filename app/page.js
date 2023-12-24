import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'
import Dictaphone from './components/speak'
import Speechtext from './components/getText'
import Store from './stateManagement/Store'
import MarkdownTest from './components/markdownTest'
export default function Home() {
  return (
   <Store>
    <div className='pl-4' >
   <div className='text-2xl italic hover:not-italic'>AI Buddy</div>
   <Dictaphone/>
   <Speechtext/>
   </div>
   </Store>

  )
}
