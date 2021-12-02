/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Rescipes",
    description: "Nice and clean recipes site",
    author: "@NataliaSova",
    person: { name: "Natalia", surname: "Protasova" },
    simpleData: ["item1", "item2"],
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp"],
}
