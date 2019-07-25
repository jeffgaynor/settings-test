export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d39af87486e9c07ed5159fb',
                  title: 'Sanity Studio',
                  name: 'settings-test-studio',
                  apiId: 'd49d2ef0-50a5-44e8-916d-8f51a37dba4c'
                },
                {
                  buildHookId: '5d39af87bf72168067602ae3',
                  title: 'Portfolio Website',
                  name: 'settings-test',
                  apiId: 'ef50b5c7-1fd4-453f-87d0-2bea5b267aa4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffgaynor/settings-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://settings-test.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
