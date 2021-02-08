import * as mysql from "mysql"
class DBService {
    
    private $con: any

    init(dbConfig: any)
    {
        this.$con = mysql.createConnection({
            host: dbConfig.host,
            user: dbConfig.user,
            password: dbConfig.password,
            database: dbConfig.dbname,
        })

        this.$con.connect()
    }
    
    query(queryString: string): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.$con.query(queryString, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

export const DB = new DBService()