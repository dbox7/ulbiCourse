import type { ResolveOptions } from 'webpack'
import { BuildPaths } from './types/config'
import path from 'path'

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    preferAbsolute: true,
    // alias: {
    //   '@': path.resolve(__dirname, 'src/*'),
    //   '@app': path.resolve(__dirname, 'src/app/*'),
    //   '@pages': path.resolve(__dirname, 'src/pages/*'),
    //   '@shared': path.resolve(__dirname, 'src/shared/*'),
    //   '@widgets': path.resolve(__dirname, 'src/widgets/*'),
    //   '@features': path.resolve(__dirname, 'src/features/*'),
    // }
  }
}