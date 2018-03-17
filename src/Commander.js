import Position from "./Position";
import PlaceCommand from "./command/PlaceCommand";
import MoveCommand from "./command/MoveCommand";
import RotateCommand from "./command/RotateCommand";
import InputParser from "./helper/InputParser";
import { Command } from "./command/Command";
import _ from "lodash";

export default class Commander {

    constructor(robot, grid) {
        this.robot = robot;
        this.grid = grid
    }

    execute(input) {
        let response = false;
        let LEFT_MOVEMENT = -1;
        let RIGHT_MOVEMENT = 1;

        let currentPosition = this.robot.currentPosition();
        let parsedCommand = InputParser.parse(input.toUpperCase());

        switch (parsedCommand) {
            case Command.PLACE.name:
                let splited = input.toUpperCase().split(/[ ,]+/);
                let position = new Position(_.toInteger(splited[1]), _.toInteger(splited[2]), splited[3]);
                response = (new PlaceCommand(this.robot)).execute(position);
                break;
            case Command.MOVE.name:
                if (this.robot.isAlive()) {
                    let moveCommand = new MoveCommand(this.robot);
                    let p = new Position(currentPosition.x, currentPosition.y, currentPosition.direction);
                    response = moveCommand.execute((new MoveCommand(this.robot).getNextPosition(p)));
                }
                break;
            case Command.LEFT.name:
                if (this.robot.isAlive()) {
                    response = (new RotateCommand(this.robot)).execute(currentPosition, LEFT_MOVEMENT);
                }
                break;
            case Command.RIGHT.name:
                if (this.robot.isAlive()) {
                    response = (new RotateCommand(this.robot)).execute(currentPosition, RIGHT_MOVEMENT);
                }
                break;
            case Command.REPORT.name:
                if (this.robot.isAlive()) {
                    console.log(this.robot.currentPosition());
                } else {
                    console.log("Lets get started by issuing the 'PLACE' command.");
                }

                break;
            default:
                console.log(parsedCommand);
        }
        return response;
    }
}
