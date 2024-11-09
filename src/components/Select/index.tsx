'use client'

import { useState } from 'react'
import style from './style.module.scss'

export default function Select({
  options,
  className,
  value,
  setValue,
  name,
}: {
  options: { value: string; label: string }[]
  className?: string
  value?: string
  setValue?: (value: string) => void
  name?: string
}) {
  const [ownValue, setOwnValue] = useState<string>(options[0]?.value || '')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    if (setValue) {
      setValue(newValue)
    } else {
      setOwnValue(newValue)
    }
  }

  return (
    <div className={`${style.Select} ${className || ''}`}>
      <select
        name={name}
        value={value || ownValue}
        onChange={handleChange}
        aria-label={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <i className={`fa-solid fa-chevron-down ${style.icon}`} />
    </div>
  )
}
