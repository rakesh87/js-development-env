/* eslint-disable no-console */

import webpack from "webpack";
import chalk from "chalk";

import webpack_config from "../webpack.config.production";

process.env.NODE_ENV = "production";

console.log(chalk.blue("production build started....."))

webpack(webpack_config).run((err, status) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  const json_stats = stats.toJson();
  if(json_stats.hasErrors) {
    return json_stats.errors.map(
      error => console.log(chalk.red(error);
    ));
  };

  if(json_stats.hasWarnings) {
    console.log(chalk.yellow("following warning has been generated..."));
    json_stats.warnings.map(
      warning => console.log(chalk.red(warning);
    ));
  };

  console.log(`stats: ${stats}`);

  console.log(chalk.green("production built done! and written to /dist"));
  return 0;
});