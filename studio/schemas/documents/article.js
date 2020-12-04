export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
    },
    {
      name: 'publishDate',
      type: 'datetime',
      title: 'Publish Date',
    },
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author',
        },
      ],
      title: 'Author',
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Content',
    },
    {
      name: 'featured_image',
      type: 'figure',
      title: 'Featured Image',
    },
  ],
}
