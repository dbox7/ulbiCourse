import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (port: number): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: true
  };
}