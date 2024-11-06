'use client'

import { useState } from 'react'
import style from './style.module.scss'

export default function Input({
  type,
  placeholder,
  className,
}: {
  type: React.HTMLInputTypeAttribute
  placeholder: string
  className?: string
}) {
  const [showPassword, setShowPassword] = useState(false)

  // TODO add material icon for search

  return (
    <div
      className={`${style.Input} ${className || ''} ${
        type == 'search' ? style.searchInput : ''
      }`}
    >
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button
          type='button'
          className={style.togglePasswordButton}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
      {type === 'search' && (
        <button type='submit' className={style.searchButton}>
          <i className='fa-solid fa-magnifying-glass' />
        </button>
      )}
    </div>
  )
}
