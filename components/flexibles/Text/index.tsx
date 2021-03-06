import ReactMarkdown from 'react-markdown'

import type TextInterface from './interface'

import styles from './styles.module.scss'

export default function Text({ title, text }: TextInterface) {
  return (
    <section className={styles['text']}>
      <div className={styles['text__inner']}>
        {title && <h2 className={styles['title']}>{title}</h2>}

        <div className={styles['content']}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
