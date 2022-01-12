module.exports = {
  content: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './styles/**/*.css',
    './components/**/*.jsx',
    './components/**/*.js',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
