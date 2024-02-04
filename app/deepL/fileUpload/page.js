import Store from '../../stateManagement/Store';
import '../../globals.css';
import NavBar from '../../components/navbar';
import FileUpload from '../../components/FileUpload';
import DeepLMenu from '../../components/DeepLMenu';
import CommonMessage from '@/app/components/CommonMessage';
import FileUploadCard from '@/app/components/FileUploadCard';
export default function Home() {
  return (
   <Store>
    <NavBar/>
    <DeepLMenu/>
    <div className='pl-4' >
      <CommonMessage/>
    {/* <div>File Upload with DeepL</div> */}
    {/* <FileUpload/> */}
    <FileUploadCard/>
    </div>
   </Store>

  )
}
