module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
  trailingSlash: true,
}
