module.exports = {
  siteMetadata: {
    title: `lucaslois.dev`,
    siteUrl: `https://lucaslois.dev`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-146742304-1",
      head: false,
      pageTransitionDelay: 0,
    }
  }],
};