import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'CLT Mutual Aid',
  iconUrl: '/favicon.ico',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
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
          text: 'Childcare',
          link: '/resources/childcare',
        },
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
  ],
})
