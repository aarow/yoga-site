export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'author_name',
      type: 'string',
      title: 'Author Name'
    },
    {
      name: 'bio',
      type: 'portableText',
      title: 'Bio'
    },
    {
      name: 'avatar',
      type: 'figure',
      title: 'Avatar'
    }
  ]
}
