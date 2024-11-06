import { Pill, ColumnType } from './types'
import style from './style.module.scss'

function formatDate(date: Date): string {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  const formattedDate = date.toLocaleDateString('en-US', dateOptions)
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions)
  return `${formattedDate} ${formattedTime}`
}

export default function TableData({
  type,
  value,
}: {
  type: ColumnType
  value: string | number | Date | Pill
}) {
  let content
  switch (type) {
    case 'string':
      content = value as string
      break
    case 'number':
      content = value as number
      break
    case 'date':
      content = formatDate(value as Date)
      break
    case 'pill':
      const pill = value as Pill
      content = (
        <span className={`${style.pill} ${style[pill.color]}`}>
          {pill.text}
        </span>
      )
      break
    default:
      content = null
  }

  return (
    <div className={style.td} role='cell'>
      {content}
    </div>
  )
}
