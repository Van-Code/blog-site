module.exports = {
  title: 'Quantum Reform',
  description: 'This is a blog example built by VuePress',
  //theme: '@vuepress/theme-default', // OR shortcut: @vuepress/blog
  theme: 'theme',
  themeConfig: {
    logo: '/img/highresQR.png',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    head: [
      [
        'link',
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap',
        },
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap',
        },
      ],
    ],
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Services',
        link: '/services/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
    navBtn: { text: 'Contact Us', link: '/contact/' },
  },
};
