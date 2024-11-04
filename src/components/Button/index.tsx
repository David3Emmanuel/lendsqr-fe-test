import style from './style.module.scss'

export default function Button({
  children,
  className,
  ...innerProps
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <button className={`${style.Button} ${className || ''}`} {...innerProps}>
      {children}
    </button>
  )
}
