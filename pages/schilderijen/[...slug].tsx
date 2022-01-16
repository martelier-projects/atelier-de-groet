import { join } from 'path'
import slugify from 'slugify'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type Painting from '../../interfaces/Painting'

import { getAllItems } from '../../utils/content/getItemSlugs'
import fixDateFormat from '../../utils/content/fixDateFormat'
import getSlugFromContext from '../../utils/get-slug-from-context/index'

import WorkTemplate from '../../templates/Work'

interface PageAttributes {
  pageData: Painting
}

export default function Paintings({ pageData }: PageAttributes) {
  return (
    <>
      <WorkTemplate {...pageData} />
    </>
  )
}

/**
 * Get data for a specific page and insert as props.
 */
export const getStaticProps: GetStaticProps = async context => {
  const slug = getSlugFromContext(context)

  const cardsPath = join(process.cwd(), 'content/paintings')
  const cardData = getAllItems(cardsPath)
    .map(fixDateFormat)
    .find(a => `/${slugify(a.title)}` === slug)

  return {
    props: {
      pageData: cardData,
    },
  }
}

/**
 * Get all static paths for Next.js to generate URLs.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paintingsPath = join(process.cwd(), 'content/paintings')
  const paintings = getAllItems(paintingsPath)

  const paths = paintings.map(({ title }) => `/schilderijen/${slugify(title)}`)

  return {
    paths,
    fallback: false,
  }
}
