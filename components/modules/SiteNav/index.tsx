import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import type Navigation from '../../../interfaces/Navigation'

import { attributes } from '../../../content/globals/navigation.md'

import styles from './styles.module.scss'

const removeTrailingSlash = (path: string) =>
  path.endsWith('/') ? path.slice(0, -1) : path

export default function Nav() {
  const { items }: Navigation = attributes

  const [pathName, setPathName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => setPathName(url)

    handleRouteChange(window.location.pathname)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <nav className={styles['site-nav']} role="navigation">
      <ul className={styles['site-nav__list']}>
        {items?.map(({ label, pageLink }) => (
          <li
            key={`navigation-item-${pageLink}`}
            className={styles['site-nav__item']}
          >
            <Link href={pageLink}>
              <a
                className={styles['site-nav__link']}
                data-active={
                  removeTrailingSlash(pathName) ===
                  removeTrailingSlash(pageLink)
                }
              >
                <span className={styles['site-nav__link-label']}>{label}</span>
              </a>
            </Link>
          </li>
        ))}
        <li
          key={`navigation-item-contact`}
          className={styles['site-nav__item']}
        >
          <a href="#contact" className={styles['site-nav__link']}>
            <span className={styles['site-nav__link-label']}>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
