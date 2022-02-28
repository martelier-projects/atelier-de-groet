import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Schilderijen (toon alle schilderijen)',
  name: 'paintings',
  widget: 'object',
  summary: 'Schilderijen',
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
      default: 'paintings',
    },
  ],
}
