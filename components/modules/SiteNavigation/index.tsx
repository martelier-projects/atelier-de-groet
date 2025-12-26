import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/dist/client/router'
import type SiteNavigationInterface from './interface'
import type Navigation from '../../../interfaces/Navigation'

import { attributes } from '../../../content/globals/navigation.md'

import styles from './styles.module.scss'

// import Cross from '../../../public/icons/cross.svg'
// import Hamburger from '../../../public/icons/hamburger.svg'

export default function SiteNavigation({
  mobileMenuIsOpen,
}: SiteNavigationInterface) {
  const { items }: Navigation = attributes
  const [isHovering, setIsHovering] = useState(false)
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
    <nav
      role="navigation"
      className={styles['site-navigation']}
      data-menu-is-open={mobileMenuIsOpen}
      data-is-hovering={isHovering}
    >
      <ul className={styles['site-navigation__list']}>
        {items.map(({ label, pageLink }) => (
          <li
            key={`navigation-item-${pageLink}`}
            className={styles['site-navigation__item']}
          >
            <Link
              href={pageLink}
              className={styles['site-navigation__link']}
              data-active={pathName === pageLink}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
