import style from './style.module.scss'

export function Widget({ children }: { children?: React.ReactNode }) {
  return <div className={style.Widget}>{children}</div>
}

export function WidgetGroup({ children }: { children: React.ReactNode }) {
  return <div className={style.WidgetGroup}>{children}</div>
}

export function WidgetIcon({ children }: { children: React.ReactNode }) {
  return <div className={style.WidgetIcon}>?</div>
}

export function WidgetTitle({ children }: { children: React.ReactNode }) {
  return <h3 className={style.WidgetTitle}>{children}</h3>
}

export function WidgetSummary({ children }: { children: React.ReactNode }) {
  return <h3 className={style.WidgetSummary}>{children}</h3>
}
