import { DB } from '../service/index.service'
import { Track } from '../model/Track'

class TrackRepositoryService {

    getTracks(limit: number = 10 , offset: number = 0): Promise<Array<Track>>{

        const queryString = `SELECT id , title, album, band FROM track LIMIT ${limit} OFFSET ${offset}`
        return new Promise((resolve, reject) => {
            DB.query(queryString)
                .then((results:Array<any>) => {
                    resolve(results.map(row => new Track(row)))
                }).catch(e => {
                    reject(e)
                })
        })
    }
}

export const TrackRepository = new TrackRepositoryService()