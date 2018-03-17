import Position from "../../src/helper/Position";
import Robot from "../../src/robot/Robot";
import RotateCommand from "../../src/command/RotateCommand";

var expect = require('chai').expect;

describe("Rotating the robot to the intended direction", () => {
    it("should rotate the robot to the left ('WEST'). Given the direction 'NORTH'", () => {
        let robot = new Robot();
        new RotateCommand(robot).execute(new Position(3, 4, "NORTH"), -1);
        expect(robot.currentPosition()).to.have.property("direction").eq("WEST");
    });

    it("should rotate the robot to the right ('NORTH'). Given the direction 'WEST'", () => {
        let robot = new Robot();
        new RotateCommand(robot).execute(new Position(3, 4, "WEST"), 1);
        expect(robot.currentPosition()).to.have.property("direction").eq("NORTH");
    });
});
