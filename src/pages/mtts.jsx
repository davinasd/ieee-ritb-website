import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

import img1 from '@/images/MTTS/Picture1.png'
import img2 from '@/images/MTTS/Picture4.jpg'
import img3 from '@/images/MTTS/Picture5.jpg'
import img4 from '@/images/MTTS/Picture6.jpg'
import mtts1 from '@/images/slider_event_images/mtts/mtts1.jpg'
import mtts2 from '@/images/slider_event_images/mtts/mtts2.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img1, img2, img3, img4, mtts1, mtts2]

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>IEEE MTTS CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE MTTS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-blue-50">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
                IEEE MTTS CHAPTER
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
                <h1 className="mt-10 text-justify text-lg lg:text-xl tracking-tight text-gray-900">
                  The IEEE Microwave Theory and Technology Society at RITB is
                  dedicated to advance the professional standing of its members
                  and enhance the quality of life for all people through the
                  development and application of microwave technology. This is
                  an all-volunteer society, driven to excellence by its
                  leadership and with the active participation of all its
                  members. The activities sponsored by the MTT-S include a broad
                  spectrum of conferences, workshops, tutorials, technical
                  committees, chapter meetings, publications and professional
                  education programs.We also provide a forum for members to
                  share their knowledge and expertise with the wider technical
                  community.
                </h1>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 mb-10">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Prince Kumar Jha (Chair)"
                  designation="Chair"
                  link="https://www.linkedin.com/in/prince-kumar-jha-2a0929101"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Prince%20Kumar%20Jha_1MS21ET035.jpg?raw=true"
                />
                <Member
                  name="Akshat Ujjain (Vice Chair)"
                  designation="Vice Chair"
                  link="https://www.linkedin.com/in/akshat-ujjain-105263261?"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Akshat%20Ujjain_1MS22ET001.jpg?raw=true"
                />
                <Member
                  name="Priyadarshi Uttpal (Secretary)"
                  designation="Secretary"
                  link="https://www.linkedin.com/in/aditya-gangwani-615271246?"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Priyadarshi%20Utpal_1ms21et037.jpg?raw=true"
                />
                <Member
                  name="Akancha Gracy Tamang (Vice Secretary)"
                  designation="Vice Secretary"
                  link="https://www.linkedin.com/in/akancha-tamang-18a1aa24a"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Akancha%20Gracy%20Tamang_1MS22CH006.jpg?raw=true"
                />
                <Member
                  name="Yashas V (Treasurer)"
                  designation="Treasurer"
                  link="https://www.linkedin.com/in/yashas-v-b9747b278/"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Yashas%20V_1MS21ET057.PNG?raw=true"
                />
                <Member
                  name="Sameer P Bhandiwad (Vice Treasurer)"
                  designation="Vice Treasurer"
                  link="https://www.linkedin.com/in/sameer-p-bhandiwad-b61756250"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Sameer%20P%20Bhandiwad_1MS22ET042.jpg?raw=true"
                />
                <Member
                  name="Sushmita N Mathad (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/sushmita-mathad-9780b9285"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Sushmita%20Mathad_1MS22EC159.jpg?raw=true"
                />
                <Member
                  name="Aditya Gangwani (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/aditya-gangwani-615271246?"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/ADITYA%20GANGWANI_1MS23EC007.jpg?raw=true"
                />
                <Member
                  name="Aishwarya Mahesh Ulavi (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/aishwarya-ulavi-34903b2b3"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Aishwarya%20Mahesh%20Ulavi_1MS23EC009.jpg?raw=true"
                />
                <Member
                  name="Shreedhar Shetty (Execom)"
                  designation="Execom"
                  link="www.linkedin.com/in/shreedhar-shetty-92079525a"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/shreedhara_1MS21ET048.jpeg?raw=true"
                />
                <Member
                  name="Shreenath Shenoy (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/shreenath-shenoy-76704a2b3?"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Shreenath_1MS23CI009.jpg?raw=true"
                />
                <Member
                  name="Lakshman Gowda H K (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/lakshman-gowda-562472295"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Lakshman%20Gowda%201MS22ET019.png?raw=true"
                />
                <Member
                  name="Navya Ullas Rai (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/navya-ullas-rai-05884b2b2"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Navya%20Ullas%20Rai_1MS23ET035.jpg?raw=true"
                />
                <Member
                  name="Deekshith Kumar T (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/deekshith-kumar-t-799485251"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/DEEKSHITH%20KUMAR%20T_1MS22ET401.jpg?raw=true"
                />
                <Member
                  name="Vidit Agrawal (Execom)"
                  designation="Execom"
                  link="https://www.linkedin.com/in/vidit-agrawal-161047289"
                  image="https://github.com/Abhishekvk04/Ieee_member_profile/blob/main/MEMBERS%20PICTURES%20/MTTS/Vidit%20agrawal-%201MS23EC053-T.jpg?raw=true"
                />
                <Member
                  name="Pranav B M (Member)"
                  designation="Member"
                  link=""
                  image="#"
                />
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
