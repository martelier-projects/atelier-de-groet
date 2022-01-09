import type ImageInterface from './interface'

import styles from './styles.module.scss'

export default function Image({ image }: ImageInterface) {
  return (
    <figure className={styles['image']}>
      <img className={styles['image__image']} src={image} alt="" />
    </figure>
  )
}
