import type GalleryInterface from './interface'

import CardPreview from '../../../containers/CardPreview'
import PaintingPreview from '../../../containers/PaintingPreview'

import styles from './styles.module.scss'

export default function Gallery({ title, ids, type }: GalleryInterface) {
  return (
    <div className={styles['gallery']}>
      <h1 className={styles['gallery__title']}>{title}</h1>

      <ol className={styles['gallery__list']} aria-label="Kaarten">
        {ids.map(id => {
          return (
            <li key={id} className={styles['gallery__item']}>
              {type === 'cards' && <CardPreview id={id} />}
              {type === 'paintings' && <PaintingPreview id={id} />}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
