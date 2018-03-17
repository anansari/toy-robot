import Position from "../../src/helper/Position";
import Robot from "../../src/robot/Robot";

var expect = require('chai').expect;

describe("Initial position of the robot", () => {
    it("should have x=0, y=0 and direction ''", () => {
        expect((new Robot()).currentPosition()).to.have.property("x").eq(0);
        expect((new Robot()).currentPosition()).to.have.property("y").eq(0);
        expect((new Robot()).currentPosition()).to.have.property("direction").empty;
    });
});


describe("Setting position of the robot", () => {
    it("should set the position of the robot and return true", () => {
        expect((new Robot()).setPosition((new Position(2, 3, "NORTH")))).to.be.true;
    });
});


describe("Checking the life and death of the robot", () => {
    let robot = new Robot();
    it("should not have direction and considered not alive", () => {
        expect(robot.isAlive()).to.be.false;
    });

    it("should have direction and considered alive", () => {
        robot.setPosition((new Position(4, 5, "SOUTH")));
        expect(robot.isAlive()).to.be.true;
    });
});
