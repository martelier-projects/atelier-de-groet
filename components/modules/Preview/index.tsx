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
}: PreviewInterface) {
  return (
    <>
      <figure className={styles['preview']}>
        <img className={styles['image']} src={image} alt="" />

        <figcaption className={styles['caption']}>
          <span className="sr-only">Kaart van </span>
          <span className={styles['caption-title']}>{title}</span>

          <span className={styles['size']}>
            <Size width={width} height={height} />
          </span>

          {sold ? (
            <span className={styles['sold']}>Verkocht</span>
          ) : (
            <Link href={url}>
              {/* <a
              href="mailto:someone@yoursite.com?subject=Big%20News&body=Body-goes-here"
              className={styles['buy-button']}
              >
              Koop
            </a> */}
              <a className={styles['buy-button']}>Koop</a>
            </Link>
          )}
        </figcaption>
      </figure>
    </>
  )
}
