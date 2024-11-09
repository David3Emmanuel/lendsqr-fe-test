'use client'

import useFloating from '@/utils/useFloating'
import style from './style.module.scss'

export default function Notifications() {
  const { parentRef, open, toggleOpen } = useFloating()

  return (
    <div
      className={`${style.Notifications} ${open ? style.open : ''}`}
      ref={parentRef}
    >
      <button aria-label='notifications' onClick={toggleOpen}>
        <i className='fa-regular fa-bell' />
      </button>
      {open && (
        <div className={style.child}>
          <h2>No notifications</h2>
        </div>
      )}
    </div>
  )
}
