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
      <section className="bg-blue-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-8">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              Faculty Members of <span className="text-sky-800">IEEE RITB</span>
            </h2>
          </div>
          <div className="mb-6 flex flex-col items-center justify-center gap-8 md:flex-row lg:mb-16">
            {faculty_head.map((member) => (
              <div className="overflow-hidden rounded-lg border border-blue-100 shadow-lg" key={member.name}>
                <div className="bg-white p-6">
                  <div className="flex justify-center">
                    <Image
                      className="flex-shrink-0 rounded-lg object-cover"
                      src={member.image}
                      width="200px"
                      height="200px"
                    />
                  </div>
                  <div className="justify-between">
                    <div className="flex-1">
                      <p className="text-md flex justify-center pt-4 font-medium text-slate-800">
                        {member.designation}
                      </p>
                      <div className="mt-2 block">
                        <p className="flex justify-center text-xl font-semibold text-gray-900">
                          {member.name}
                        </p>
                        <a href={member.link}>
                          <p className="text-md flex justify-center font-medium text-blue-500 underline">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty_details.map((member) => (
              <div className="w-full p-2" key={member.name}>
                <a href={member.link}>
                  <div className="flex flex-col h-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:bg-blue-100 hover:shadow">
                    <Image
                      alt="team"
                      className="mr-4 h-16 w-16 flex-shrink-0 rounded-md bg-gray-100 object-cover object-center"
                      src={member.image}
                      height={200}
                      width={200}
                    />
                    <div className="flex-grow">
                      <h2 className="text-center font-semibold text-gray-900">
                        {member.name}
                      </h2>
                      <p className="text-center text-gray-500">
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
  );
}
