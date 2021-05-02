import Head from 'next/head'
import { useEffect } from 'react'

import config from '../cms'

export default function CMSPage() {
  useEffect(() => {
    const typedWindow: any = window

    if (typedWindow.netlifyIdentity) {
      typedWindow.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          typedWindow.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }

    const { initCMS } = typedWindow
    initCMS({
      config,
    })
  }, [])

  return (
    <Head>
      <script>window.CMS_MANUAL_INIT = true</script>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js" />
    </Head>
  )
}
