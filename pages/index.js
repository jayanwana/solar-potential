// import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home(props) {

  return (
    <div>
        <Nav/>
        <main>
          <div className="py-6 md:py-12">
              <div className="container px-4 mx-auto">

                  <div className="text-center max-w-2xl mx-auto">
                      <h1 className="text-3xl md:text-4xl font-medium font-main mb-2">Experience the potential of solar.</h1>

                  </div>
                  <div className="mt-4 mx-auto max-w-5xl pt-6">
                      <img src="house solar 2solar.jpg" alt="mockup" className="d-block max-w-full"/>
                  </div>
                  <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
                  <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                    <a href='/map'>
                          <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                          <h5 className="text-xl font-medium font-main uppercase mb-4">Maps</h5>
                          <div className='w-32 h-32 mx-auto'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-map-marked-alt fa-w-18 fa-7x"><path fill="#65A346" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z" ></path></svg>
                          </div>
                          <p className="text-gray-600 py-4">Use our interactive map to find a graphic representation of the solar potential for your area</p>
                    </a>
                    </div>
                      <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <a href='/table'>
                          <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                          <h5 className="text-xl font-medium font-main uppercase mb-4">Tables</h5>
                          <div className='w-32 h-32 mx-auto'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-table fa-w-16 fa-7x"><path fill="#FC8A37" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path></svg>
                          </div>
                          <p className="text-gray-600 py-4">Search the open data bristol solar potential dataset for detailed solar information</p>
                        </a>
                      </div>

                      <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                        <a href="/panels">
                          <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                          <h5 className="text-xl font-medium font-main uppercase mb-4">Panels</h5>
                          <div className='w-32 h-32 mx-auto'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="solar-panel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-solar-panel fa-w-20 fa-7x"><path fill="#2F3970" d="M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z"></path></svg>
                            </div>
                          <p className="text-gray-600 py-4">Get the latest information about solar technology and contractors in bristol</p>
                        </a>
                      </div>

                  </div>

              </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}
