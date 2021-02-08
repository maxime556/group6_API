import * as chai from "chai"

const expect = chai.expect

const data = {
    id: 2,
    title: "testTitle",
    album: "tututu",
    band: "BLACKPINK"
};

describe("Track unit Test", () => {
    const band = new Band(...data);
    expect(band).to.be.instanceOf(Band);
    expect(band.id).to.be.equal(2);
    expect(band.title).to.be.equal("testTitle");
    expect(band.album).to.be.equal("tututu");
    expect(band.band).to.be.equal("BLACKPINK");
   
});