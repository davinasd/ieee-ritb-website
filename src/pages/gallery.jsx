import Head from 'next/head'
import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import img1 from '@/images/gallery_images/Image1.jpg'
import img2 from '@/images/gallery_images/Image2.jpg'
import img3 from '@/images/gallery_images/Image3.jpg'
import img4 from '@/images/gallery_images/Image4.jpg'
import img5 from '@/images/gallery_images/Image5.jpg'
import img6 from '@/images/gallery_images/Image6.jpg'
import img7 from '@/images/gallery_images/Image7.jpg'
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
import img20 from '@/images/gallery_images/Image20.jpg'
import img21 from '@/images/gallery_images/Image21.jpg'
import img22 from '@/images/gallery_images/Image22.jpg'
import img23 from '@/images/gallery_images/Image23.jpg'
import img24 from '@/images/gallery_images/Image24.jpg'
import img25 from '@/images/gallery_images/Image25.jpg'
import img26 from '@/images/gallery_images/Image26.jpg'
import img27 from '@/images/gallery_images/Image27.jpg'
import img28 from '@/images/gallery_images/Image28.jpg'
import img29 from '@/images/gallery_images/Image29.jpg'
import img30 from '@/images/gallery_images/Image30.jpg'
import img31 from '@/images/gallery_images/Image31.jpg'
import img32 from '@/images/gallery_images/Image32.jpg'
import img33 from '@/images/gallery_images/Image33.jpg'
import img34 from '@/images/gallery_images/Image34.jpg'
import img35 from '@/images/gallery_images/Image35.jpg'
import img36 from '@/images/gallery_images/Image36.jpg'
import img37 from '@/images/gallery_images/Image37.jpg'
import img38 from '@/images/gallery_images/Image38.jpg'
import img39 from '@/images/gallery_images/Image39.jpg'
import img40 from '@/images/gallery_images/Image40.jpg'
import img41 from '@/images/gallery_images/Image41.jpg'

const resources = [
  {
    title: 'Image 39',
    imageSrc: img39,
  },
  {
    title: 'Image 5',
    imageSrc: img5,
  },
  {
    title: 'Image 41',
    imageSrc: img41,
  },
  {
    title: 'Image 10',
    imageSrc: img10,
  },
  {
    title: 'Image 11',
    imageSrc: img11,
  },
  {
    title: 'Image 12',
    imageSrc: img12,
  },
  {
    title: 'Image 13',
    imageSrc: img13,
  },
  {
    title: 'Image 14',
    imageSrc: img14,
  },
  {
    title: 'Image 15',
    imageSrc: img15,
  },
  {
    title: 'Image 16',
    imageSrc: img16,
  },
  {
    title: 'Image 1',
    imageSrc: img1,
  },
  {
    title: 'Image 2',
    imageSrc: img2,
  },
  {
    title: 'Image 3',
    imageSrc: img3,
  },
  {
    title: 'Image 4',
    imageSrc: img4,
  },
  {
    title: 'Image 6',
    imageSrc: img6,
  },
  {
    title: 'Image 7',
    imageSrc: img7,
  },
  {
    title: 'Image 8',
    imageSrc: img8,
  },
  {
    title: 'Image 9',
    imageSrc: img9,
  },
  {
    title: 'Image 17',
    imageSrc: img17,
  },
  {
    title: 'Image 18',
    imageSrc: img18,
  },
  {
    title: 'Image 20',
    imageSrc: img20,
  },
  {
    title: 'Image 21',
    imageSrc: img21,
  },
  {
    title: 'Image 22',
    imageSrc: img22,
  },
  {
    title: 'Image 23',
    imageSrc: img23,
  },
  {
    title: 'Image 24',
    imageSrc: img24,
  },
  {
    title: 'Image 25',
    imageSrc: img25,
  },
  {
    title: 'Image 26',
    imageSrc: img26,
  },
  {
    title: 'Image 27',
    imageSrc: img27,
  },
  {
    title: 'Image 28',
    imageSrc: img28,
  },
  {
    title: 'Image 29',
    imageSrc: img29,
  },
  {
    title: 'Image 30',
    imageSrc: img30,
  },
  {
    title: 'Image 31',
    imageSrc: img31,
  },
  {
    title: 'Image 32',
    imageSrc: img32,
  },
  {
    title: 'Image 33',
    imageSrc: img33,
  },
  {
    title: 'Image 34',
    imageSrc: img34,
  },
  {
    title: 'Image 35',
    imageSrc: img35,
  },
  {
    title: 'Image 36',
    imageSrc: img36,
  },
  {
    title: 'Image 37',
    imageSrc: img37,
  },
  {
    title: 'Image 38',
    imageSrc: img38,
  },
  {
    title: 'Image 40',
    imageSrc: img40,
  },
]
const LoadingAnimation = () => (
  <div
    role="status"
    class="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0"
  >
    <div class="flex h-48 w-full items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 sm:w-96">
      <svg
        class="h-10 w-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  </div>
)

export default function Gallery() {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-white text-gray-800 pt-32">
      <Head>
        <title>Gallery - IEEE | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section
        id="resources"
        aria-labelledby="resources-title"
        className="scroll-mt-8 bg-blue-50 py-8 sm:scroll-mt-32 sm:py-5 lg:py-8"
      >
        <Container>
          <p className="mt-2 flex justify-center font-display text-4xl font-medium text-slate-800">
            Gallery
          </p>
        </Container>
        <Container className="mt-16">
          <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
            {resources.map((resource) => {
              return (
                <li
                  key={resource.title}
                  className="grid auto-rows-min grid-cols-1 items-center gap-6 px-3 sm:gap-y-8 md:grid-cols-1 lg:grid-cols-1 xl:px-6"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg shadow-lg md:h-56 lg:h-72">
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#0f172a)]">
                      <Image src={resource.imageSrc} alt={resource.title} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </Container>
      </section>
      <Footer />
    </section>
  )
}
