import type { ReactElement } from 'react'

import styles from './styles.module.scss'

interface Props {
  title: string
  children: ReactElement

  subtitle?: string
  intro?: string
}

export default function DefaultTemplate({
  children,
  title,
  subtitle,
  intro,
}: Props) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {intro && <p>intro</p>}
      </header>
      <main className={styles['container']}>{children}</main>
    </>
  )
}
