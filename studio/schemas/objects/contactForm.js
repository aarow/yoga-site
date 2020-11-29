export default {
  type: 'object',
  name: 'contactForm',
  title: 'Contact Form',
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
      name: 'classes',
      type: 'string',
      title: 'Classes',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'BackgroundColor',
    },
  ],
}
