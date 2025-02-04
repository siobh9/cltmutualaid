import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'CLT Mutual Aid',
  iconUrl: '/favicon.ico',
  sidebar: [
    {
      text: 'Home Page',
      link: '/',
    },
    {
      text: 'Events',
      link: '/events',
    },
    {
      text: 'Resources',
      collapsed: false,
      items: [
        {
          text: 'Food',
          link: '/resources/food',
        },
        {
          text: 'Clothing',
          link: '/resources/clothing',
        },
        {
          text: 'Healthcare',
          link: '/resources/healthcare',
        },
        {
          text: 'Community Safety',
          link: '/resources/community-safety',
        },
        {
          text: 'Disaster Relief',
          link: '/resources/disaster-relief',
        },
        {
          text: 'Zines',
          link: '/resources/zines',
        },
        {
          text: 'Do It Yourself Guides',
          link: '/resources/diy',
        }
     ]
    },
    {
      text: 'People to Organize With',
      collapsed: false,
      items: [
        {
          text: 'Tenants',
          link: '/organizing/tenants',
        },
        {
          text: 'Workers',
          link: '/organizing/workers',
        },
        {
          text: 'Students',
          link: '/organizing/students',
        },
        {
          text: 'LGBTQAI+',
          link: '/organizing/lgbtqia+',
        },
        {
          text: 'Political Parties',
          link: '/organizing/political-parties',
        },
      ]
    },
    {
      text: 'How To Guides',
      collapsed: false,
      items: [
        {
          text: 'How To Set Up An Open Collective',
          link: '/how-to-guides/how-to-set-up-an-open-collective',
        },
        {
          text: 'How To Make A Site Like This',
          link: '/how-to-guides/how-to-make-a-site-like-this',
        }
      ]
    },
  ],
})
