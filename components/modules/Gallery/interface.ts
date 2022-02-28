// import type Card from '../../../interfaces/Card'
// import type Painting from '../../../interfaces/Painting'

export default interface Gallery {
  title: string
  ids: string[]
  type: 'cards' | 'paintings'
}
