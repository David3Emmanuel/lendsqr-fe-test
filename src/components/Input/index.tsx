'use client'

import { useState } from 'react'
import styles from './style.module.scss'

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
      className={`${styles.Input} ${className || ''} ${
        type == 'search' ? styles.searchInput : ''
      }`}
    >
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button
          type='button'
          className={styles.togglePasswordButton}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
      {type === 'search' && (
        <button type='submit' className={styles.searchButton}>
          ?
        </button>
      )}
    </div>
  )
}
