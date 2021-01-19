module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/../back/public'  
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
            
          ],
          plugins: ["@babel/plugin-proposal-class-properties"]
        },
      
      }
      // {
      //   test: /\.(js|jsx)$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/
      // }
      ,
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
    // rules: [
    //   {
    //     test: /jsx?$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'babel-loader',
    //     query: {
    //       presets: [
    //         "@babel/preset-react",
    //         "@babel/env"
            
    //       ],
    //       plugins: ["@babel/plugin-proposal-class-properties"]
    //     },
      
    //   },
    //   {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader'
    //   },
      
      
    // ]
  },
  
 
  
  devtool: 'source-map'
}
