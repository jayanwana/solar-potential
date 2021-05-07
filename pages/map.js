import Nav from '../components/nav'
import Footer from '../components/footer'
import { useRouter } from 'next/router'

export default function Map() {
  const router = useRouter()
  return(
    <div className='h-screen'>
      <Nav/>
      <main className='h-2/3'>
        <div className='h-24 px-8 flex items-center border-b'>
          <div className='container px-4 mx-auto md:flex md:items-center'>
            <h1 className='text-xl font-bold'>Bristol Solar Potential Map</h1>
          </div>
        </div>
        <div className='container w-full px-4 mx-auto md:flex h-full border-b'>
          <div className='flex-none flex flex-col border-r w-64 items-center py-8 space-y-8'>
            <a className={`w-32 rounded h-10 text-center ${router.asPath === '/map'? 'bg-blue text-white' : 'bg-gray-300'}  flex items-center justify-center`} href='/map'>Map</a>
            <a className={`w-32 rounded h-10 text-center ${router.asPath === '/table'? 'bg-blue text-white' : 'bg-gray-300'}  flex items-center justify-center`} href='/table'>Table</a>
          </div>
          <div className='flex-grow flex justify-center'>
          <iframe src="https://opendata.bristol.gov.uk/explore/embed/dataset/solar-potential/custom/?location=11,51.46735,-2.6141&basemap=jawg.streets&static=false&datasetcard=false" width="1200" height="1050" frameBorder="0"></iframe>
          </div>
        </div>
      </main>
      <div  className='absolute bottom-0 w-full'>
      <Footer/>
      </div>
    </div>
  )
}
