import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Gallery',
  name: 'gallery',
  widget: 'object',
  summary: 'Text | {{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Toon de kaarten',
      name: 'showCards',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Toon de schilderijen',
      name: 'showPaintings',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'gallery',
    },
  ],
}
