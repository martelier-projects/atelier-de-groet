import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Kaarten (toon alle kaarten)',
  name: 'cards',
  widget: 'object',
  summary: 'Kaarten',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'cards',
    },
  ],
}
