import {useState} from 'react'
import { useRouter } from 'next/router'
// console.log(router.asPath);
export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  return(
    <nav className="bg-blue py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">

            <div className="flex justify-between items-center">
                <a href="/" className="font-bold text-xl text-white">SOLAR POTENTIAL BRISTOL</a>
                <button className="border border-solid border-gray-100 px-3 py-1 rounded text-gray-100 opacity-50 hover:opacity-75 md:hidden" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className={`${open ? 'flex':'hidden'} md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}>
                <a href="/" className={`p-2 lg:px-4 md:mx-2 rounded ${router.asPath == '/' ? 'bg-gray-100 text-blue font-semibold' : 'text-white hover:bg-gray-200 hover:text-blue transition-colors duration-300'}`}>Home</a>
                <a href="#" className={`p-2 lg:px-4 md:mx-2 text-gray-100 rounded ${router.asPath == '/about' ? 'bg-gray-100 text-blue' : 'hover:bg-gray-200 hover:text-blue transition-colors duration-300'}`}>About</a>
                <a href="#" className={`p-2 lg:px-4 md:mx-2 text-gray-100 rounded ${router.asPath == '/contactus' ? 'bg-gray-100 text-blue' : 'hover:bg-gray-200 hover:text-blue transition-colors duration-300'}`}>Contact Us</a>
                <a href="#" className={`p-2 lg:px-4 md:mx-2 text-gray-100 rounded ${router.asPath == '/panels' ? 'bg-gray-100 text-blue' : 'hover:bg-gray-200 hover:text-blue transition-colors duration-300'}`}>Solar Panels</a>
            </div>
        </div>
    </nav>
  )
}
