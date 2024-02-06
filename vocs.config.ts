import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'CLT Mutual Aid',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
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
          text: 'Housing',
          link: '/housing',
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
          text: 'Tenant Organizing',
          link: '/tenant-organizing',
        },
        {
          text: 'Worker Organizing',
          link: '/worker-organizing',
        },
        {
          text: 'Student Organizing',
          link: '/student-organizing',
        },
      ]
    },
  ],
})
