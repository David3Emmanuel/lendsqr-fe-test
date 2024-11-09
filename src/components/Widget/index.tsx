import style from './style.module.scss'

// TODO pin widgets to dashboard overview

export function Widget({ children }: { children?: React.ReactNode }) {
  return <div className={style.Widget}>{children}</div>
}

export function WidgetGroup({ children }: { children: React.ReactNode }) {
  return <div className={style.WidgetGroup}>{children}</div>
}

export function WidgetIcon({
  icon,
  color = 'blue',
}: {
  icon: string
  color?: string
}) {
  return (
    <div className={`${style.WidgetIcon} ${style[color]}`}>
      <i className={`fa-solid fa-${icon}`} />
    </div>
  )
}

export function WidgetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={style.WidgetTitle}>{children}</h2>
}

export function WidgetSummary({ children }: { children: React.ReactNode }) {
  return <h3 className={style.WidgetSummary}>{children}</h3>
}
