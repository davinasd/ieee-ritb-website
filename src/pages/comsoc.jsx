import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Controller,
} from 'swiper'
import Image from 'next/image'
import comsoc1 from '@/images/slider_event_images/comsoc/comsoc1.jpg'
import comsoc2 from '@/images/slider_event_images/comsoc/comsoc2.jpg'
import comsoc3 from '@/images/slider_event_images/comsoc/comsoc3.jpg'
import comsoc4 from '@/images/slider_event_images/comsoc/comsoc4.jpg'
import comsoc5 from '@/images/slider_event_images/comsoc/comsoc5.jpg'
import comsoc6 from '@/images/slider_event_images/comsoc/comsoc6.jpg'

const images = [
  {
    link: comsoc1,
    width: 6000,
    height: 4000,
  },
  {
    link: comsoc2,
    width: 5352,
    height: 2956,
  },
  {
    link: comsoc3,
    width: 1688,
    height: 1266,
  },
  {
    link: comsoc4,
    width: 1745,
    height: 700,
  },
  {
    link: comsoc5,
    width: 2992,
    height: 2000,
  },
  {
    link: comsoc6,
    width: 2210,
    height: 1475,
  },
]

import { Member } from '@/components/Member'

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-16">
      <Head>
        <title>COMSOC | IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="COMSOC - IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                COMSOC
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
                      className="w-full object-cover"
                      src={image.link}
                      alt={index}
                      width={image.width}
                      height={image.height}
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We at Ramaiah Institute of Technology, are all called to
                communications technology, to advance communications and
                networking technology for the betterment of humanity. IEEE
                ComSoc RITB promotes technological innovation and fosters
                creation and sharing of information among the global technical
                community.
                <br></br>
                The chapter provides services to members for their technical and
                professional advancement and forums for technical exchanges
                among professionals in academia, industry, and public
                institutions. To bring the world together in harmony through
                communications and networking technology research, application,
                education, and incubation of new ideas.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Joining an IEEE COMSOC chapter offers several benefits,
                including:
              </p>
              <ul class="ml-4 list-decimal">
                <li>
                  Learning Opportunities: Attend workshops, seminars, and
                  conferences organized by the chapter to learn from experts and
                  stay updated with the latest advancements in the field.
                </li>
                <li>
                  Collaboration: Find opportunities for collaborative research
                  and projects by interacting with like-minded individuals.
                </li>
                <li>
                  Leadership Development: Volunteer for chapter activities and
                  gain valuable leadership and organizational skills.
                </li>
                <li>
                  Recognition: Contribute to the chapter's initiatives and get
                  recognition for your involvement and contributions in the
                  field of robotics and automation.
                </li>
              </ul>
              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past events:
              </h1>
              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  1. QUIZARDRY
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this about?</b>
                  <br></br>
                  Quizardry was altogether a 4-Quiz event which consisted of 4
                  rounds namely aptitude, technical affairs, pop culture and
                  coding. Each round consisted of 20 questions on average and
                  the cumulative scores of the 4 quizzes would be taken into
                  consideration to decide the winner and the runner up.
                  <br></br>
                  The entire Student Branch of ComSoc was involved in the
                  conduction of the event. We divided ourselves in 3 groups,
                  where each group was involved in conducting a specific event
                  being aptitude, technical affairs, or pop culture.
                </p>
                <p className="text-base text-gray-600">
                  The event lasted from 10/6/2022 to 20/6/2022.
                </p>
              </div>
              <div>
                <h2 className="mt-10 text-left text-2xl font-bold tracking-tight text-gray-900">
                  2. WIRELESS EVOLUTION
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  <b>What is this about?</b>
                  <br></br>
                  This session was about the uses of evolved technologies across
                  industries and consumers that leveraged high bandwidth, low
                  latency, machine type communications, from smart homes, health
                  care to Industry 4.0 to Metaverse scenarios. It also covered
                  the history of Communications, wireless technology evolution
                  from 1G to 5G and beyond, network architecture, use cases and
                  applications supported.
                  <br></br>
                  This technical talk was headed by Ms. Gnanapriya
                  Chidambaranathan.
                  <br></br>
                  Gnanapriya is the Associate Vice President, Unit Technology
                  Officer, Global Head of Technology & Architecture Practice -
                  Communications, Media & Entertainment, Energy, Utilities &
                  Services Business Unit (ECS). Priya has 28+ years of
                  experience in Telecom & IT. She contributes to unit strategy,
                  drives technology adoption for business solutions across
                  varied programs globally. She has been driving Digital
                  Transformation, Enterprise Architecture, IT roadmap, Micro
                  Services, Cloud migration, Open-Source Adoption, 5G / Edge, 5G
                  Use Cases & Industry solutions, emerging technologies themes
                  like Blockchain solutions, Software Marketplaces, Data
                  Modernization, Legacy & Technology Modernization, Innovation,
                  guiding varied transformation & modernization programs for ECS
                  global clients and part of org level core team.
                </p>
              </div>

              <div>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                  3. SUCCESS DECK
                </h2>

                <p className="mt-6 text-base text-gray-600">
                  <b>What is this about?</b>
                  <br></br>
                  “Success Deck”- The flagship event of IEEE ComSoc, RITB is
                  essentially a mock placement drive conducted especially for
                  the 2nd and 3rd year engineering students to provide them with
                  a basic idea of how college placements are conducted, the
                  event not only helps them prepare for placements better but
                  also gives a critical insight to all the participants in terms
                  of improving on their technical and communication skills.
                  <br></br>
                  This event was conducted exactly like any placement drive that
                  happens in our college; we conducted an aptitude followed by a
                  coding round on 11th of December 2022 where they were posed
                  with 3 medium level coding questions. We were extremely elated
                  at the fact that more than 40 percent of the participants were
                  scoring above 65 percent on the coding test showing that
                  despite being in 2nd and 3rd year which showed how proficient
                  students were at competitive coding.
                  <br></br>
                  For the technical interview round we bought in 4 astounding
                  professionals from the tech industry who were also RIT Alumni.
                  We shortlisted 10 candidates for the technical round and each
                  round was approximately half an hour long judging the projects
                  in their resume and their problem-solving capacity.
                  <br></br>
                  In the end the top or most impressive candidate was given a
                  cash prize of 1500 INR (First Place), 1000 INR (Second Place),
                  and 500 INR (Third Place) ; everyone was given a participation
                  certificate.
                </p>
              </div>

              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <Member
                  name="Dharshan N"
                  designation="Chairperson"
                  link="http://www.linkedin.com/in/dharshan-580755257"
                  image="https://drive.google.com/thumbnail?id=1yTodYTvBoPH_qgdENTT1fmH4CX3Q8J5U"
                />
                <Member
                  name="Aditya Kumar Singh"
                  designation="Treasurer"
                  link="https://www.linkedin.com/in/aditya-singh-b241a3271"
                  image="https://drive.google.com/thumbnail?id=1-JN8su4oRkHnV7wClcqzkr7xjWOS4YIz"
                />
                <Member
                  name="Dhanyath R"
                  designation="Secretary"
                  link="https://www.linkedin.com/in/looking-out-for-dhanyath-ravi/"
                  image="https://drive.google.com/thumbnail?id=1kdqvZJ1byu6JFV-AVmoThv9LoUBs6Dm1"
                />
                <Member
                  name="Nishanth P Kashyap"
                  designation="Vice Chair"
                  link="https://www.linkedin.com/in/nishanth-kashyap-06b979259"
                  image="https://drive.google.com/thumbnail?id=1Ed1v6eKizOiggquQj5-t4Tg-dk3o24XW"
                />
                <Member
                  name="Pranav Vasudev"
                  designation="Vice Secretary"
                  link="https://www.linkedin.com/in/pranav-vasudev-2aaa29244"
                  image="https://drive.google.com/thumbnail?id=1v2lVP5UCmhKcgsCies245TjdVM5wD4zA"
                />
                <Member
                  name="Drithi P"
                  designation="Vice Treasurer"
                  link="https://www.linkedin.com/in/drithi-p-b7aa12241"
                  image="https://drive.google.com/thumbnail?id=1jvtCvYj2y89jA4ihZgVa2TVrWV0Lb8rV"
                />
                <Member
                  name="Gaurav C Belawadi"
                  designation="Execom"
                  link="https://www.linkedin.com/in/gaurav-c-belawadi-659304224"
                  image="https://drive.google.com/thumbnail?id=1Msl4GbWc3mnHybAdigvW_CdI4MgBlzzW"
                />
                <Member
                  name="Vaibhav Gowda G P"
                  designation="Execom"
                  link="https://www.linkedin.com/in/vaibhav-gowda-34548124a"
                  image="https://drive.google.com/thumbnail?id=1k2r59q770IrDxs4rqaULQIvzcXSirJqa"
                />
                <Member
                  name="Yashaswini M"
                  designation="Execom"
                  link="https://www.linkedin.com/in/yashaswini-m-722735229"
                  image="https://drive.google.com/thumbnail?id=1gdpQuqFuQ4Y_DgnGIp69w2qQJskUposR"
                />
                <Member
                  name="Tanisha P Hegde"
                  designation="Execom"
                  link="https://www.linkedin.com/in/tanisha-p-hegde-510036230"
                  image="https://drive.google.com/thumbnail?id=1G0PhVoGBHuuVn_dKLHH6wnMhAfbRlXKY"
                />
                <Member
                  name="Naveen N G"
                  designation="Execom"
                  link="https://www.linkedin.com/in/naveen-n-g-bba3aa271"
                  image="https://drive.google.com/thumbnail?id=1WegbMDKT__fReLimkgLKM_GYaDm1D32x"
                />
                <Member
                  name="Sneha Tapadar"
                  designation="Execom"
                  link="https://www.linkedin.com/in/sneha-tapadar-26b8632b2"
                  image="https://drive.google.com/thumbnail?id=1t9gvgoDL2NVNvA88xrZa3bNzGRYQapay"
                />
                <Member
                  name="Mohammed Aamir Ahmed"
                  designation="Execom"
                  link="https://www.linkedin.com/in/m-d-aamir-ahmed-741765248"
                  image="https://drive.google.com/thumbnail?id=1cnoNiVd2z8SW17VCQzIm5DyMR6wCJjfh"
                />
                <Member
                  name="Priyanshu Trivedi"
                  designation="Execom"
                  link="https://www.linkedin.com/in/priyanshu-trivedi-4a8746293"
                  image="https://drive.google.com/thumbnail?id=1u_b296g1V0Zl9vkHDhPnkQXBnNJnxZTz"
                />
                <Member
                  name="Harshavardhana H D"
                  designation="Execom"
                  link="https://www.linkedin.com/in/harshavardhana-h-d-a9a3462b2"
                  image="https://drive.google.com/thumbnail?id=1r2i1uO_q2ZypuVFMJFTFgMh0uXl6f9QG"
                />
                <Member
                  name="Mahantesh Bandi"
                  designation="Execom"
                  link="https://www.linkedin.com/in/mahantesh-m-bandi-a3237423a"
                  image="https://drive.google.com/thumbnail?id=1ocuFJJwNMqMjIMDdUKSK2lJTGmnf_aR_"
                />
                <Member
                  name="Rishabh Bhardwaj"
                  designation="Execom"
                  link="http://linkedin.com/in/rishabh-bhardwaj-256369289"
                  image="https://drive.google.com/thumbnail?id=1i-dYvtVYcxZtis_OsTYnWuxBpVNr8PDa"
                />
                <Member
                  name="Suhas Reddy"
                  designation="Execom"
                  link="https://www.linkedin.com/in/suhas-reddy-dy-8778612b2"
                  image="https://drive.google.com/thumbnail?id=1tv7GuZJQp0IFELmacwu_ZrjYcCm60pJG"
                />
                <Member
                  name="Mahima B M"
                  designation="Execom"
                  link="https://www.linkedin.com/in/mahima-bm-602a142a5"
                  image="https://drive.google.com/thumbnail?id=1Gwuzdx8b5rvRILLZYCSgh654ftHBx-Io"
                />
                <Member
                  name="Sukruthi Reddy D Y"
                  designation="Execom"
                  link="https://www.linkedin.com/in/sukruthi-reddy-3083442b2"
                  image="https://drive.google.com/thumbnail?id=1rabaKveDX7DBRKxGULOpHHpI0njsLZn-"
                />
                <Member
                  name="Sanath kumar Biradar"
                  designation="Execom"
                  link="https://www.linkedin.com/in/sukruthi-reddy-3083442b2"
                  image="https://drive.google.com/thumbnail?id=1vUJaQqCdx16BNvv-FKBUf208rbeJqoMa"
                />
                <Member
                  name="Pransu kumar"
                  designation="Execom"
                  link="https://www.linkedin.com/in/pransu-kumar-5547b8281"
                  image="https://drive.google.com/thumbnail?id=1DIUur8Be2dyp0nREUpRDXuMixk_xzaQP"
                />
                <Member
                  name="Anishka Avinash"
                  designation="Execom"
                  link="https://www.linkedin.com/in/anishka-avinash-a07839291"
                  image="https://drive.google.com/thumbnail?id=1muvwSVtIvuSug_o59eq8BKubz9msEIxX"
                />
                <Member
                  name="Tejasvi S N"
                  designation="Execom"
                  link="https://www.linkedin.com/in/tejasvi-s-n-10a511271"
                  image="https://drive.google.com/thumbnail?id=1PUyXVUIwYl44voTUwRGxr1cHdN90Jdil"
                />
                <Member
                  name="UmmeKulsum Yasir"
                  designation="Execom"
                  link="https://www.linkedin.com/in/umme-kulsum-yasir-2212a42a0"
                  image="https://drive.google.com/thumbnail?id=1jULmCk-7CpRRg3ANpgQYh0i7ghWIIuWB"
                />
                <Member
                  name="Divvyaa S Nair"
                  designation="Execom"
                  link="https://in.linkedin.com/in/divvya-nair-8b76b62a1"
                  image="https://drive.google.com/thumbnail?id=1POxxkURoTvnHiOlBqxFIlJy-KCfjJLu7"
                />
                <Member
                  name="Divya M Narwade"
                  designation="Execom"
                  link="https://www.linkedin.com/in/divyashree-m-narwade-34171a25a"
                  image="https://drive.google.com/thumbnail?id=1tOWCXXUZggwNlD8dXKEjw89R-Z0kVNrf"
                />
                <Member
                  name="Fathima Ibrahim"
                  designation="Execom"
                  link="http://www.linkedin.com/in/fathima-ibrahim-5609a0215"
                  image="https://drive.google.com/thumbnail?id=1hHERpumv9IXLe72uSV0OhGaLtolQ9fEb"
                />
                <Member
                  name="RUSHALI S ADDAPA"
                  designation="Execom"
                  link="https://www.linkedin.com/in/rushali-adappa-45531b291"
                  image="https://drive.google.com/thumbnail?id=1Id3lQ0l9ADbosaU1XbQIGZKd1-WvQf57"
                />
                <Member
                  name="Karthik A S"
                  designation="Execom"
                  link="https://www.linkedin.com/in/karthik-a-9470372b3"
                  image="https://drive.google.com/thumbnail?id=1T5iLndd8ZyjhoD92fNhqzvz2ywoTZE2r"
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
