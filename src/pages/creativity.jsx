import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
const members = [
  {
    name: 'N Sudharshan Reddy',
    designation: 'Head',
    link: 'https://www.linkedin.com/in/n-sudharshan-reddy/',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/N%20Sudharshan%20Reddy_1MS21CI033.jpg?raw=true',
  },
  {
    name: 'Nirmitha S Reddy',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/nirmitha-s-reddy-a5714a234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/NirmithaSReddy_1MS21CV063.png?raw=true',
  },
  {
    name: 'Chinmay B Gowda',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/chinmay-b-gowda-aa73ba279/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Chinmay%20b%20gowda%201MS21EI066.jpg?raw=true',
  },
  {
    name: 'Khushi Rautela ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/khushi-rautela-b0b773231/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/KhushiRautela%20_1MS21CY022.jpg?raw=true',
  },
  {
    name: 'Deekshita M',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/deekshitha-m-964413266/?trk=contact-info',
    image: 'https://github.com/aarthipv/profileimages/blob/main/creativity/Deekshitha%20M_1MS22EC038_.jpg?raw=true',
    
   
  },
  {
    name: 'Dhanush Kumbar',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/dhanush-kumbar-944991294/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Dhanush%20Kumbar_1MS22BT013.jpg?raw=true',
  },
  {
    name: 'Sowmya B H ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sowmya-b-h-7a58662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Sowmya%20B%20H%20_%201MS22MD040.png?raw=true',
  },
  {
    name: 'Raima Pal',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/raima-paul-6708662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Raima%20Pal%20_1MS23CV065-T.jpg?raw=true',
  },
  {
    name: 'Sushmita Mathad ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sushmita-mathad-9780b9285/',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Sushmita.N.Mathad_1MS22ET055.jpg?raw=true',
  },
  {
    name: 'Sai Mayur',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sai-mayur-1288662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Sai%20Mayur_1MS23ME081.jpg?raw=true',
  },
  {
    name: 'A Nandini ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/a-nandini-a6457b253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/A.NANDINI%201MS22CS002.jpg?raw=true',
  },
  {
    name: 'Nandini Poojari',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/nandini-poojari-7a06942a7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Nandini%20Poojari%201MS22EE031.jpg?raw=true',
  },
  {
    name: 'Ankita M Jaka ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/dhanrajrateria',//not uploaded
    image:
      'https://drive.google.com/uc?id=1P__rOfY4ik__wmjTU6_p9Wj587B9gJMr&export=view',//not uploaded
  },
  {
    name: 'Zayaan Hussain',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/zayaan-hussain-21a9472b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/Zayaan%20Hussain%20_1MS22BT063.jpg?raw=true',
  },
  {
    name: 'T N Yogajay',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/yogajay-t-n-7828662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/T%20N%20YOGAJAY%20_1MS22EC135.jpg?raw=true',
  },
  {
    name: 'M R Mohan Reddy ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/mohan-reddy-24a0622b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/M%20R%20Mohan%20Reddy%201MS22EC069.jpg?raw=true',
  },
  {
    name: 'Sahana Bhagavant Savantanavar',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sahana-savantanavar-162b20259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://drive.google.com/uc?id=1P__rOfY4ik__wmjTU6_p9Wj587B9gJMr&export=view',//not uploaded
  },
  {
    name: 'Sachin R P ',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/sachin-r-p-5233472b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/SACHIN%20R%20P%20_1MS22BT039_1.jpg?raw=true',
  },
  {
    name: 'Rupam Sinha Roy',
    designation: 'Member',
    link: 'https://www.linkedin.com/in/rupam-roy-355172291/?trk=contact-info',
    image:
      'https://github.com/aarthipv/profileimages/blob/main/creativity/RUPAM%20SINHA%20ROY_1MS22BT036.jpg?raw=true',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE CREATIVITY || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE CREATIVITY- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-blue-50">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE CREATIVITY
              </h1>
              <div>
                <h1 className="mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 tracking-tight">
                  We facilitate “unmistakably IEEE” quality creative work while
                  saving the organisation time and money.
                </h1>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member, index) => (
                  <Member
                    name={member.name}
                    designation={member.designation}
                    link={member.link}
                    image={member.image}
                  ></Member>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
