import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { WebpackPluginInstance } from 'webpack'
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugin = (pathToHTMLFile: string, isDev: boolean): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: pathToHTMLFile
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: isDev
    }),
    new HotModuleReplacementPlugin(),
  ]
}