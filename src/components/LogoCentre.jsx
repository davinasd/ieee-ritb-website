import Image from 'next/image'
export function Logo(props) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="https://cis.ieee.org/images/files/template/cis-logo.png"
        alt="IEEE Computational Intelligence Society"
        width={109}
        height={40}
      />
    </div>
  )
}
