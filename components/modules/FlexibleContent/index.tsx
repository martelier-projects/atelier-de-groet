import type FlexibleContentInterface from './interface'

import Text from '../../flexibles/Text'
import Gallery from '../../flexibles/Gallery'
import RichText from '../../flexibles/RichText'

import styles from './styles.module.scss'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <div className={styles['container']}>
      {sections.map((section, index) => {
        if (section.component === 'text') {
          return <Text key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'gallery') {
          return <Gallery key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'rich-text') {
          return <RichText key={`flexible-content-${index}`} {...section} />
        }
        return null
      })}
    </div>
  )
}
