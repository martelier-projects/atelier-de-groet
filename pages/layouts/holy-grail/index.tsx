import DefaultTemplate from '../../../templates/Default'

import styles from './styles.module.scss'

export default function HolyGrail() {
  return (
    <DefaultTemplate
      title="Holy grail"
      intro="Some more info about the holy grail"
    >
      <div className={styles['holy-grail']}>
        <section className={styles['holy-grail-item']}>
          <p>The header</p>
        </section>
        <section className={styles['holy-grail-item']}>
          <p>The aside</p>
        </section>
        <section className={styles['holy-grail-item']}>
          <p>The main</p>
        </section>
        <section className={styles['holy-grail-item']}>
          <p>The aside</p>
        </section>
        <section className={styles['holy-grail-item']}>
          <p>The footer</p>
        </section>
      </div>
    </DefaultTemplate>
  )
}
