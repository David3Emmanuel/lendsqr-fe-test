'use client'

import { useState } from 'react'
import style from './style.module.scss'

export default function Input({
  type,
  placeholder,
  className,
  value,
  setValue,
}: {
  type: React.HTMLInputTypeAttribute
  placeholder: string
  className?: string
  value?: string
  setValue?: (value: string) => void
}) {
  const [showPassword, setShowPassword] = useState(false)

  const [ownValue, setOwnValue] = useState('')

  return (
    <div
      className={`${style.Input} ${className || ''} ${
        type == 'search' ? style.searchInput : ''
      }`}
    >
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value || ownValue}
        onChange={(e) => (setValue || setOwnValue)(e.target.value)}
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
        <button
          type='submit'
          className={style.searchButton}
          aria-label='search'
        >
          <i className='fa-solid fa-magnifying-glass' />
        </button>
      )}
    </div>
  )
}
