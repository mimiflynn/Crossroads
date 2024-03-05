const { plugins } = require('./src/config/base-gatsby-plugins');

module.exports = {
  siteMetadata: {
    title: `Crossroads`,
    description: `Crossroads is a dotnet core commandline tool packager for developers.`,
    siteUrl: 'http://opensource.morganstanley.com/Crossroads',
    documentationUrl: false,
    //  documentationUrl: url-of.documentation.site,
  },
  pathPrefix: `/Crossroads`, // include subdirectory
  plugins,
};
