'use client'

import style from './style.module.scss'

export default function Button({
  children,
  className,
  onClick,
  type,
  secondary,
  ariaLabel,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  secondary?: boolean
  ariaLabel?: string
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={`${style.Button} ${secondary ? style.secondary : ''} ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
