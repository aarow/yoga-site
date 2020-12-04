export default {
  type: 'object',
  name: 'articleList',
  title: 'Article List',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'headingAlignment',
      type: 'string',
      title: 'Heading Alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
    },
    {
      name: 'count',
      type: 'number',
      title: 'Count of Articles',
    },
  ],
}
