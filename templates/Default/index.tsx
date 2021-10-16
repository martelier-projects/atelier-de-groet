import FlexibleContent from '../../components/modules/FlexibleContent'
import Page from '../../interfaces/Page'

import styles from './styles.module.scss'

export default function DefaultTemplate({ title, sections }: Page) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>

      <main className={styles['container']}>
        <FlexibleContent sections={sections} />
      </main>
    </>
  )
}
