export default {
  label: 'Schilderijen',
  name: 'paintings',
  create: true,
  folder: 'content/paintings',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Verkocht',
      name: 'sold',
      widget: 'boolean',
      default: false,
      hint: 'Vink deze aan als het schilderij is verkocht',
    },
    { label: 'Afbeelding', name: 'image', widget: 'image' },
    { label: 'Beschrijving', name: 'title', widget: 'string' },
    {
      label: 'Breedte',
      name: 'width',
      widget: 'string',
      hint: 'Breedte in CM',
    },
    {
      label: 'Hoogte',
      name: 'height',
      widget: 'string',
      hint: 'Hoogte in CM',
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime',
      hint: 'Dit hoef je niet aan te passen',
    },
  ],
}
