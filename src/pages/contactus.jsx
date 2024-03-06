import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { blue } from '@mui/material/colors'
import { CenterFocusStrong } from '@mui/icons-material'

export default function Contactus() {
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Contact Us - IEEE</title>
        </Head>
        <Header />
        <section className="body-font text-gray-600" style={{justifyContent:"center"}}>
          <div className="container mx-auto flex flex-col px-5 py-12">
            <div className="mx-auto lg:w-4/6">
              <div className="flex justify-center">
                {/* <img
                  alt="content"
                  className="rounded-lg object-cover p-2 shadow-md"
                  src="https://site.ieee.org/sb-ritb/files/2018/05/cropped-transparent-bg.png"
                /> */}
              </div>

              <h1 style={{ fontSize: '2.5em', fontFamily: 'Josefin Sans',color:'#272343', fontWeight: 'bold',textAlign:'center' }}>CONTACT US</h1>
              <hr />
              <div className="mt-10 flex flex-col sm:flex-row" style={{justifyContent:'center'}}>
                <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                  {/* <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                    <Image
                      alt="team"
                      className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src="https://site.ieee.org/sb-ritb/files/2020/07/KRS-Shobha-K.R-IEEE-RIT-B-500x480.jpg"
                      height={78}
                      width={78}
                    />
                  </div> */}
                 

                 
                  <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#e3f6f5',borderRadius:'20px'}}>
                    {/* <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                      Dr. Megha. P. Arakeri
                    </h2>
                    <p className="text-base">Chair, IEEE CIS, Bangalore Section</p> */}


                    <div className="mt-2 mb-4 h-1 w-12 rounded bg-sky-600"></div>
                    <p className="text-gray-750 flex items-center text-lg font-large">
                      IEEE-RIT Ramaiah Institute of Technology MSR Nagar, MSRIT
                      Post, Mathikere Bangalore-560054
                  </p>
                    <p className="text-dark mt-5 flex items-center text-sm font-medium">
                      <span className="text-primary mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <span>
                        <a href="mailto:ieeeritb@gmail.com">
                          ieeeritb@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
               
                {/* <div className="mt-4 mb-10 rounded-xl border-t border-gray-200 bg-slate-100 p-4 text-justify sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                  <p className="mb-4 text-base  ">
                    <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in
                    November 2003. The branch endeavors to enrich the students
                    of RIT with the latest developments in various fields of
                    technology and research and ensure that their competency
                    levels meet all the required standards in today’s industry
                    and participation in a kaleidoscope of technical events
                    throughout the year, implicitly emphasizing on
                    extra-curricular activities in a student’s life.
                  </p>
                </div> */}
              </div>

            </div>
          </div>

          <style>
      {`
      @keyframes easeInOut {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
      `}
    </style>

          <div  style={{display:'flex' , justifyContent:'space-evenly', marginBottom:'30px',}}>
             <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                 <iframe src="https://lottie.host/?file=23ecd9fa-1719-42c7-bcef-b021c5e3c509/eHhdi9dHx9.json" style={{ border: 'none', height: '100px' }}></iframe>
                 <p >Write us on</p>
                 <a  href="mailto:ieeeritb@gmail.com">ieeeritb@gmail.com</a>
             </div>
             <div  style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                 <iframe src="https://lottie.host/?file=94896b6f-5561-481d-8924-ed335c23637b/eAdCe077z7.json" style={{ border: 'none', height: '100px' }}></iframe>
                 <p >Reach us on</p>
                 <a  href="tel:+918123846788" >(+91) 81238 46788</a>
             </div>
             <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                 <iframe src="https://lottie.host/?file=1341d09a-b282-4dc2-8685-e26dc2784943/Nu0yAutyXc.json" style={{ border: 'none', height: '100px' }}></iframe>
                 <p >Follow us on insta</p>
                 <a href="https://www.instagram.com/ieeeritb" >@ieeeritb</a>
             </div>

         </div>

        </section>
        <div style={{ width: '100%', borderRadius: '10px' }}>
                   <iframe
                     width="100%"
                     height="400"
                     frameborder="0"
                     scrolling="no"
                     marginheight="0"
                     marginwidth="0"
                     src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Ramaiah%20Institute%20of%20Technology+(IEEE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                     style={{ borderRadius: '10px' }}
                   ></iframe>
                 </div>
        <Footer />
      </div>
    </>
  )
}
