import type SizeInterface from './interface'

import styles from './styles.module.scss'

export default function Size({ width, height }: SizeInterface) {
  return (
    <div className={styles['size-list']}>
      <dl className={styles['list']}>
        <dt className="sr-only">Breedte</dt>
        <dd className={styles['item']}>
          {width} <span className="sr-only">Centimeter</span>
        </dd>

        <span className={styles['separator']} aria-hidden="true">
          X
        </span>

        <dt className="sr-only">Hoogte</dt>
        <dd className={styles['item']}>
          {height} <span className="sr-only">Centimeter</span>
        </dd>
      </dl>

      <span className={styles['unit']} aria-hidden="true">
        CM
      </span>
    </div>
  )
}
