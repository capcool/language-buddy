import Image from 'next/image'
import styles from './page.module.css'
import Dictaphone from './components/speak'
import Speechtext from './components/getText'
import Store from './stateManagement/Store'
import MarkdownTest from './components/markdownTest'
export default function Home() {
  return (
   <Store>
   <div>Hello World</div>
   <Dictaphone/>
   <Speechtext/>
   </Store>

  )
}
