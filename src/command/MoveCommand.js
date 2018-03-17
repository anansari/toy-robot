import { Direction } from "../helper/Position"
import AbstractCommand from "./AbstractCommand"

/**
 * Responsible for moving the robot into the intended direction
 */
export default class MoveCommand extends AbstractCommand {

    execute(position) {
        if (!super.execute(position)) {
            return false;
        }

        this.robot.setPosition(position);
        return true;
    }

    /**
     * Determines the the next possible position for the robot to be.
     * @param {Position} position 
     */
    getNextPosition(position) {
        let newPosition = position;

        switch (newPosition.direction) {
            case Direction.NORTH.name:
                newPosition.y++;
                break;
            case Direction.SOUTH.name:
                newPosition.y--;
                break;
            case Direction.EAST.name:
                newPosition.x++;
                break;
            case Direction.WEST.name:
                newPosition.x--;
                break;
            default:
                return position;
        }
        return newPosition;
    }
}
