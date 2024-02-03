import Store from '../stateManagement/Store'
import NavBar from '../components/navbar'
export default function Home() {
  return (
   <Store>
    <NavBar/>
    <div>Hello DeepL</div>
   </Store>

  )
}
