export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbc06818f7e981e79af617c',
                  title: 'Sanity Studio',
                  name: 'yoga-site-studio',
                  apiId: 'b7e355a0-9cf9-4cb9-a0dc-88c51cab291b'
                },
                {
                  buildHookId: '5fbc068182813c234fe7b3d0',
                  title: 'Landing pages Website',
                  name: 'yoga-site-web',
                  apiId: '06196373-f68c-4e09-a35e-0112a1bf6f43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aarow/yoga-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://yoga-site-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
