import Link from 'next/link'

import type Navigation from '../../../interfaces/Navigation'

import { attributes } from '../../../content/globals/navigation.md'

import styles from './styles.module.scss'

export default function Nav() {
  const { items }: Navigation = attributes

  return (
    <nav className={styles['site-nav']} role="navigation">
      <ul className={styles['site-nav__list']}>
        {items?.map(({ label, pageLink }) => (
          <li
            key={`navigation-item-${pageLink}`}
            className={styles['site-nav__item']}
          >
            <Link href={pageLink}>
              <a className={styles['site-nav__link']}>
                <span className={styles['site-nav__link-label']}>{label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
