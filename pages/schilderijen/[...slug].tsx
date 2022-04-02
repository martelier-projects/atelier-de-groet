import { join } from 'path'
import slugify from 'slugify'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type Painting from '../../interfaces/Painting'

import { getAllItems } from '../../utils/content/getItemSlugs'
import fixDateFormat from '../../utils/content/fixDateFormat'
import getSlugFromContext from '../../utils/get-slug-from-context/index'

import WorkTemplate from '../../templates/Work'

interface PageAttributes {
  paintingData: Painting
}

export default function Paintings({ paintingData }: PageAttributes) {
  return (
    <>
      <WorkTemplate itemData={paintingData}>
        <>
          <p>
            Dit is een verzameling van 50 olieverfschilderijtjes van 20x20,
            genaamd "wandelingen". Allemaal gemaakt naar foto’s van mijn
            dagelijkse wandelingen in de buurt van Groet .
          </p>
          <p>
            De schilderijen zijn te koop in mijn atelier (of via een mailtje
            naar{' '}
            <a
              href={`mailto:atelierdegroet@gmail.com?subject=Schilderij: ${paintingData.title}`}
            >
              atelierdegroet@gmail.com
            </a>
            ) voor €50,- per stuk.
          </p>
        </>
      </WorkTemplate>
    </>
  )
}

/**
 * Get data for a specific page and insert as props.
 */
export const getStaticProps: GetStaticProps = async context => {
  const slug = getSlugFromContext(context)

  const cardsPath = join(process.cwd(), 'content/paintings')
  const paintingData = getAllItems(cardsPath)
    .map(fixDateFormat)
    .find(a => `/${slugify(a.title)}` === slug)

  return {
    props: {
      paintingData,
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
