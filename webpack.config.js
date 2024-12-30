const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // ... altre configurazioni di webpack ...
  plugins: [
    // ... altri plugin ...
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Genera un report statico in un file HTML
      openAnalyzer: false, // Non apre automaticamente il report nel browser
    }),
  ],
};