import type { Configuration } from 'webpack';
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildPaths, BuildEnv } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  
  const PORT = 3000;
  
  const config: Configuration = BuildWebpackConfig({
    mode: env.mode || 'development',
    paths: paths,
    port: env.port || PORT
  })

  return config;
};