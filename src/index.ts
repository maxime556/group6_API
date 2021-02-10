import * as dotenv from "dotenv"
import * as express from "express"
dotenv.config()
import { Config, DB } from "./service/index.service"
import { TrackRepository } from "./repository/track.repository"

const app = express()

app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok" })
})

app.get('/tracks', (req: any, res: any) => {
  const limit = req.query.limit
  
  res.send([])
//   TrackRepository.getTracks(limit)
//       .then((tracks: any) => {
//           res.send(tracks)
//       }).catch(e => {
//           // logs?
//           res.send(500, { error: e.toString() })
//       })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
}) 
