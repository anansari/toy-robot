import Position from "./Position";
import CommandPlace from "./command/CommandPlace";
import CommandMove from "./command/CommandMove";
import CommandLeft from "./command/CommandLeft";
import CommandRight from "./command/CommandRight"

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
                (new CommandLeft(this.robot)).execute(position);
                break;
            case "RIGHT":
                (new CommandRight(this.robot)).execute(position);
                break;
            case "REPORT":
                break;
        }

        return this.robot.currentPosition();;
    }
}
