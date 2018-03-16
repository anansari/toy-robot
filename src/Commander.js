import Position from "./Position";
import CommandPlace from "@toyrobot/src/command/CommandPlace";
import CommandMove from "@toyrobot/src/command/CommandMove";
import CommandRotate from "@toyrobot/src/command/CommandRotate";

export default class Commander {

    constructor(robot, grid) {
        this.robot = robot;
        this.grid = grid
    }

    execute(command) {
        // TODO:parse the command here

        let x = 3;
        let y = 4;
        let direction = "NORTH"

        let response = "";
        command = "PLACE";

        const LEFT_MOVEMENT = -1;
        const RIGHT_MOVEMENT = 1;

        let currentPosition = this.robot.currentPosition();
        let position = new Position(currentPosition.x, currentPosition.y, currentPosition.direction);

        switch (command) {
            case "PLACE":
                position = new Position(x, y, direction);
                (new CommandPlace(this.robot)).execute(position);
                break;
            case "MOVE":
                (new CommandMove(this.robot)).execute(position);
                break;
            case "LEFT":
                (new CommandRotate(this.robot)).execute(position, LEFT_MOVEMENT);
                break;
            case "RIGHT":
                (new CommandRotate(this.robot)).execute(position, RIGHT_MOVEMENT);
                break;
            case "REPORT":
                break;
            default:
            //TODO: implement this
        }

        return this.robot.currentPosition();;
    }
}
