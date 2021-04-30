import type Card from '../../interfaces/Card'
import type { CardStore } from './interface'

import createStore from '../create-store'
import contextFactory from '../context-factory'

let instance: CardStore | null = null

export default function createCardStore() {
  if (!instance) {
    instance = createStore('content/cards', 'title')
  }

  return instance
}

export const CardContext = contextFactory<Card>()
