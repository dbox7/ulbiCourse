import type { RuleSetRule } from 'webpack'
import type { BuildMode } from './types/config';
import { cssLoaderBuilder } from './loaders/cssLoaderBuilder/cssLoaderBuilder';

export const buildLoaders = (mode: BuildMode): RuleSetRule[] => {
  
  const isDev = (mode === 'development');
  
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
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

  const cssLoader = cssLoaderBuilder(isDev)

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