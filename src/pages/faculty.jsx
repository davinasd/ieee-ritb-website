import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import img1 from '@/images/members/member(2).jpg'
import img2 from '@/images/members/member(1).jpg'
import head1 from '@/images/members/head(1).png'
import head2 from '@/images/members/head(2).jpg'
import head3 from '@/images/members/head(3).jpg'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
const faculty_head = [
  {
    name: 'Dr. Sujatha B',
    designation: 'Student Branch Counselor',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=ece&ID=5',
    image: head2,
  },
  {
    name: 'Dr. Annapurna Patil',
    designation: 'Student Branch Advisor',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=cse&ID=1',
    image: head1,
  },
  {
    name: 'Dr. Shobha K R',
    designation: 'Student Branch Advisor',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=3',
    image: head3,
  },
]

const faculty_details = [
  {
    dept: 'ECE',
    name: 'Dr. S. Sethu Selvi',
    chapter: 'SPS',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=ece&ID=2',
    image: 'https://preview.ibb.co/kt89ma/hod.jpg',
  },
  {
    dept: 'CSE',
    name: 'Dr. Parkavi A',
    chapter: 'WIE',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=cse&ID=9',
    image: 'https://image.ibb.co/bwVi2F/AParkavi.jpg',
  },
  {
    dept: 'EEE',
    name: 'Dr. Sridhar. S',
    chapter: 'PES',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=eee&ID=5',
    image: 'https://i.ibb.co/jTksqZ7/Dr-Sridhar-S.jpg',
  },
  {
    dept: 'ETE',
    name: 'Dr. Parimala Prabhakar',
    chapter: 'APS',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=6',
    image: 'https://image.ibb.co/dHXjWk/2017_08_29_13_09_29.jpg',
  },
  {
    dept: 'ETE',
    name: 'Dr. Shobha K R',
    chapter: 'ComSoc',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=3',
    image:
      'https://site.ieee.org/sb-ritb/files/2020/07/KRS-Shobha-K.R-IEEE-RIT-B-500x480.jpg',
  },
  {
    dept: 'CSE',
    name: 'Dr. Parkavi A',
    chapter: 'Computer Society',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=cse&ID=9',
    image: 'https://image.ibb.co/bwVi2F/AParkavi.jpg',
  },
  {
    dept: 'ETE',
    name: 'Dr. Parimala Prabhakar',
    chapter: 'MTT-S',
    link: 'https://msrit.edu/department/faculty-detail.html?dept=te&ID=6',
    image: 'https://image.ibb.co/dHXjWk/2017_08_29_13_09_29.jpg',
  },
]

export default function officebearers() {
  return (
    <>
      <Head>
        <title>Faculty Members - IEEE | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section class="bg-blue-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-8">
          <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              Faculty Members of <span class="text-sky-800">IEEE RITB</span>
            </h2>
          </div>
          <div class="mb-6 flex flex-col items-center justify-center gap-8 md:flex-row lg:mb-16">
            {faculty_head.map((member) => (
              <div class="overflow-hidden rounded-lg border border-blue-100 shadow-lg">
                <div className="bg-white p-6">
                  <div class="flex justify-center">
                    <Image
                      class="flex-shrink-0 rounded-lg object-cover"
                      src={member.image}
                      width="200px"
                      height="200px"
                    />
                  </div>
                  <div class="justify-between">
                    <div class="flex-1">
                      <p class="text-md flex justify-center pt-4 font-medium text-slate-800">
                        {member.designation}
                      </p>
                      <div class="mt-2 block">
                        <p class="flex justify-center text-xl font-semibold text-gray-900">
                          {member.name}
                        </p>
                        <a href={member.link}>
                          <p class="text-md flex justify-center font-medium text-blue-500 underline">
                            View Profile
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="-m-2 flex flex-wrap justify-center gap-6">
            {faculty_details.map((member) => (
              <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                <a href={member.link}>
                  <div class="flex h-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:bg-blue-100 hover:shadow">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-md bg-gray-100 object-cover object-center"
                      src={member.image}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="text-center font-semibold text-gray-900">
                        {member.name}
                      </h2>
                      <p class="text-center text-gray-500">
                        Chapter: <b>{member.chapter}</b>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
