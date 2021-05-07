import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Contact() {
  return (<div>
    <Nav/>
    <main>
      <div className="py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="max-w-2xl flex justify-center">
              <img src="solar bristol.jpeg" alt="mockup" className="d-block max-w-full"/>
            </div>
            <div className="max-w-2xl">
              <h1 className="text-center text-2xl md:text-4xl font-medium font-main mb-2">Contact Us</h1>
              <div className="mt-5 md:mt-0 md:max-w-3xl">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                          <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                          <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                          <input type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                          <textarea name="message" rows="5" id="message" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>)
}
