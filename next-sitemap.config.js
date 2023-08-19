/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/raunakgurud/next-sitemap#readme
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://fullcover.in */
  siteUrl: 'https://fullcover.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
