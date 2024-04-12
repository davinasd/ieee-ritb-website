import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

import img1 from '@/images/WIE/Picture1.jpg'
import img2 from '@/images/WIE/Picture2.png'
import img3 from '@/images/WIE/Picture3.png'
import img4 from '@/images/WIE/Picture4.png'
import img6 from '@/images/WIE/Picture6.png'
import img7 from '@/images/WIE/Picture7.png'
import img8 from '@/images/WIE/Picture8.png'
import wie1 from '@/images/slider_event_images/wie/wie1.jpg'
import wie2 from '@/images/slider_event_images/wie/wie2.jpg'
import wie3 from '@/images/slider_event_images/wie/wie3.jpg'
import wie4 from '@/images/slider_event_images/wie/wie4.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
  img1,
  img2,
  img3,
  img4,
  img6,
  img7,
  img8,
  wie1,
  wie2,
  wie3,
  wie4,
]

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>IEEE WIE CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE WIE CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-blue-50">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
                IEEE WIE CHAPTER
              </h1>

              <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoHeight={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="lg:h-128 h-96 w-full object-cover"
                      src={image}
                      alt={index}
                      width={1745}
                      height={800}
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div>
                <h1 className="mt-10 text-justify lg:text-lg tracking-tight text-gray-900 text-lg mb-4">
                  IEEE RIT-B Women in Engineering (IEEE RIT-B WIE) is a local
                  chapter of IEEE RIT-B that was established in 2016. Our
                  primary objective is to empower and engage women in the
                  technical field by organizing a variety of webinars,
                  workshops, events, and panel discussions. Through these
                  activities, we strive to enhance their knowledge, showcase
                  their technical skills, and foster their professional growth.
                  At IEEE RIT-B WIE, we are committed to raising awareness about
                  the unique challenges faced by women in the world of
                  technology, as well as in other areas such as health. By
                  addressing these challenges and providing a platform for open
                  discussions, we aim to create a supportive and inclusive
                  environment that encourages women to overcome barriers and
                  succeed in their chosen fields.
                </h1>
                <p className='text-xl font-semibold'>WIE Empowers and Connects through Successful Online Events and Technodium</p>

                <p className='text-lg'><strong>IEEE WIE Technodium 2021:</strong></p>
                <p className='text-lg'>The highlight of WIE's accomplishments in 2021 was the successful conduction of the IEEE WIE Technodium. This three-day event, held in March 2021 under the theme "Leveraging Women Leaders For Managing Paradigm Shifts," provided a platform for both IEEE and non-IEEE members to participate and showcase their talents. Various competitions, including the Bridge Master, Catch the Anomaly, Ideathon, Web Development Hackathon, Scavenge, and the Tech Nerd Quiz, engaged participants in stimulating challenges. The Technodium also featured workshops on "Alice and Bob in Cryptoland" and "Excel and Elevate." A panel discussion and a prize distribution ceremony marked the conclusion of this prestigious event.</p>

                <p className='text-lg'>At WIE, teamwork is of utmost importance. The organization values the opinions and inputs of each team member, ensuring that decisions taken are fruitful and inclusive. Despite the limitations imposed by the pandemic, WIE successfully maintained effective communication through frequent online meetings on platforms like Google Meet. Online messengers facilitated fast and efficient communication among team members. Furthermore, WIE actively promotes social interaction and productive sessions by organizing.</p>
              </div>

              <h1 className="mb-10 mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Smruthi"
                  designation="Member"
                  link="https://www.linkedin.com/in/smruthi-d-sharma-22913b279"
                  image="https://drive.google.com/thumbnail?id=1pffkESGzNWkRh3B6SBuoODMDE4Gii8ys"
                ></Member>
                <Member
                  name="Harini"
                  designation="Member"
                  link="https://www.linkedin.com/in/harini-n-844817263"
                  image="https://drive.google.com/thumbnail?id=1M9KhQD8fJKYjJi_q3yzSc5zxxIu7I9zN"
                ></Member>
                <Member
                  name="Shraddha"
                  designation="Member"
                  link="https://www.linkedin.com/in/shraddha-rao-m"
                  image="https://drive.google.com/thumbnail?id=19th-n5wZDaoqnL5AIG2ceNuYUvZVMcud"
                ></Member>
                <Member
                  name="Aiman"
                  designation="Member"
                  link="https://www.linkedin.com/in/aiman-n-896240279/"
                  image="https://drive.google.com/thumbnail?id=1aKYTCFxPemln-WbJVgApLLo6KEGmSbPz"
                ></Member>
                <Member
                  name="Vaishnavi"
                  designation="Member"
                  link="https://www.linkedin.com/in/vaishnavi-ravi-kumar-624301209"
                  image="https://drive.google.com/thumbnail?id=174zst9F4sdTTv_fA4wVCWs3xbNjjiggX"
                ></Member>
                <Member
                  name="Shreya J"
                  designation="Member"
                  link="https://www.linkedin.com/in/shreya-j-3b6938244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://drive.google.com/thumbnail?id=105SLsxvCkM7voVCqkWRtN9__g4V3OV06"
                ></Member>
                <Member
                  name="Anishka"
                  designation="Member"
                  link="https://www.linkedin.com/in/anishka-avinash-a07839291"
                  image="https://drive.google.com/thumbnail?id=1Cv70_yrpkY--OwaQVMmwzJ2qvCAmWWp5"
                ></Member>
                <Member
                  name="Samhitha"
                  designation="Member"
                  link="https://www.linkedin.com/in/samhitha-jp-467311246"
                  image="https://drive.google.com/thumbnail?id=17srrXK8vpCpwYSEGKOpbSRInUQn71eHb"
                ></Member>
                <Member
                  name="Jayshree"
                  designation="Member"
                  link="https://www.linkedin.com/in/jayshree-vj"
                  image="https://drive.google.com/thumbnail?id=1DHmY1sJ6jbCRrcqjNrlDJTD4JwhD6rwe"
                ></Member>
                <Member
                  name="Lalitha"
                  designation="Member"
                  link="https://www.linkedin.com/in/lalitha-k-c-4447a8281"
                  image="https://drive.google.com/thumbnail?id=1th452M2ebQq5XVGtp19mwmUCzZvpfSNY"
                ></Member>
                <Member
                  name="Trisha N Iyer"
                  designation="Member"
                  link="https://www.linkedin.com/in/trisha-n-iyer-b506192b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://drive.google.com/thumbnail?id=1i3RJ6fe4OXSw7HKD17hCCENL2bzSpa67"
                ></Member>
                <Member
                  name="Aishwarya S"
                  designation="Member"
                  link="https://www.linkedin.com/in/aishwarya-s-73b61b2b2"
                  image="https://drive.google.com/thumbnail?id=1OxNj-GbuwFFRFBh7vOyhMxUOJIOt0my0"
                ></Member>
                <Member
                  name="Aditi Kataria"
                  designation="Member"
                  link="https://www.linkedin.com/in/aditi-kataria-9502b3279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://drive.google.com/thumbnail?id=196WQSl_OB9iGlvTvTPr1htqqidkOmqnk"
                ></Member>
                <Member
                  name="Manya Ravishankar"
                  designation="Member"
                  link="www.linkedin.com/in/manya-ravishankar-8841922b3"
                  image="https://drive.google.com/thumbnail?id=14mVG2ckvDyrmXE6E8HBilb7TmlSs59Fd"
                ></Member>
                <Member
                  name="Rajeswari"
                  designation="Member"
                  link="https://www.linkedin.com/in/rajeswari-malla-61045623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://drive.google.com/thumbnail?id=1qrTREHYJ0sLtwSLAzYksLaMbeju9uchv"
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
    </section>
  )
}
