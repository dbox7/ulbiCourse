import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import type { RuleSetRule } from 'webpack'
import type { BuildMode } from './types/config';

export const buildLoaders = (mode: BuildMode): RuleSetRule[] => {
  
  const isDev = (mode === 'development');
  
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract", 
            {
              nsSeparator: "~",
              locales: ['ru', 'en']
            }
          ],
        ]
      }
    }
  }

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
    babelLoader,
    tsLoader,
    cssLoader
  ]

}