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
          link: '/food',
        },
        {
          text: 'Clothing',
          link: '/clothing',
        },
        {
          text: 'Masks',
          link: '/masks',
        },
      ]
    },
    {
      text: 'People to Organize With',
      collapsed: false,
      items: [
        {
          text: 'Tenants',
          link: '/tenants',
        },
        {
          text: 'Workers',
          link: '/workers',
        },
        {
          text: 'Students',
          link: '/students',
        },
      ]
    },
  ],
})
