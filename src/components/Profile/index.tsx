import style from './style.module.scss'

export default function Profile({
  expanded,
  className,
}: {
  expanded: boolean
  className?: string
}) {
  return (
    <div className={`${style.Profile} ${className || ''}`}>
      <div className={style.profilePic}></div>
      {expanded && <h2>John Doe</h2>}
      <span>?</span>
    </div>
  )
}
