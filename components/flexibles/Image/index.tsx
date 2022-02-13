import classes from '../../../utils/classes'
import type ImageInterface from './interface'

import styles from './styles.module.scss'

export default function Image({ image, size = 'large' }: ImageInterface) {
  const classNames = classes({
    [styles['image']]: true,
    [styles['image--large']]: size === 'large',
    [styles['image--medium']]: size === 'medium',
  })

  return (
    <figure className={classNames}>
      <img className={styles['image__image']} src={image} alt="" />
    </figure>
  )
}
