import * as path from "path"
import * as dotenv from "dotenv"
import * as chai from "chai"
import * as assert from "assert"
const expect = chai.expect

const envPath = path.resolve(__dirname + "/../.env.test")
dotenv.config({ path: envPath })

import { TrackRepository } from "../src/repository/track.repository"

describe("Test Track repository", () => {
    
    it("Test if getTracks returns correct results", () => {
        
        return TrackRepository.getTracks(3, 0)
            .then((results) => {
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                console.log(e)
                assert.fail(e)
            })

    })
})