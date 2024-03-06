import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IEEE DOCUMENTATION || IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE DOCUMENTATION- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate bg-blue-50 px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE DOCUMENTATION
              </h1>
              <div>
                <p className="mt-10 text-lg tracking-tight text-gray-900 lg:text-xl">
                  IEEE RITB documentation team is a group of dedicated people
                  who attend all the events conducted by the club and write a
                  report of the same. We as a group help in keeping an account
                  of whatever has happened in each event including some
                  photographs of the same. All the details about the winners,
                  speakers, rules etc are summarised accordingly for all the
                  events ensuring appropriate contexts.
                </p>
              </div>

              <p className="my-10 text-lg font-bold tracking-tight text-gray-900 lg:text-3xl">
                Members
              </p>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Member
        name="Tanisha Saxena"
        designation="Member"
        link="https://www.linkedin.com/in/tanisha-saxena-978237277/"
        image="https://drive.google.com/file/d/1yYiske2lbu0RWezr8pCosebj2bUxy2vV/view?usp=drive_link"
    ></Member>

    <Member
        name="Abhinav Singh"
        designation="Member"
        link="https://www.linkedin.com/in/abhinav-singh-37547a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        image="https://drive.google.com/file/d/1FiivQXF62_9HQ-AFf_DHSTxp7ZDL_X7n/view?usp=drive_link  "
    ></Member>

    <Member
        name="Nibha Dongre"
        designation="Member"
        link="https://www.linkedin.com/in/nibha-dongre/"
        image="https://drive.google.com/file/d/1uV6RdweoB5zLqEGimJRhSDGs_ly4b8Np/view?usp=drive_link"
    ></Member>

    <Member
        name="Akshat Ujjain"
        designation="Member"
        link="https://www.linkedin.com/in/akshat-ujjain-105263261"
        image="https://drive.google.com/file/d/1aKkLN1oK9_BziF66fAerIFMJmoFzHQ4m/view?usp=drive_link"
    ></Member>

    <Member
        name="Rupam Sinha Roy"
        designation="Member"
        link="https://www.linkedin.com/in/rupam-roy-355172291?trk=contact-info"
        image="https://drive.google.com/file/d/1o6Zp6ZYd1t9skNvheOtvlbg0M0lUF7Ys/view?usp=drive_link"
    ></Member>

    <Member
        name="Yash Y"
        designation="Member"
        link="https://www.linkedin.com/in/yash-yalamalli-819889223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        image="https://drive.google.com/file/d/1ej0WuyOe_ttsi3JjPKyS9vOT_CmwwVA0/view?usp=drive_link"
    ></Member>

    <Member
        name="Dhrithi Ganesh"
        designation="Member"
        link="https://www.linkedin.com/in/dhrithi-ganesh-9a1745256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        image="https://drive.google.com/file/d/1SCOkv0e8TW3-KhG8GlqSg1LenHJMQU2e/view?usp=drive_link"
    ></Member>

    <Member
        name="Shaikh Furqan"
        designation="Member"
        link="https://www.linkedin.com/in/shaikh-furqan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        image="https://drive.google.com/file/d/1XGdpbJzpK6FwuP5vKJDUX-Fxbc5Dmlmx/view?usp=drive_link"
    ></Member>

    <Member
        name="Sachin R P"
        designation="Member"
        link="https://www.linkedin.com/in/sachin-r-p-5233472b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        image="https://drive.google.com/file/d/1SuMg4QCpyUcCCsZak6Q9KqTidmVzpZQd/view?usp=drive_link"
    ></Member>

    <Member
        name="Shree Lakshmi S Shekar"
        designation="Member"
        link="https://www.linkedin.com/in/shree-lakshmi-s-shekar-760738266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        image="https://drive.google.com/file/d/1CHEJI-qrA8GRAfuMBsKiD-i_6nqylfg7/view?usp=drive_link"
    ></Member>

    <Member
        name="Arihant Jain"
        designation="Member"
        link="https://www.linkedin.com/in/arihj/"
        image="https://drive.google.com/file/d/1L-Nf3P3sh6eb48IjPny99eTprf1MED6E/view?usp=drive_link"
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
      </main>
      <Footer />
    </>
  )
}
