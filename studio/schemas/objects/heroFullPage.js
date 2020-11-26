export default {
  type: 'object',
  name: 'heroFullPage',
  title: 'Hero Full Page',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'calendlyItem',
      type: 'calendly',
      title: 'Calendly',
    },
  ],
}
