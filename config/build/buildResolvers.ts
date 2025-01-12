import type { ResolveOptions } from 'webpack'
import { BuildPaths } from './types/config'

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    preferAbsolute: true,
  }
}