import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'
import Dictaphone from './components/speak'
import Speechtext from './components/getText'
import Store from './stateManagement/Store'
import MarkdownTest from './components/markdownTest'
import NavBar from './components/navbar'
export default function Home() {
  return (
   <Store>
    <NavBar/>
    <div className='pl-4' >
   <h4 className="text-3xl font-extrabold dark:text-white pt-4">
    Language Buddy<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">with the power of Gen AI</small></h4>
   <p className="text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400 p-2">This is an AI integrated language translation solution based on 
   advanced algorithms to translate text or speech from one language to another. It can also provide
   information based on the user inputs</p>
   <Dictaphone/>
   <Speechtext/>
   </div>
   </Store>

  )
}
