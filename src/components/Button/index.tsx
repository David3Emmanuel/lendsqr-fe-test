'use client'

import style from './style.module.scss'

export default function Button({
  children,
  className,
  onClick,
  ...innerProps
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}) {
  return (
    <button
      className={`${style.Button} ${className || ''}`}
      onClick={onClick}
      {...innerProps}
    >
      {children}
    </button>
  )
}
