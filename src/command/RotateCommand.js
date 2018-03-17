import { Direction } from "../Position"
import AbstractCommand from "./AbstractCommand"

export default class RotateCommand extends AbstractCommand {

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
