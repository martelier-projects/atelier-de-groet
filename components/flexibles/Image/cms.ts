import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Image',
  name: 'image',
  widget: 'object',
  summary: 'Image',
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'image',
    },
  ],
}
