import style from './style.module.scss'

export default function Select({
  options,
  className,
}: {
  options: { value: string; label: string }[]
  className?: string
}) {
  return (
    <div className={`${style.Select} ${className || ''}`}>
      <select>
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
