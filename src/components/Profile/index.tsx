import style from './style.module.scss'
import Image from 'next/image'
import profilePic from '@/public/profile-pic.png'

export default function Profile({
  expanded,
  className,
}: {
  expanded: boolean
  className?: string
}) {
  return (
    <div className={`${style.Profile} ${className || ''}`}>
      <div className={style.profilePic}>
        <Image src={profilePic} alt='Profile Picture' />
      </div>
      {expanded && <h2>John Doe</h2>}
      <button className={style.dropdown} aria-label='profile dropdown'>
        <i className='fa-solid fa-caret-down' />
      </button>
    </div>
  )
}
