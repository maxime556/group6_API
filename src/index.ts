//import { Args } from "./config/args"
require('dotenv').config()

import { Config } from "./config/config.service"
import { DB } from "./service/db.service"

console.log(process.env)

//Args.required("env", ["local", "test", "beta", "prod"])
//const ENV = Args.get("env")
////console.log(`Environment is ${ENV}`)

//Config.init(ENV)
//console.log(Config.all())
//DB.init({ 
//    host: Config.get("DB_HOST"),
//    user: Config.get("DB_USER"),
//    password: Config.get("DB_PASSWORD"),
//    dbname: Config.get("DB_NAME"),
//})

//DB.query("SELECT * FROM users")
//    .then(results => {
//        console.log(results)
//    }).catch(e => {
//        console.log(e)
//    })