export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'fullPageWidth',
      type: 'boolean',
      title: 'Full page width',
    },
    {
      name: 'sideStick',
      type: 'string',
      title: 'Stick to side',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'}
        ]
      }
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
