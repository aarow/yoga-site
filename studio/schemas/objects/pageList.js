export default {
  type: 'object',
  name: 'pageList',
  title: 'Page List',
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
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    },
    {
      title: 'Pages',
      name: 'pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Page list section',
      }
    },
  },
}
