import type Page from '../../interfaces/Page'

import FlexibleContent from '../../components/modules/FlexibleContent'
import SiteHeader from '../../components/modules/SiteHeader'

import styles from './styles.module.scss'

export default function DefaultTemplate({ title, sections }: Page) {
  return (
    <>
      <SiteHeader />
      <header>
        <h1>{title}</h1>
      </header>

      <main className={styles['container']}>
        <FlexibleContent sections={sections} />
      </main>
    </>
  )
}
