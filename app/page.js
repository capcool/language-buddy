import Image from 'next/image'
import styles from './page.module.css'
import Dictaphone from './components/speak'
import Speechtext from './components/getText'

export default function Home() {
  return (
   <>
   <div>Hello World</div>
   <Dictaphone/>
   <Speechtext/>
   </>
  )
}
