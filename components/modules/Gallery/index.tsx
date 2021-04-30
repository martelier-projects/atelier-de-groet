import { useContext } from 'react'
import type GalleryInterface from './interface'

import { CardContext } from '../../../stores/card/store'
import { PaintingContext } from '../../../stores/painting/store'

import CardPreview from '../../../containers/CardPreview'
import PaintingPreview from '../../../containers/PaintingPreview'

import styles from './styles.module.scss'

export default function Gallery({
  showCards,
  showPaintings,
}: GalleryInterface) {
  const cardStore = useContext(CardContext)
  const paintingStore = useContext(PaintingContext)

  interface Collection {
    type: string
    id: string
  }

  const ids: Collection[] = [
    ...(showCards ? cardStore.allIds.map(id => ({ id, type: 'card' })) : []),
    ...(showPaintings
      ? paintingStore.allIds.map(id => ({ id, type: 'painting' }))
      : []),
  ]

  return (
    <div className={styles['gallery-container']}>
      <h1>Gallery</h1>
      <ol className={styles['gallery']} aria-label="Kaarten">
        {ids.map(({ id, type }) => {
          return (
            <li key={id} className={styles['gallery-item']}>
              {type === 'card' && <CardPreview id={id} />}
              {type === 'painting' && <PaintingPreview id={id} />}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
