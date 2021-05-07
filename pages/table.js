import Nav from '../components/nav'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import {useState} from 'react'
// import BeatLoader from 'react-spinners/BeatLoader'
import { css } from "@emotion/react";

export default function Map() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [pos, setPos] = useState('')
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`
  const search = () => {
    console.log(query);
    if (query) {
      setLoading(true)
      fetch(`http://api.postcodes.io/postcodes/${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.status === 200) {
          let p = `${data.result.latitude},${data.result.longitude}`
          console.log(p);
          setPos(p)
        }
        else {
          alert(data.error)
        }
      }).catch(e => console.log(e))
      setLoading(false)
    }
  }
  return(
    <div className='h-screen'>
      <Nav/>
      <main className='h-2/3'>
        <div className='h-24 px-8 flex items-between border-b'>
          <div className='container px-4 mx-auto md:flex md:items-center justify-between'>
            <h1 className='text-3xl font-bold font-main'>Bristol Solar Potential Tables</h1>
            <div className='flex items-center space-x-2'>
              <input className='border-2 rounded px-2' placeholder='Enter Postcode' type='text' value={query} onChange={e => setQuery(e.target.value)}/>
              <i onClick={search} className="fas fa-search cursor-pointer"></i>
            </div>
          </div>

        </div>
        <div className='container w-full px-4 mx-auto md:flex h-full border-b'>
          <div className='flex-none flex flex-col border-r w-64 items-center py-8 space-y-8'>
            <a className={`w-32 rounded h-10 text-center ${router.asPath === '/map'? 'bg-blue text-white' : 'bg-gray-300'}  flex items-center justify-center`} href='/map'>Map</a>
            <a className={`w-32 rounded h-10 text-center ${router.asPath === '/table'? 'bg-blue text-white' : 'bg-gray-300'}  flex items-center justify-center`} href='/table'>Table</a>
          </div>
          <div className='flex-grow '>
          <iframe src={`https://opendata.bristol.gov.uk/explore/embed/dataset/solar-potential/table/?location=11,${pos ? pos:'51.46735,-2.6141'}&basemap=jawg.streets&static=true&datasetcard=true`} width="900" height="500" frameBorder="0"></iframe>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
