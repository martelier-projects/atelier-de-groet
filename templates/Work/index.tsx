import type Painting from '../../interfaces/Painting'
import type Card from '../../interfaces/Card'

import SiteHeader from '../../components/modules/SiteHeader'
import Contact from '../../components/modules/Contact'

import styles from './styles.module.scss'

interface ComponentInterface {
  itemData: Painting | Card
  children: React.ReactNode
}

export default function WorkTemplate({
  itemData,
  children,
}: ComponentInterface) {
  const { title, image, width = '', height = '', type } = itemData

  return (
    <>
      <SiteHeader />

      <main className={styles['work']}>
        <section>
          <div className={styles['work__content']}>
            <h1>{title}</h1>
            {children}
          </div>
        </section>

        <figure className={styles['work__figure']}>
          <img src={image} alt="" className={styles['work__image']} />

          <figcaption className={styles['work__caption']}>
            {width && height && (
              <span>
                {width} x {height}
              </span>
            )}

            <span className={styles['work__caption-type']}>| {type}</span>
          </figcaption>
        </figure>
      </main>
      <footer id="contact">
        <Contact />
      </footer>
    </>
  )
}
