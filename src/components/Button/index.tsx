'use client'

import style from './style.module.scss'

export default function Button({
  children,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <button
      type={type}
      className={`${style.Button} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
