import ReactMarkdown from 'react-markdown'

import type DualTextInterface from './interface'
import type { Text as TextInterface } from './interface'

import styles from './styles.module.scss'

function Text({ title, text }: TextInterface) {
  return (
    <section>
      {title && <h2 className={styles['title']}>{title}</h2>}

      <div className={styles['content']}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </section>
  )
}

export default function DualText({ leftText, rightText }: DualTextInterface) {
  return (
    <div className={styles['dual-text']}>
      <Text title={leftText.title} text={leftText.text} />
      <Text title={rightText.title} text={rightText.text} />
    </div>
  )
}
