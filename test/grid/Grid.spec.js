import Position from "../../src/helper/Position";
import Grid from "../../src/grid/Grid";

var expect = require('chai').expect;

describe("Checks if the position being set is valid", () => {
    it("should not be a valid postion if it's not under grid size 5x5", () => {
        expect(Grid.isPositionValid((new Position(12, 5, "NORTH")))).to.be.false;
    });

    it("should be a valid postion if it's under grid size 5x5", () => {
        let position = new Position(1, 11, "WEST");
        let grid = new Grid();
        expect(Grid.isPositionValid((new Position(11, 0, "WEST")))).to.be.true;
    });
});
