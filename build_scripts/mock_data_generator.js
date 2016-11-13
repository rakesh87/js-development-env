// color out
import chalk from "chalk";
//  node file syatem
import file_system from "fs";

import {schema} from "./mock_data_schema";
//  faker library
import json_schema_faker from "json-schema-faker";

const json = JSON.stringify(json_schema_faker(schema));

file_system.writeFile("./src/api/db.json", json, function(err) {
  if(err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated...."));
  }
});
