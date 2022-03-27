import type ComponentInterface from './interface'

import RichContent from '../../modules/RichContent'

import classes from '../../../utils/classes'

import styles from './styles.module.scss'

export default function TextMedia({
  order,
  title,
  text,
  image,
  imageAlt,
}: ComponentInterface) {
  const textMediaClasses = classes({
    [styles['text-media']]: true,
    [styles['text-media--media-right']]: order === 'text-image',
    [styles['text-media--media-left']]: order === 'image-text',
  })

  const mediaBlock = (
    <figure className={styles['text-media__media']}>
      <img
        src={`${image}?w=800`}
        alt={imageAlt}
        className={styles['text-media__image']}
      />
    </figure>
  )

  const textBlock = (
    <div className={styles['text-media__content']}>
      {title && <h2 className={styles['text-media__title']}>{title}</h2>}

      <div className={styles['text-media__inner-content']}>
        <RichContent>{text}</RichContent>
      </div>
    </div>
  )

  return (
    <div className={textMediaClasses}>
      <div className={styles['text-media__inner']}>
        {mediaBlock}
        {textBlock}
      </div>
    </div>
  )
}
