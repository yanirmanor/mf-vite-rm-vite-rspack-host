import { dependencies } from "./package.json";
import { Rspack } from "@rsbuild/core";

export const mfConfig = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:5173/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
      eager: true,
    },
  },
};
