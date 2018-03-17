import { Direction } from "../helper/Position"
import AbstractCommand from "./AbstractCommand"

/**
 * Responsible for rotating the robot into the intended direction
 */
export default class RotateCommand extends AbstractCommand {

    /**
     * 
     * @param {Position} position 
     * @param {int} step -1 for left and 1 for right.
     */
    execute(position, step) {
        let newPosition = position;

        let index = Direction.enumValueOf(position.direction).ordinal + step;
        if (index < 0) {
            index = Direction.enumValues.length - 1;
        } else {
            index = index % Direction.enumValues.length;
        }

        newPosition.direction = Direction.enumValues[index].name;
        this.robot.setPosition(newPosition);
    }
}
