module.exports = {
  siteTitle: 'The Electric Corvette',
  siteDescription: 'A journey in EV conversion.',
  authorName: 'Dillon Dugan',
  twitterUsername: '_clumsychemist',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Dillon Dugan is a Software Engineer from Chandler, AZ, and a lifelong sustainability enthusiast.`,
  siteUrl: 'https://www.electricvette.blog/',
  disqusSiteUrl: 'https://www.electricvette.blog/',
  // Prefixes all links.
  pathPrefix: '/electric', // Note: it must *not* have a trailing slash.
  siteCover: 'theCar2.png', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/flags.png',
  postsPerPage: 6,
  disqusShortname: 'ElectricVette',
  headerTitle: 'The Electric Corvette',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-the-project',
    },
    {
      label: 'Subscribe',
      url: '/Subscribe',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Netlify',
    url: 'https://www.netlify.com/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-the-project',
        },
        {
          label: 'Subscribe',
          url: '/Subscribe',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Website',
          url: 'https://www.dillondugan.com',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_clumsychemist',
        },
      ],
    },
  ],
}
