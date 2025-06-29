import path from "path";
import { Configuration } from "webpack";
import { BuildPaths } from "../build/types/config";
import { cssLoaderBuilder } from "../build/loaders/cssLoaderBuilder/cssLoaderBuilder";

export default function({config}: {config: Configuration}) {
  // config.resolve!.modules?.push(path.resolve(__dirname, "../../src"));
  const paths: BuildPaths = {
    build:'',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '../../src')
  };
  config.resolve?.modules?.push(paths.src);

  config.module?.rules?.push(cssLoaderBuilder(true))

  return config;
}