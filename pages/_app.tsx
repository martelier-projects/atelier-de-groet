import type { AppProps, AppContext } from 'next/app'
import type { CardStore } from '../stores/card/interface'
import type { PaintingStore } from '../stores/painting/interface'

import createCardStore, { CardContext } from '../stores/card/store'
import createPaintingStore, { PaintingContext } from '../stores/painting/store'

import '../styles/globals.scss'

interface AppInterface extends AppProps {
  cardStore: CardStore
  paintingStore: PaintingStore
}

export default function App({
  Component,
  pageProps,
  cardStore,
  paintingStore,
}: AppInterface) {
  return (
    <CardContext.Provider value={cardStore}>
      <PaintingContext.Provider value={paintingStore}>
        <Component {...pageProps} />
      </PaintingContext.Provider>
    </CardContext.Provider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const cardStore = createCardStore()
  const paintingStore = createPaintingStore()

  return { cardStore, paintingStore }
}
