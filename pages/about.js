import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About(){
  return(
    <div>
        <Nav/>
        <main>
          <div className="py-6 md:py-12">
              <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-medium font-main mb-2">About Us</h1>
                </div>
                <div style={{backgroundImage: "url('solar-energy-companies.jpg')"}} className="mt-4 mx-auto max-w-6xl pt-6 flex justify-center h-64 bg-no-repeat bg-cover bg-right-top">
                    {/*<img src="solar-energy-companies.jpg" alt="mockup" className="d-block max-w-full h-64"/>*/}
                </div>
                <div className="mt-4 text-center pt-16 px-16 text-lg">
                  <p>
                    The web application uses data from the open data Bristol website to show the solar potential for different locations in Bristol. Users of the web app can use this information to determine the suitability of their house location for the installation of solar panels. This information could inspire potential users to go green and significantly cut down on electricity bill and potentially make money from selling excess energy generated back to the national energy grid. The Websites cited as references also served as design inspirations for the reference designs include in this mood board. The web app would work in such a way that users could enter their postcode in an interactive map which then searches the open data Bristol website for the solar potential of that particular area with the degree of solar potential shown via a colour coded legend (Suitability count) which ranges from excellently suitable to others.
                  </p>
                </div>
              </div>
            </div>
          </main>
          <Footer/>
        </div>

  )
}
