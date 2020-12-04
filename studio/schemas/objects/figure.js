export default {
  name: 'figure',
  title: 'Image',
  type: 'object',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
