import { useContext } from 'react'

import type CardPreviewInterface from './interface'

import { CardContext } from '../../stores/card/store'

import Preview from '../../components/modules/Preview'

export default function CardPreview({ id }: CardPreviewInterface) {
  const cardStore = useContext(CardContext)

  const card = cardStore.byId[id]

  if (!card) return null

  return (
    <Preview
      image={card.image}
      title={card.title}
      sold={card.sold || false}
      width="13"
      height="18"
    />
  )
}
