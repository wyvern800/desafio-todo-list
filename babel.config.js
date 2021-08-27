module.exports = {
  presets: [
    '@babel/preset-env',  // converter o código de javascript moderno para um mais antigo, baseado no ambiente de aplicação
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ]
}