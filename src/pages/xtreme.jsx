import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE XTREME | IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE XTREME- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE XTREME
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We organize coding competitions, hackathons and webinars on
                various technical aspects to encourage students interested in
                programming in general.
                <br></br>
                We also manage the global 24-hours coding challenge IEEE Xtreme
                in our college which helps in improving in their problem solving
                and competitive programming skills.
              </p>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Upcoming events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. HackSprint:
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this workshop about?</b>
                  <br></br>
                  <br></br>
                  We are planning to conduct a coding contest based purely on
                  Data structures and Mathematical intuitions-based questions.
                  This contest offers students or enthusiasts the opportunity to
                  measure their capabilities and compete with other programmers
                  in our college. Winners will be rewarded.
                </p>
              </div>

              <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Member
                  name="Deepak Kumar Singh"
                  designation="Head"
                  link="https://www.linkedin.com/in/deepak-singh-950140212/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Deepak_Singh_1MS21AD021.jpg"
                ></Member>

                <Member
                  name="Shubham Anand"
                  designation="Co-Head"
                  link="https://www.linkedin.com/in/shubham-anand-507785226/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Shubham%20anand%20.jpg"
                ></Member>
                
                <Member
                  name="Prashanth Hossale"
                  designation="Member"
                  link="https://www.linkedin.com/in/prashanth-hossale-853a25230/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Prashanth%20Hossale_1MS21AD037.jpg"
                ></Member>
                

                <Member
                  name="Aditya S.K."
                  designation="Member"
                  link="https://www.linkedin.com/in/adityask1203/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Aditya%20SK_1MS22CY003.jpg"
                ></Member>

                <Member
                  name="Drupitha Chandrashekhar"
                  designation="Member"
                  link="https://www.linkedin.com/in/drupitha-chandrashekar-47511a25b/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Drupitha_Chandrashekar_1MS22CI023.jpg"
                ></Member>
                
                <Member
                  name="Pranav Sreeharsha"
                  designation="Member"
                  link="https://www.linkedin.com/in/pranav-sreeharsha-672034280/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/PranavSreeharsha_1MS23IS117-T.jpg"
                ></Member>
                
                <Member
                  name="Risshab Srinivas Ramesh"
                  designation="Member"
                  link="https://www.linkedin.com/in/risshab-srinivas-ramesh-7b614a290/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/RisshabSrinivasRamesh_1MS23CS013-T.jpeg"
                ></Member>
                
                <Member
                  name="Sumit Bubanale"
                  designation="Member"
                  link="https://www.linkedin.com/in/sumit-bubanale-10a07b25b/"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/xtreme/Sumit_Bubanale_1MS22CI067_1%20(1).jpg"
                ></Member>
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
      </main >
      <Footer />
    </>
  )
}
