import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildPlugin } from "./buildPlugins"
import type { Configuration } from "webpack"
import type { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"

export const BuildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, port } = options;
  const isDev = (mode === 'development');
  return {
    mode: mode,
    entry: paths.entry,
    // cache: false,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugin(paths.html),
    module: {
      rules: buildLoaders(mode),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined
  }
}