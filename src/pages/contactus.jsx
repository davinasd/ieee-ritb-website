import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

export default function ContactUs() {
  return (
    <section className="bg-100 text-gray-800 pt-20">
      <div className="neumorphismbg">
        <Head>
          <title>Contact Us | IEEE</title>
        </Head>
        <Header />
        <section className="bg-blue-50" style={{ justifyContent: "center" }}>
          <div className="mt-2 container mx-auto flex flex-col px-5 py-12">
            <div className="mx-auto lg:w-4/6">
              <h1 className="mt-8 flex justify-center font-display text-4xl font-medium text-slate-800">Contact Us</h1>
              <hr className="my-8" />
              <div className="flex flex-col md:flex-row justify-center items-center">
                {/* Address Card */}
                <div className="w-full md:w-2/3 mb-8 md:mb-0 mx-4 md:mx-8">
                  <div className="text-center sm:text-center bg-gray-100 p-6 rounded-lg">
                    <p className="text-lg font-bold mb-2">IEEE RIT</p>
                    <p className="text-base mb-2">Ramaiah Institute Of Technology</p>
                    <p className="text-sm mb-2">MSR Nagar, MSRIT Post, Mathikere</p>
                    <p className="text-sm mb-2">Bangalore-560054</p>
                    <p className="text-base mt-4 font-medium">
                      <span className="text-primary mr-3" style={{ verticalAlign: 'middle' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                          style={{ display: 'inline-block' }}
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <a href="mailto:ieeeritb@gmail.com" className="text-primary">ieeeritb@gmail.com</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container bg-gradient-to-b from-blue-50 to-white mx-auto flex flex-col px-5 py-12">
          <div className="mx-auto lg:w-4/6">
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Google Map */}
              <div className="w-full md:w-2/3 mx-4 md:mx-8 mb-8 md:mb-0">
                <div style={{ width: '100%', borderRadius: '10px' }}>
                  <iframe
                    width="100%"
                    height="300"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Ramaiah%20Institute%20of%20Technology+(IEEE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ borderRadius: '10px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center my-16 md:my-12">
          <div className="flex flex-col items-center md:mx-4 ">
            <iframe src="https://lottie.host/?file=23ecd9fa-1719-42c7-bcef-b021c5e3c509/eHhdi9dHx9.json" style={{ border: 'none', height: '100px' }}></iframe>
            <p className="text-center lg:text-left font-semibold mt-4">Write to us on</p>
            <a className="text-center lg:text-left text-primary" href="mailto:ieeeritb@gmail.com">ieeeritb@gmail.com</a>
          </div>
          <div className="flex flex-col items-center md:mx-4 mt-5">
            <iframe src="https://lottie.host/?file=94896b6f-5561-481d-8924-ed335c23637b/eAdCe077z7.json" style={{ border: 'none', height: '80px' }}></iframe>
            <p className="text-center lg:text-left font-semibold mt-4">Reach us on</p>
            <a className="text-center lg:text-left text-primary" href="tel:+918123846788">(+91) 81238 46788</a>
          </div>
          <div className="flex flex-col items-center md:mx-4 mt-[-1rem]">
            <iframe src="https://lottie.host/?file=1341d09a-b282-4dc2-8685-e26dc2784943/Nu0yAutyXc.json" style={{ border: 'none', height: '120px' }}></iframe>
            <p className="text-center lg:text-left font-semibold mt-4">Follow us on Instagram</p>
            <a className="text-center lg:text-left text-primary" href="https://www.instagram.com/ieeeritb">@ieeeritb</a>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}
