module.exports = {
  siteMetadata: {
    description: "Personal page of Aryan Afrouzi",
    locale: "en",
    title: "Aryan Afrouzi",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-green",
      },
    },
  ],
}
