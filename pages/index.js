// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home(props) {
  const router = useRouter()
  console.log(router.asPath);
  return (
    <div className='lg:container mx-auto'>
        <nav className='bg-blue'>
        <div className='px-8 flex justify-between items-center h-16'>
          <a className='text-white' href='#'>HOME</a>
          <div className='flex justify-around items-center h-4 divide-white divide-x'>
            <a className='text-white hover:bg-black px-3 transition-colors duration-300' href='#'>ABOUT</a>
            <a className='text-white hover:bg-black px-3 transition-colors duration-300' href='#'>CONTACT US</a>
            <a className='text-white hover:bg-black px-3 transition-colors duration-300' href='#'>SOLAR PANELS</a>
          </div>
        </div>
        </nav>
        <main>
          <div className='h-24 px-8 flex items-center border-b'>
            <h1 className='text-xl font-bold'>Bristol Solar Potential</h1>
          </div>
          <div className='flex py-16 px-auto justify-center space-x-16 items-center'>
            <div className='bg-gray-300 rounded flex flex-col justify-between items-center px-4 py-4'>
              <img className='h-36 w-48' src='solar bristol.jpeg'/>
              <div className='w-48 pt-8'>
                <p>
                  Use our interactive map to find a graphic representation of the solar potential for your area
                </p>
              </div>
            </div>
            <div className=' rounded flex flex-col justify-between items-center px-4 py-4'>
              <img className='h-36 w-48' src='solar bristol.jpeg'/>
              <div className='w-48 pt-8'>
                <p>
                  Use our interactive map to find a graphic representation of the solar potential for your area
                </p>
              </div>
            </div>
            <div className=' rounded flex flex-col justify-between items-center px-4 py-4'>
              <img className='h-36 w-48' src='solar bristol.jpeg'/>
              <div className='w-48 pt-8'>
                <p>
                  Use our interactive map to find a graphic representation of the solar potential for your area
                </p>
              </div>
            </div>

          </div>
        </main>
        <footer></footer>
    </div>
  )
}
