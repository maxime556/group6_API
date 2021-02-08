import * as assert from "assert"
import * as chai from "chai"
import { Track } from "../src/model/Track";
const expect = chai.expect;

const data = {
    id: 2,
    title: "testTitle",
    album: "tututu",
    band: "BLACKPINK"
};

describe("Track unit Test", () => {
    it("test", () => {
        const track = new Track(data);
        expect(track).to.be.instanceOf(Track);
        expect(track.id).to.be.equal(2);
        expect(track.title).to.be.equal("testTitle");
        expect(track.album).to.be.equal("tututu");
        expect(track.band).to.be.equal("BLACKPINK");
    });
});