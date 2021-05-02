export default {
  label: 'Kaarten',
  name: 'cards',
  create: true,
  folder: 'content/cards',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Verkocht',
      name: 'sold',
      widget: 'boolean',
      default: false,
      hint: 'Vink deze aan als de kaart is verkocht',
    },
    { label: 'Afbeelding', name: 'image', widget: 'image' },
    { label: 'Beschrijving', name: 'title', widget: 'string' },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime',
      hint: 'Dit hoef je niet aan te passen',
    },
  ],
}
