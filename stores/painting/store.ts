import type Painting from '../../interfaces/Painting'
import type { PaintingStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let instance: PaintingStore | null = null

export default function createPaintingStore() {
  if (!instance) {
    instance = createStore('content/paintings', 'title')
  }

  return instance
}

export const PaintingContext = contextFactory<Painting>()
