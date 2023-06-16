import Image from 'next/image'
import logoimg from '@/images/logos/ieee_icon.png'
export function Logo(props) {
  return (
    <div className="flex items-center">
      <Image
        src={logoimg}
        alt="IEEE Computational Intelligence Society"
        width={70}
        height={57}
      />
    </div>
  )
}
