import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { WebpackPluginInstance } from 'webpack'
import { ProgressPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugin = (pathToHTMLFile: string): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: pathToHTMLFile
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}