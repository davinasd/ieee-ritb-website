// This is just a test commit
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Head>
        <title>IEEE Student Branch | Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="Home - IEEE Student Branch | Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top shadow-lg">
          <ArrowCircleUpIcon
            sx={{
              fontSize: '40px',
              width: 40,
              height: 40,
              padding: 0.7,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #002a8f, #00b5f5)',
            }}
          />
        </button>
      )}
    </>
  )
}
