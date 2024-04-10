import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

import collab1 from "@/images/collab/2.png"
import collab2 from "@/images/collab/3.png"

import img1 from '@/images/home/p1.png';
import img2 from '@/images/home/p2.png';
import img4 from '@/images/home/p4.png';
import img3 from '@/images/home/p3.png';
import img5 from '@/images/home/p5.png';
import img6 from '@/images/home/p6.png';
import img7 from '@/images/home/p7.png';

import { FaUserLarge } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Home() {
    const [readMore, setReadMore] = useState(false);

    return (
        <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-32">
            <Head>
                <title>Collab | IEEE Ramaiah Institute of Technology</title>
                <meta
                    name="description"
                    content="Collab - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
                />
            </Head>
            <Header />
            <main>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
                        <div className="text-justify">
                            <h1 className="flex justify-center font-display text-4xl font-medium text-slate-800">
                                Collab
                            </h1>
                            <div className="mx-auto max-w-4xl p-8"></div>
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
                                            className="lg:h-128 w-full object-cover"
                                            src={image}
                                            alt={index}
                                            width={1795}
                                            height={850}
                                            border-radius="10px"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                IEEE RIT-B is the IEEE student branch at Ramaiah institute of Technology. It is one of the largest and most
                                active student branches in the Bangalore section. IEEE RIT-B was inaugurated in 2003 and since then has
                                strived to enrich the students of RIT with the latest developments
                                in various fields of technology and research and advance technology for Humanity .
                                Over the two decades we have been active for, we have backed many accolades and laurels including
                                “The Best Large student chapter”, “Best Student Volunteer” and many others. We conduct multitude of
                                competitions, workshops, seminars and other events which have very high quality. This is further emphasized
                                by our flagship event ‘Aavishkaar’ and being coordinators of the recent RIT TechFest 2023.
                            </p>
                        </div>

                        <h1 className='text-3xl mt-10 font-semibold'>Collabs</h1>
                        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 mb-10">
                            <Image src={collab1} width={300} height={300} alt='collab-image' className='rounded-lg' />
                            <Image src={collab2} width={300} height={300} alt='collab-image' className='rounded-lg' />
                        </div>
                        <h1 className='text-3xl mt-20 font-semibold'>People</h1>
                        <div className="flex flex-col gap-6 md:flex-row mt-4 mb-10">
                            <div className='h-[200px] w-[200px] rounded-lg bg-gray-100 text-gray-400 flex'>
                                <Image
                                    src={"https://github.com/sanjay212003/sps-members/blob/main/NehaC_1MS21MD016.jpg?raw=true"}
                                    width={200}
                                    height={200}
                                    alt='Neha C.'
                                    className='object-cover rounded-lg'
                                />
                            </div>
                            <div className='md:w-[calc(100%-220px)] w-full'>
                                <h1 className="text-2xl">Neha Channaiah</h1>
                                <div>
                                    <p className='mt-3 text-lg'>
                                        Greetings , I am Neha Channaiah, currently in my third year of studying medical electronics,
                                        where I'm exploring the intricate world of healthcare technology.Currently the secretary of
                                        IEEE-RIT SPS , playing a central role in facilitating collaboration and innovation within our
                                        organization.
                                    </p>
                                    <p className='mt-3 text-lg'>
                                        My passion lies in hardware engineering, particularly in{!readMore ?
                                            <>... <span className='text-purple-600 cursor-pointer font-semibold' onClick={() => setReadMore(true)}>Read more</span></>
                                            : `the field of sensors and embedded
                                        systems. I'm fascinated by how these technologies enable us to interact with and understand
                                        the world around us. Through my studies and hands-on projects, I've developed a deep
                                        understanding of how sensors and embedded systems contribute to advancements in
                                        healthcare, from monitoring vital signs to enhancing diagnostic capabilities.
                                        Moreover, I have a strong interest in image processing, where I explore how digital images can
                                        be manipulated and analyzed to extract valuable information for medical diagnosis and
                                        research. This intersection of technology and healthcare drives my enthusiasm for research and
                                        development, where I constantly seek to push the boundaries of what's possible in improving
                                        patient care and outcomes.`}
                                    </p>
                                    {readMore && (<>
                                        <p className='mt-3 text-lg'>
                                            As I embark on my internship at nxtQ Limited’s “ MOVEMENT FORMS”, I'm thrilled to explore
                                            the world of understanding human movement and posture. Their mission is simple: to help
                                            people move better and stand taller for a healthier life.
                                        </p>
                                        <p className='mt-3 text-lg'>
                                            In my role, I will conduct an extensive literature review focusing on the technological
                                            advancements within sensor technology, signal processing techniques, and feature engineering
                                            methodologies . Specifically, I will be working on signal processing techniques and calibration of
                                            sensors to ensure accurate data collection and analysis.
                                            Through meticulous analysis, we aim to enhance the diagnostic capabilities of our technology,
                                            enabling faster and more accurate assessments of both movement patterns and posture
                                            dynamics.
                                            <br />
                                            <span className='text-purple-600 cursor-pointer font-semibold' onClick={() => setReadMore(false)}>Show less</span>
                                        </p>
                                    </>)}
                                </div>
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
