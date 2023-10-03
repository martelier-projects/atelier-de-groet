import { join } from 'path'
import slugify from 'slugify'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type Card from '../../interfaces/Card'

import { getAllItems } from '../../utils/content/getItemSlugs'
import fixDateFormat from '../../utils/content/fixDateFormat'
import getSlugFromContext from '../../utils/get-slug-from-context/index'

import WorkTemplate from '../../templates/Work'

interface PageAttributes {
  cardData: Card
}

export default function Paintings({ cardData }: PageAttributes) {
  return (
    <>
      <WorkTemplate itemData={cardData}>
        <p>
          De meeste kaarten zijn gemaakt in oliepastel. Allemaal ingelijst in
          een passe-partout. De maten zijn divers.
        </p>{' '}
        <p>
          De kaarten zijn te koop in mijn atelier (of via een mailtje naar{' '}
          <a
            href={`mailto:atelierdegroet@gmail.com?subject=Kaart: ${cardData.title}`}
          >
            ) atelierdegroet@gmail.com
          </a>{' '}
          voor €10,- per stuk.
        </p>
      </WorkTemplate>
    </>
  )
}

/**
 * Get data for a specific page and insert as props.
 */
export const getStaticProps: GetStaticProps = async context => {
  const slug = getSlugFromContext(context)

  const cardsPath = join(process.cwd(), 'content/cards')
  const cardData = getAllItems(cardsPath)
    .map(fixDateFormat)
    .find(a => `/${slugify(a.title)}` === slug)

  return {
    props: {
      cardData,
    },
  }
}

/**
 * Get all static paths for Next.js to generate URLs.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paintingsPath = join(process.cwd(), 'content/cards')
  const paintings = getAllItems(paintingsPath)

  const paths = paintings.map(({ title }) => `/oliepastel/${slugify(title)}`)

  return {
    paths,
    fallback: false,
  }
}
