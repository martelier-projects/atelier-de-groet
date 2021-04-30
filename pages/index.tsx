import Head from 'next/head'
import { useContext } from 'react'

import { attributes, react as HomeContent } from '../content/home.md'

import { CardContext } from '../stores/card/store'

import Gallery from '../components/modules/Gallery'

interface PageAttributes {
  title: string
}

export default function Home() {
  const { title }: PageAttributes = attributes

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>

      <Gallery showCards={true} showPaintings={true} />
    </>
  )
}
