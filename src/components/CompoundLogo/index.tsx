import Image from 'next/image'
import style from './style.module.scss'
import logo from '@/app/icon.svg'

export default function CompoundLogo({ className }: { className?: string }) {
  return (
    <div className={`${style.CompoundLogo} ${className || ''}`}>
      <Image src={logo} alt='Logo' height={25} />
      <h1>lendsqr</h1>
    </div>
  )
}
