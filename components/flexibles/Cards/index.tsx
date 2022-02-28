import { useContext } from 'react'

import type CardsInterface from './interface'

import { CardContext } from '../../../stores/card/store'

import Gallery from '../../modules/Gallery'

export default function Cards({ title }: CardsInterface) {
  const cardStore = useContext(CardContext)

  return <Gallery title={title} type="cards" ids={cardStore.allIds} />
}
