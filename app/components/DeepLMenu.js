import Link from "next/link";
export default function DeepLMenu(){
  return(
    <ul className="flex m-4">
  <li className="p-2">
    <Link className="text-white bg-green-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/deepL">Text Translate</Link>
  </li>
  <li className="p-2">
    <Link className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/deepL/fileUpload">File Translate</Link>
  </li>
</ul>
)
}