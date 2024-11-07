'use client'

import style from './style.module.scss'

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <button className={`${style.Button} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
