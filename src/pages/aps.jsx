import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import { Member } from '@/components/Member'

import aps1 from '@/images/slider_event_images/aps/aps1.jpg'
import aps2 from '@/images/slider_event_images/aps/aps2.jpg'
import aps3 from '@/images/slider_event_images/aps/aps3.jpg'
import aps4 from '@/images/slider_event_images/aps/aps4.jpg'
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Controller,
} from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { invert } from 'tailwindcss/defaultTheme'

const images = [
  {
    link: aps1,
  },
  {
    link: aps2,
  },
  {
    link: aps3,
  },
  {
    link: aps4,
  }
]
const members = [
  {
    name: "Banu Prasad",
    designation: "Chair",
    link: "https://www.linkedin.com/in/banu-prasad-m-925558270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Banu%20Prasad%20M_1MS21EC034.jpeg?raw=true"
  },
  {
    name: "Dheeraj V",
    designation: "Vice Chair",
    link: "http://www.linkedin.com/in/dheerajv624",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Dheeraj%20V%201MS22EC042_.jpg?raw=true"
  },
  {
    name: "Kokila",
    designation: "Secretary",
    link: "https://www.linkedin.com/in/kokila-s-642161252",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Kokila_1MS21EE029.jpg?raw=true"
  },
  {
    name: "Disha K",
    designation: "Co- Secretary",
    link: "https://www.linkedin.com/in/disha-k-603563258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://drive.google.com/thumbnail?id=1EjBWat9H7vBRshsFqTZqRAHYC3-Zcfhb"//not uploaded
  },
  
  {
    name: "Chandrak",
    designation: "Treasurer",
    link: "https://www.linkedin.com/in/chandrak-jayakumar-63211429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Chandrak%20Jayakumar_1ms21ec039.jpg?raw=true"
  },
  {
    name: "B M Vishnu",
    designation: "Co - Treasurer",
    link: "https://www.linkedin.com/in/vishnu-bm-0481ba252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/B%20M%20VISHNU_1MS22EC030%20.jpg?raw=true"
  },
  {
    name: "Sujay P C",
    designation: "Member",
    link: "https://www.linkedin.com/in/banu-prasad-m-925558270",//not uploaded
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Sujay%20P%20C_1MS22ET053.jpg?raw=true"
  },
  {
    name: "Kishor Ravindra Hitnalli ",
    designation: "Member",
    link: "https://www.linkedin.com/in/banu-prasad-m-925558270",//not uploaded
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/kishor%20Hitnalli%20(1ms22cy035).jpg?raw=true"
  },
  {
    name: "Navya Ullas Rai",
    designation: "Member",
    link: "https://www.linkedin.com/in/navya-ullas-rai-05884b2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Navya%20Ullas%20Rai%20-%201MS23ET046-T.jpg?raw=true"
  },
  {
    name: "Aarya P",
    designation: "Member",
    link: "https://www.linkedin.com/in/aarya-p-1166a3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Aarya%20P_1MS22EC004.jpg?raw=true"
  },
  {
    name: "Akash Srivastava ",
    designation: "Member",
    link: "https://www.linkedin.com/in/banu-prasad-m-925558270",//not uploaded
    image: "https://drive.google.com/uc?id=1WW1FXoE47iehfz5zv07bmE8_Fh9LrPz2&export=view"
  },
  {
    name: "Bumika N R",
    designation: "Member",
    link: "https://www.linkedin.com/in/bumika-n-r-b93b27283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://drive.google.com/thumbnail?id=1ozF0aoKNn-YwGUE4t3UpTK0ktE3URR5Z"//image not loading
  },
  {
    name: "Sandra Elsa Subin ",
    designation: "Member",
    link: "https://www.linkedin.com/in/sandra-subin-7973ab299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Sandra%20Elsa%20Subin_%201MS22CH032.jpg?raw=true"
  },
  {
    name: "Ayush Prabhat",
    designation: "Member",
    link: "http://linkedin.com/in/ayush-prabhat-b9911b2b3",
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Ayush_Prabhst_1ms22ei013.jpg?raw=true"
  },
  {
    name: "Sneha Vijay ",
    designation: "Member",
    link: "https://www.linkedin.com/in/banu-prasad-m-925558270",//not uploaded
    image: "https://github.com/aarthipv/profileimages/blob/main/aps/Sneha%20Vijay%20.jpg?raw=true"
  },

];

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>IEEE APS CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE APS CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
              IEEE APS CHAPTER
            </h1>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              loop={true}
              autoHeight={true}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[
                Autoplay,
                Pagination,
                Navigation,
                EffectFade,
                Controller,
              ]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    className="lg:h-128 h-96 w-full object-cover"
                    src={image.link}
                    alt={index}
                    width={1745}
                    height={636}
                    border-radius="10px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <h1 className="mt-10 text-justify text-lg tracking-tight text-gray-900 md:text-xl">
                Welcome to the IEEE Antennas and Propagation Society (APS)
                Student Chapter at RIT. We are a dynamic community of passionate
                engineering students dedicated to advancing the field of
                antennas and propagation. Through a variety of engaging
                activities, workshops, and seminars, we foster an environment
                that encourages learning, collaboration, and innovation. Join us
                as we explore the exciting world of electromagnetic waves,
                antenna design, wireless communications, and cutting-edge
                technologies. Whether you're a beginner or an expert, our
                chapter offers a platform to expand your knowledge, develop
                skills, and connect with like-minded individuals.
              </h1>
            </div>

            <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
              Members of APS Chapter
            </h1>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
