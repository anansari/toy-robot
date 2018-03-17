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
        let response = "";

        let LEFT_MOVEMENT = -1;
        let RIGHT_MOVEMENT = 1;

        let currentPosition = this.robot.currentPosition();
        let parsedCommand = InputParser.parse(input.toUpperCase());

        switch (parsedCommand) {
            case Command.PLACE.name:
                let splited = input.toUpperCase().split(/[ ,]+/);
                let position = new Position(_.toInteger(splited[1]), _.toInteger(splited[2]), splited[3]);
                (new PlaceCommand(this.robot)).execute(position);
                break;
            case Command.MOVE.name:
                let moveCommand = new MoveCommand(this.robot);
                let p = new Position(currentPosition.x, currentPosition.y, currentPosition.direction);
                moveCommand.execute((new MoveCommand(this.robot).getNextPosition(p)));
                break;
            case Command.LEFT.name:
                console.log(Command.LEFT.name);
                (new RotateCommand(this.robot)).execute(currentPosition, LEFT_MOVEMENT);
                break;
            case Command.RIGHT.name:
                console.log(Command.RIGHT.name);
                (new RotateCommand(this.robot)).execute(currentPosition, RIGHT_MOVEMENT);
                break;
            case Command.REPORT.name:
                console.log(this.robot.currentPosition());
                break;
            default:
                console.log(parsedCommand);

        }

        return this.robot.currentPosition();
    }
}
