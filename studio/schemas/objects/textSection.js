export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
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
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'classes',
      type: 'string',
      title: 'Classes',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      }
    },
  },
}
