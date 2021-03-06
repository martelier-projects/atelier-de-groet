import styles from './styles.module.scss'

import Instagram from '../../../public/icons/instagram.svg'

export default function Contact() {
  return (
    <section className={styles['contact']}>
      <div className={styles['contact__inner']}>
        <h2>Contact</h2>
        <div className={styles['contact__item']}>Marijke Takken</div>
        <address>
          Heereweg 230
          <br />
          1873 GD, Groet
        </address>
        <div className={styles['contact__item']}>
          <div>
            Mobiel: <a href="tel:+31653337109">06 - 53 33 71 09</a>
          </div>
          <div>
            Email:{' '}
            <a href="mailto:atelierdegroet@gmail.com">
              atelierdegroet@gmail.com
            </a>
          </div>
        </div>
        <div className={styles['contact__item']}>
          <a href="https://www.instagram.com/atelierdegroet">
            <Instagram />
          </a>
        </div>
      </div>
    </section>
  )
}
