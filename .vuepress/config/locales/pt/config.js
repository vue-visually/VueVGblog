const ads = require('./ads')

module.exports = {
  languages: {
    label: 'Portuguese',
    shortname: 'pt'
  },
  ads,
  logo: {
    name: 'visual-intelligence-logo',
    ext: 'png',
    alt: 'Visual Intelligence'
  },
  share: {
    facebookCaption: 'Visual Intelligence',
    twitterVia: 'vue-visually',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2018 © Visual Intelligence - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          BUILT WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Visual Intelligence',
      items: [
        {
          label: 'SOBRE',
          path: '/pt/sobre/'
        },
        {
          label: 'CATEGORIES',
          path: '/pt/categories/'
        },
        {
          label: 'CONTACT',
          path: '/pt/contact/'
        }
      ]
    },
    nav2: {
      title: 'Community',
      items: []
    }
  },
  social: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/vuevg'
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com/vuevg'
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/vuevg'
    },
    {
      name: 'github',
      link: 'https://www.github.com/vuevg'
    }
  ]
}
