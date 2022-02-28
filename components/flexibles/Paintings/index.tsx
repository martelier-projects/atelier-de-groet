import { useContext } from 'react'

import type PaintingsInterface from './interface'

import { PaintingContext } from '../../../stores/painting/store'

import Gallery from '../../modules/Gallery'

export default function Paintings({ title }: PaintingsInterface) {
  const paintingStore = useContext(PaintingContext)

  return <Gallery title={title} type="paintings" ids={paintingStore.allIds} />
}
