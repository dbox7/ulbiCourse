import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack'
import type { BuildMode } from './types/config';

export const buildLoaders = (mode: BuildMode): RuleSetRule[] => {
  
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const isDev = (mode === 'development');

  const cssLoader = {
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
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader =  {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    svgLoader,
    fileLoader,
    tsLoader,
    cssLoader
  ]

}