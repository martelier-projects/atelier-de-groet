import Link from 'next/link'

import type PreviewInterface from './interface'

import Size from '../../partials/Size'

import styles from './styles.module.scss'

export default function Preview({
  image,
  title,
  sold,
  width,
  height,
  url,
  type = '',
}: PreviewInterface) {
  const inner = (
    <figure className={styles['preview']}>
      <img
        className={styles['image']}
        width={width}
        height={height}
        src={`${image}?nf_resize=fit&w=550`}
        alt=""
        loading="lazy"
      />

      <figcaption className={styles['caption']}>
        <span className="sr-only">Kaart van </span>
        <span className={styles['caption-title']}>{title}</span>

        <span className={styles['size']}>
          <Size width={width} height={height} />
        </span>

        <span className={styles['type']}>| {type}</span>

        {sold ? (
          <span className={styles['sold']}>Verkocht</span>
        ) : (
          <span className={styles['buy-button']}>Koop</span>
        )}
      </figcaption>
    </figure>
  )

  return sold ? (
    inner
  ) : (
    <Link href={url} className={styles['wrapping-link']}>
      {inner}
    </Link>
  )
}
