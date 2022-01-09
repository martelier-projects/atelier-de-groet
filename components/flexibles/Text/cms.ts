import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Text',
  name: 'text',
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
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: [
        'bold',
        'italic',
        // 'code',
        'link',
        // 'heading-one',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        // 'quote',
        'bulleted-list',
        'numbered-list',
      ],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'text',
    },
  ],
}
