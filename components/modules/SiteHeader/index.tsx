import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FocusTrap from 'focus-trap-react'

import Link from 'next/link'

import { breakpointMedium } from '../../../utils/breakpoints'
import classes from '../../../utils/classes'

import SkipLink from '../../partials/SkipLink'
import SiteNav from '../SiteNav'
import Hamburger from '../../partials/Hamburger'

import styles from './styles.module.scss'

export default function SiteHeader() {
  const router = useRouter()
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const isClosedLabel = 'Open menu'
  const isOpenLabel = 'Sluit menu'

  const headerClasses = classes({
    [styles['site-header']]: true,
    [styles['site-header--is-expanded']]: mobileNavIsOpen,
  })

  useEffect(() => {
    setMobileNavIsOpen(false)

    // Hide menu overlay when screen is big enough
    const onResize = () => {
      if (window.innerWidth > breakpointMedium) {
        setMobileNavIsOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    onResize()

    // Hide menu overlay after navigating to a different page
    const handleRouteChangeComplete = () => setMobileNavIsOpen(false)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      window.removeEventListener('resize', onResize)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  const toggleMenuVisibility = () => {
    setMobileNavIsOpen(!mobileNavIsOpen)

    // Add class to document for additional styling
    // Todo: move this to a global UI Context
    document.documentElement.classList.toggle(
      'has-active-site-nav',
      !mobileNavIsOpen
    )
  }

  return (
    <>
      <SkipLink id="content" label="Ga naar de content" />

      <div className={styles['site-header__spacer']} />

      <header className={headerClasses}>
        <FocusTrap active={mobileNavIsOpen}>
          <div className={styles['site-header__inner']}>
            <Link href="/">
              <a className={styles['site-header__logo']}>
                <img
                  src="/images/logo.jpg?nf_resize=fit&w=400"
                  alt="Logo van Atelier de groet: een geschilderde hand"
                />
                <span className="sr-only">Home</span>
              </a>
            </Link>

            <button
              className={styles['site-header__nav-toggle']}
              type="button"
              onClick={toggleMenuVisibility}
              aria-haspopup="true"
              aria-expanded={mobileNavIsOpen}
              aria-controls="site-navigation"
            >
              <Hamburger isCross={mobileNavIsOpen} />
              <span className="sr-only">
                {mobileNavIsOpen ? isOpenLabel : isClosedLabel}
              </span>
            </button>

            <div
              id="site-navigation"
              className={styles['site-header__nav-container']}
              data-is-open={mobileNavIsOpen}
            >
              <SiteNav />
            </div>
          </div>
        </FocusTrap>
      </header>
    </>
  )
}
