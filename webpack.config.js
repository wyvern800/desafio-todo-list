const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada da nossa aplicação (src/index.js)
  output: {
    path: path.resolve(__dirname, 'public'), // diretório arquivo que vai ser gerado após ser convertido
    filename: 'bundle.js' // nome do arquivo que vai ser gerado pós conversão (bundle.js)
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // caminho pro diretório onde contém os arquivos públicos da aplicação
    hot: true,
    historyApiFallback:{
      index:'/'
    },
  },
  module: {
    rules: [
      {
         test: /\.js$/,   // apenas arquivos que terminam com .js
         exclude: /node_modules/, // excluir os arquivos do node da transpilação
         use: {
           loader: 'babel-loader',
         }
      },
      {
        test: /\.(sass|less|css)$/,
        exclude: /node_modules/, // excluir os arquivos do node da transpilação
        use: [{ loader: "style-loader" }, { loader: "css-loader" },{ loader: "less-loader" }],
      },
      {
        test: /\.css$/, // para arquivos que terminam em css
            use: [{ loader: "style-loader" }, { loader: "css-loader" }],
     },
     {
  test: /.*\.(gif|png|jpe?g)$/i, // Pode haver quantos caracteres quiser, escapa o . , pega todos os tipos de imagem, e o i é para pegar case insensitive
  //não precisa do exclude node modules pq não tem imagem dentro do node-modules
  use: {
    loader: 'file-loader',
  }
},
    ]
  },
  plugins: [
    new Dotenv()
  ]
};
