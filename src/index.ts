import * as dotenv from "dotenv"
import * as express from "express"
dotenv.config()
import { Config, DB } from "./service/index.service"

const app = express()

app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok" })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
}) 
