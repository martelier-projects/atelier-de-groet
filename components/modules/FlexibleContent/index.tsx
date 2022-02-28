import type FlexibleContentInterface from './interface'

import Text from '../../flexibles/Text'
import DualText from '../../flexibles/DualText'
import Cards from '../../flexibles/Cards'
import Paintings from '../../flexibles/Paintings'
import Image from '../../flexibles/Image'
import TextMedia from '../../flexibles/TextMedia'

import styles from './styles.module.scss'

const flexibleMap = {
  'dual-text': DualText,
  text: Text,
  cards: Cards,
  paintings: Paintings,
  image: Image,
  'text-media': TextMedia,
}

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <div className={styles['container']}>
      {sections.map((section, index) => {
        // @ts-ignore
        const Component = flexibleMap[section.component]

        if (Component) {
          return <Component key={`flexible-content-${index}`} {...section} />
        }
        return null
      })}
    </div>
  )
}
