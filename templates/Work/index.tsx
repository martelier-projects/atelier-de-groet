import type Painting from '../../interfaces/Painting'
import type Card from '../../interfaces/Card'

import SiteHeader from '../../components/modules/SiteHeader'

import styles from './styles.module.scss'

export default function WorkTemplate({
  title,
  image,
  width = '',
  height = '',
  type,
}: Painting | Card) {
  return (
    <>
      <SiteHeader />

      <main className={styles['work']}>
        <section>
          <div className={styles['work__content']}>
            {/* <h1>Werk kopen</h1> */}
            <h1>{title}</h1>
            <p>
              Here is more info about the painting! Here is more info about the
              painting! Here is more info about the painting! Here is more info
              about the painting! Here is more info about the painting! Here is
              more info about the painting! Here is more info about the
              painting! Here is more info about the painting! Here is more info
              about the painting! Here is more info about the painting! Here is
              more info about the painting! Here is more info about the
              painting!
            </p>
            <p>
              Je kan me mailen op ..... of deze automatisch gegenereerde email
              gebruiken....
            </p>
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
    </>
  )
}
