import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const cssLoaderBuilder = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          // esModule: true,
          modules: {
            auto: /\.module\./,
            localIdentName: isDev 
              ? '[path][name]__[local]'
              : '[hash:base64:6]'
          }
        }
      },
      'sass-loader'
    ]
  })