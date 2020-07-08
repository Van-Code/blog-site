module.exports = {
  title: 'Quantum Reform',
  description: 'This is a blog example built by VuePress',
  base: '/docs/.vuepress/dist/',
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
  },
};
