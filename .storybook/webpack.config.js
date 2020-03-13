const path = require('path');

module.exports = async ({ config, mode }) => {
  // Add twig support
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
      },
    ],
  });

  // Add SCSS support
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.alias['@scss'] = path.resolve(__dirname, '../src/scss');
  config.resolve.alias['@utils'] = path.resolve(__dirname, '../utils');
  config.resolve.alias['@js'] = path.resolve(__dirname, '../js');
  config.resolve.alias['@img'] = path.resolve(__dirname, '../src/img');

  return config;
};
