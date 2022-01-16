import slugify from 'slugify'
import { useContext } from 'react'

import type PaintingPreviewInterface from './interface'

import { PaintingContext } from '../../stores/painting/store'

import Preview from '../../components/modules/Preview'

export default function PaintingPreview({ id }: PaintingPreviewInterface) {
  const paintingStore = useContext(PaintingContext)

  const painting = paintingStore.byId[id]

  if (!painting) return null

  return (
    <Preview
      image={painting.image}
      title={painting.title}
      sold={painting.sold || false}
      width={painting.width}
      height={painting.height}
      url={`/schilderijen/${slugify(painting.title)}`}
    />
  )
}
