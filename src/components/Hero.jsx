import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from 'swiper';
import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';
import { Member } from '@/components/Member';

import img1 from '@/images/home/p1.png';
import img2 from '@/images/home/p2.png';
import img4 from '@/images/home/p4.png';
import img3 from '@/images/home/p3.png';
import img5 from '@/images/home/p5.png';
import img6 from '@/images/home/p6.png';
import img7 from '@/images/home/p7.png';
import img8 from '@/images/gallery_images/Image8.jpg'
import img9 from '@/images/gallery_images/Image9.jpg'
import img10 from '@/images/gallery_images/Image10.jpg'
import img11 from '@/images/gallery_images/Image11.jpg'
import img12 from '@/images/gallery_images/Image12.jpg'
import img13 from '@/images/gallery_images/Image13.jpg'
import img14 from '@/images/gallery_images/Image14.jpg'
import img15 from '@/images/gallery_images/Image15.jpg'
import img16 from '@/images/gallery_images/Image16.jpg'
import img17 from '@/images/gallery_images/Image17.jpg'
import img18 from '@/images/gallery_images/Image18.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7];
const images1 = [ img8, img9, img10, img11, img12, img13, img14];

const routs = [
  {
    name: 'Creativity',
    link: '/creativity',
  },
  {
    name: 'APS',
    link: '/aps',
  },
  {
    name: 'Computer Society',
    link: '/computersociety',
  },
  {
    name: 'PR Sponsorship',
    link: '/pr_sponsorship',
  },
  {
    name: 'COMSOC',
    link: '/comsoc',
  },
  {
    name: 'Documentation',
    link: '/documentation',
  },
  {
    name: 'RoboRIT',
    link: '/roborit',
  },
  {
    name: 'XTREME',
    link: '/xtreme',
  },
  {
    name: 'Digital Design',
    link: '/digitaldesign',
  },
  {
    name: 'Sensor Council',
    link: '/sensor_council',
  },
  {
    name: 'WIE',
    link: '/wie',
  },
  {
    name: 'MTTS',
    link: '/mtts',
  },
  {
    name: 'PES',
    link: '/pes',
  },
  {
    name: 'SPS',
    link: '/sps',
  },
  {
    name: 'Web Resources',
    link: '/web_resources',
  },
]

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 pt-8 text-center md:px-10 lg:px-8">
        <h1 className="text-2xl font-bold leading-none md:text-3xl lg:text-4xl">
          IEEE <span className="text-pri">Ramaiah Institute Of Technology</span>
        </h1>
        <p className="mt-1 text-lg text-red-600">Advancing Technology For Humanity</p>
      </div>

      <div className="mx-auto max-w-4xl p-4">
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
          keyboard={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="h-auto w-full rounded-lg shadow-lg"
                src={image}
                alt={index + 'image'}
                width={1920}
                height={1080}
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className="pb-16 pt-5 text-justify lg:pt-8">
        <div className="mx-auto max-w-5xl mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Content */}
          <div className="col-span-1 lg:col-span-2">
            <h1 className="text-xl lg:text-3xl text-center font-bold mb-4 ">
              What is <span className="text-2xl lg:text-5xl font-bold text-blue-500">IEEE RIT-B?</span>
            </h1>
            <p className="text-md mx-auto max-w-4xl tracking-tight text-slate-800 lg:text-lg">
              IEEE RIT-B is the IEEE student branch at Ramaiah Institute of Technology. It is one of the{' '}
              <b>largest and most active</b> student branches in the Bangalore section. IEEE RIT-B was inaugurated
              in <b>2003</b> and has strived to enrich the students of RIT with the latest developments in various
              fields of technology and research, advancing technology for humanity. <br />
              <br />
              Over the two decades, we have garnered many accolades, including <b>“The Best Large Student Chapter,”</b>{' '}
              <b>“Best Student Volunteer,”</b> and many others. We conduct a multitude of competitions, workshops,
              seminars, and other events, including our flagship event <b>‘Aavishkaar’</b> and coordinating the recent
              RIT TechFest 2023.
            </p>
          </div>

        {/* Bento Grid */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {images1.map((image, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? 'aspect-w-1 aspect-h-1' : 'aspect-w-2 aspect-h-2'}`}
              >
              <Image
                className="rounded-lg object-cover"
                src={image}
                alt={index + 'image'}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>



      <div className="mx-auto max-w-4xl mt-10 p-4 rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg">
          <h1 className="text-md lg:text-2xl text-center font-bold mb-4">
            Why <span className="text-lg lg:text-3xl font-bold text-blue-500">IEEE RIT-B?</span>
          </h1>
          <ul className="list-disc list-inside text-md lg:text-lg">
          <li>
            <b>Stay Ahead of the Curve</b>: Gain in-depth knowledge of the latest technological trends and
            advancements.
          </li>
          <li>
            <b>Develop Practical Skills</b>: Participate in workshops, design competitions, and hackathons to gain
            hands-on experience.
          </li>
          <li>
            <b>Network with Industry Experts</b>: Build valuable connections with professionals and explore
            potential career paths.
          </li>
          <li>
            <b>Boost Your Portfolio</b>: Contribute to research projects and participate in events, enriching your
            academic profile.
          </li>
          <li>
            <b>Join a Supportive Community</b>: Connect with like-minded peers and mentors, fostering personal and
            professional growth.
          </li>
        </ul>
      </div>


      <div className="flex justify-center mt-10">
          <div className="cas-stats p-4 rounded-xl max-w-3xl w-full bg-gradient-to-r from-blue-200 to-blue-300 transition duration-300 ease-in-out transform hover:shadow-lg">
            <h2 className="text-md lg:text-2xl font-bold text-center mb-4">
              Stats
            </h2>
            <div className="cas-counters flex justify-center">
              <div className="cas-counter mx-4">
                <FaUserGraduate className="cas-icon" />
                <span className="cas-number text-xl font-bold">Student Members</span>
                <ButtonLink href="./" className="cas-button bg-sky-900 text-gray-50 mt-2">
                  228
                </ButtonLink>
              </div>

              <div className="cas-counter mx-4">
                <FaChalkboardTeacher className="cas-icon" />
                <span className="cas-number text-xl font-bold mb-2">Faculty Members</span>
                <ButtonLink href="./" className="cas-button bg-sky-900 text-gray-50 mt-2">
                  7
                </ButtonLink>
              </div>

              <div className="cas-counter mx-4">
                <FaCalendarAlt className="cas-icon" />
                <span className="cas-number text-xl font-bold mb-2">Events Conducted (Last Year)</span>
                <ButtonLink href="./" className="cas-button bg-sky-900 text-gray-50 mt-2">
                  65
                </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://site.ieee.org/sb-ritb/about-ieee/ieee-ramaiah/"
            className="text-md mt-8 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>

        <div className="mx-auto max-w-3xl">
          <h1 className="text-lg lg:text-2xl mt-6 text-center font-semibold text-black">
            All the <span className="text-lg lg:text-2xl font-bold text-blue-500">societies and councils</span> under IEEE-RIT
          </h1>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-md sm:mt-10 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 lg:items-center"
          >
            {routs.map((item, index) => (
              <li
                key={index}
                className="rounded-xl shadow-lg ring ring-indigo-50 transition hover:shadow-sm"
              >
                <div className="rounded-xl bg-blue-100 p-5 sm:p-6">
                  <h3 className="text-gray-9 text-center text-base font-semibold uppercase">
                    {item.name}
                  </h3>
                  <div className="flex justify-center">
                    <a href={item.link}>
                      <button className="mt-2 rounded-lg border bg-transparent px-4 py-2 font-semibold text-blue-700 shadow-lg shadow-blue-900/10 hover:border-transparent hover:bg-blue-900 hover:text-white">
                        View
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h1 className="mt-10 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
            <span className="text-lg lg:text-2xl font-bold text-blue-500">Office Bearers</span> of IEEE-RIT
          </h1>
          <div className="mt-8 grid max-w-4xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Member
              name="Prajana B"
              designation="SB Chair"
              link="https://www.linkedin.com/in/prajana-b-47b3b0279"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Prajana%20B%20.jpg?raw=true"
            ></Member>

            <Member
              name="Katyayani Palak"
              designation="SB Secretary"
              link="https://www.linkedin.com/in/srinivas-c-678105249/"//not uploaded
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Katyayani%20Palak_1MS21ET021.jpg?raw=true"
            ></Member>

            <Member
              name="Sanjay Kumar"
              designation="SB Treasurer"
              link="https://www.linkedin.com/in/sanjay-kumar-947911229/"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Sanjay%20Kumar_Treasurer%20.jpg?raw=true"
            ></Member>

            <Member
              name="Divyansh Mishra"
              designation="SB Technical Head"
              link="https://www.linkedin.com/in/divyansh-mishra-0a3168229"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Divyansh_Mishra_1MS21AD022.jpeg?raw=true"
            ></Member>

            <Member
              name="Tamanna Goel"
              designation="SB Convener"
              link="https://www.linkedin.com/in/tamanna-goel-831108270"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Tamanna%20Goel_%201MS21EI058.jpg?raw=true"
            ></Member>

            <Member
              name="Anirudh Baliga"
              designation="SB Vice-Chair"
              link="https://www.linkedin.com/in/anirudh-baliga-30b7b3219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Anirudh%20Bantwal%20Baliga%20_1MS22BT004.jpeg?raw=true"
            ></Member>

            <Member
              name="Sanjana Raj N"
              designation="SB Vice-Secretary"
              link="https://www.linkedin.com/in/sanjana-raj-n-822595288/"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Sanjana%20Raj.jpg?raw=true"
            ></Member>

            <Member
              name="Ravisagar K"
              designation="SB Vice-Treasurer"
              link="https://www.linkedin.com/in/ravisagar-k-ab64141ab"
              image="https://github.com/aarthipv/profileimages/blob/main/officebearers/Ravisagar%20K.jpg?raw=true"
            ></Member>

            <Member
              name="Priyanshu Bhojwani"
              designation="SB Vice-Technical Head"
              link="https://www.linkedin.com/in/priyanshu-bhojwani-7b9b44299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              image="https://raw.githubusercontent.com/natashabrito/members2024/main/studentbranch/Priyanshu%20Bhojwani_1MS22IS104.JPG"
            ></Member>

            <Member
              name="Kaushik Gaitonde"
              designation="SB Vice-Convener"
              link="https://www.linkedin.com/in/kaushik-gaitonde-067039247"
              image="https://raw.githubusercontent.com/natashabrito/members2024/main/studentbranch/Kaushik%20Gopal%20Gaitonde_1MS22EC060.jpg"
            ></Member>
          </div>
        </div>
      </Container>
    </section>
  )
}