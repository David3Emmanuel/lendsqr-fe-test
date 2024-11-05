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
  if (type === 'string') return <td>{value as string}</td>
  if (type === 'number') return <td>{value as number}</td>
  if (type === 'date') return <td>{formatDate(value as Date)}</td>

  if (type === 'pill') {
    const pill = value as Pill

    return (
      <td>
        <span className={`${style.pill} ${style[pill.color]}`}>
          {pill.text}
        </span>
      </td>
    )
  }
}
