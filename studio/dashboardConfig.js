export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62703765fb4c810b1e0c5477',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cdtmeppr',
                  apiId: 'e91edf77-0c82-4ae6-8f56-2a1ca6ca4252'
                },
                {
                  buildHookId: '62703766a48eeb0b8d7c553b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xp2p8nfv',
                  apiId: 'b27c15c3-f5e9-4375-91ac-a66fb6612562'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sofia-ost/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xp2p8nfv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
