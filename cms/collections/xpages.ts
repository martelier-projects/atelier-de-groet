export default {
  name: 'pages',
  label: 'Pages',
  files: [
    {
      label: 'Home',
      name: 'home',
      file: 'content/home.md',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Body', name: 'body', widget: 'markdown' },
      ],
    },
  ],
}
