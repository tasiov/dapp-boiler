const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  trailingSlash: true,
  webpack(config) {
    config.devtool = 'eval-source-map'
    return config
  },
})
