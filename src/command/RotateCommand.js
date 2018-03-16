import { Direction } from "@toyrobot/src/Position"
import AbstractCommand from "@toyrobot/src/command/AbstractCommand"

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
        return this.robot.currentPosition();
    }
}
