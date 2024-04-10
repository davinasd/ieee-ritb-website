import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
import sc1 from '@/images/slider_event_images/sc/sc1.jpg'
import sc2 from '@/images/slider_event_images/sc/sc2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Controller,
} from 'swiper'
import Image from 'next/image'
const images = [sc1, sc2]

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>
          IEEE SENSOR COUNCIL | IEEE Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="IEEE SENSOR COUNCIL- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-left">
              <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                IEEE SENSOR COUNCIL
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
                      width={1795}
                      height={850}
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-6 text-justify text-lg leading-8 text-gray-600">
                Welcome to the IEEE Sensor Student Chapter at RIT. We are a
                vibrant and enthusiastic community of engineering students
                passionate about the field of sensors and its applications. Our
                chapter provides a platform for students to delve into the world
                of sensor technologies, ranging from MEMS to IoT devices. <br />
                <br />
                <br />
                Through workshops, guest lectures, and hands-on projects, we aim
                to enhance understanding and foster innovation in the field.
                Join us to explore the fascinating realm of sensing, data
                acquisition, and signal processing, and unlock endless
                possibilities in the realm of sensing technology.
                <br></br>
              </p>

              <h1 className="mb-10 mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Souhadra Shrivastava"
                  designation="Chair"
                  link="https://www.linkedin.com/in/souhadra-shrivastava/"
                  image="https://drive.google.com/thumbnail?id=1oKyVy5WVewK7wyrLXtfDB7AVetTYuFEo"
                ></Member>

                <Member
                  name="Tanisha P Hegde"
                  designation="Secretary"
                  link="https://www.linkedin.com/in/tanisha-p-hegde-510036230"
                  image="https://drive.google.com/thumbnail?id=1Gh1IShu0AG3wjKhOVEEsUNMCWtMA_Aia"
                ></Member>

                <Member
                  name="Chinmay Jindal"
                  designation="Member"
                  link="https://www.linkedin.com/in/chinmay-jindal-49a76024a/"
                  image="https://drive.google.com/thumbnail?id=1zyDv1Of0aNTY71n9HkW3GB6fjfjcSDND"
                ></Member>

                <Member
                  name="Aruna Arunachalam"
                  designation="Member"
                  link="https://www.linkedin.com/in/aruna-arunachalam-7bb5002b3/"
                  image="https://drive.google.com/thumbnail?id=1RNEFqm_pM-cUoPeHvSE45cFOjZ45Ztqq"
                ></Member>

                <Member
                  name="Suhaas B S"
                  designation="Member"
                  link="https://www.linkedin.com/in/suhaas-b-s-7817262a7/"
                  image="https://drive.google.com/thumbnail?id=1U48WRdUBaVwmyeuaEthnUzj6_lrNWJdM"
                ></Member>

                <Member
                  name="Siddharth Lunawat"
                  designation="Member"
                  link="https://www.linkedin.com/in/siddharth-lunawat-326146233 "
                  image="https://drive.google.com/thumbnail?id=1NQ5lKj0sb2cx_GPOpXpggS77q9qU1z1z"
                ></Member>

                <Member
                  name="Adithi Purushothama"
                  designation="Member"
                  link="https://www.linkedin.com/in/adithi-purushothama-3652b92b3/"
                  image="https://drive.google.com/thumbnail?id=1D51V68oN4GqV6U2bPYA4b4mM9pGf8UvF"
                ></Member>

                <Member
                  name="Shree Lakshmi S Shekar"
                  designation="Member"
                  link="https://www.linkedin.com/in/shree-lakshmi-s-shekar-760738266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://raw.githubusercontent.com/natashabrito/members2024/main/documentation/Shree%20Lakshmi%20S%20Shekar_1MS22IS129.jpeg"
                ></Member>

                <Member
                  name="Likhitha C A"
                  designation="Member"
                  link="https://www.linkedin.com/in/likhitha-ca7813042b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap"
                  image="https://drive.google.com/thumbnail?id=1dFYD9GrQ_h5Ob3QoaXhT42D1yZcAxpxd"
                ></Member>

                <Member
                  name="Kaustubh Kumar"
                  designation="Member"
                  link="https://www.linkedin.com/in/kaustubh-kumar-274265242/"
                  image="https://drive.google.com/thumbnail?id=1EGsdTmun5I2OHtqWjfpBwI4lNTmqDvXL"
                ></Member>

                <Member
                  name="Archisman Hazra"
                  designation="Member"
                  link="https://www.linkedin.com/in/archisman-hazra-197767298/ "
                  image="https://drive.google.com/thumbnail?id=1qnFeR7l3kOdyj8uldbnK6UFnxyH1VDqA"
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
