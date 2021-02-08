import { Args } from "./config/args"
import { Config } from "./config/config.service"
import { DB } from "./service/db.service"

Args.required("env", ["local", "test", "beta", "prod"])
const ENV = Args.get("env")

Config.init(ENV)

DB.init({ 
    host: Config.get("DB_HOST"),
    user: Config.get("DB_USER"),
    password: Config.get("DB_PASSWORD"),
    dbname: Config.get("DB_NAME"),
})

DB.query("SELECT * FROM users")
    .then(results => {
        console.log(results)
    }).catch(e => {
        console.log(e)
    })

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});