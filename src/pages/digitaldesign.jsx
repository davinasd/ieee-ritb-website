import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>
          IEEE Digital Design | IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE Digital Design- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE Digital Design
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                IEEE Digital Design Team is a creative group within the IEEE
                club dedicated to designing eye-catching visuals for events and
                various design projects.
                <br></br>
                We are a team of talented designers who combine our passion for
                creativity with technological expertise. Our focus is on
                producing impactful designs that effectively communicate
                messages and engage audiences.
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. Brand It!
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  "Brand It" is an online event where each team will be given an
                  imaginary brand and must build a brand identity and design all
                  assets for the brand. Design assets like Logos, Favicons,
                  Colour Palette, Typefaces and so on.
                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Upcoming Events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  NFTify:
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  This event is divided into two phases - a design contest, and
                  a workshop. Participants are required to build a piece of
                  design from scratch which will then be turned into an NFT. The
                  design phase will be followed by a workshop where participants
                  will be taken through the process of turning any piece of art
                  into an NFT - starting with setting up their Cryptocurrency
                  wallets and making an account. Participants will learn how to
                  mint their first NFT and upload it on the market for sale. The
                  best designs will be rewarded.
                </p>
              </div>

              <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Member name="Abhishek K."
                  designation="Head"
                  link="https://www.linkedin.com/in/abhishek-kaushik-0a6a16243/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Abhishek%20.JPG">
                  
                </Member>

                <Member name="Janis Lobo"
                  designation="Vice Head"
                  link="https://www.linkedin.com/in/janis-lobo-b61409224/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Janis%20Lobo_1MS22MD014.jpeg">
                  
                </Member>

                <Member name="Srushti S. Shankar"
                  designation="Member"
                  link="https://www.linkedin.com/in/srushti-shivshankar-7049472b2/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Srushti%20S%20Shankar_1MS22IS137.JPG">
                </Member>

                <Member name="Shriya A.N."
                  designation="Member"
                  link="https://www.linkedin.com/in/shriya-a-n-07384b253/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Shriya%20A.N_1MS22BT047.jpg">
                  
                </Member>

                <Member name="Nibha S. Dongre"
                  designation="Member"
                  link="https://www.linkedin.com/in/nibha-dongre/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/nibhasdongre_1MS22AI040.jpg">
                </Member>

                <Member name="Ankit U. Patil"
                  designation="Member"
                  link="https://www.linkedin.com/in/ankit-patil-91437616a/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Ankit%20U%20Patil%20-%201MS21AD011.jpeg">
                </Member>

                <Member name="Jemima Jeffy"
                  designation="Member"
                  link="https://www.linkedin.com/in/jemima-jeffy/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Jemima%20Jeffy_1MS22AI019.jpeg">
                  
                </Member>

                <Member name="Cynthia Antony J."
                  designation="Member"
                  link="https://www.linkedin.com/in/cynthia-antony-j-518ab1260/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/CYNTHIA%20ANTONY_1MS22CY019.jpeg">
                </Member>

                <Member name="Ojasvi Poonia"
                  designation="Member"
                  link="https://www.linkedin.com/in/ojasvi-poonia-9754a3292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Ojasvi%20Poonia_1MS23CS082-T.jpeg">
                </Member>

                <Member name="Kanishk Singh"
                  designation="Member"
                  link="https://www.linkedin.com/in/kanishk-singh-1a517a2a9/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/Kanishk%20Singh_1MS22CH021.jpg">
                </Member>

                <Member name="Mithira V."
                  designation="Member"
                  link="https://www.linkedin.com/in/mithira-grace-v-a08995281/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/digital%20design/MITHIRA%20V(1MS22BT027).jpg">
                </Member>
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
    </section>
  )
}
