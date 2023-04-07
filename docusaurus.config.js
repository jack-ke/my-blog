// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

// 基本信息
const config = {
  title: '我的博客',  // 网页标题
  // titleDelimiter: "-",
  url: 'https://my-blog-teal-seven.vercel.app/', // 博客地址
  baseUrl: '/',
  favicon: 'img/favicon.ico', //网站图标
  organizationName: 'kexy', // 名字
  projectName: 'https://my-blog-teal-seven.vercel.app/', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '我的博客',
        logo: {
          alt: '我的博客',
          src: 'img/logo.svg',
          srcDark: "img/logo.svg"
        },
        items: [
          {
            type: "localeDropdown",
            position: "left",
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            to: "docs/all-intro",
            label: "专属学习笔记",
            position: "right",
          },
          {
            label: "小工具",
            position: "right",
            items: [{
              label: "简易的rap参数转ts格式工具",
              to: "https://jack-zhang-coming.github.io/rap-to-ts/",
            },
            {
              label: "小张同学的照片墙",
              to: "https://photo.zhangqiang.hk.cn/",
            },
            {
              label: "基于ChatGPT的问答系统",
              to: "http://chatgptrobot.zhangqiang.hk.cn/",
            },
            ],
          },
          {
            href: 'https://github.com/jack-ke/my-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 页脚内容
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },

      // 主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: "https://github.com/jack-ke/my-blog",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/jack-ke/my-blog",
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/jack-ke/my-blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "en": {
        label: "English",
      },
      "zh-Hans": {
        label: "中文",
      },

    }
  },

};

module.exports = config;
