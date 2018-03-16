import { Direction } from "@toyrobot/src/Position"

export default class CommandRotate {

    constructor(robot) {
        this.robot = robot;
    }

    execute(position, step) {
        let newPosition = position;

        let index = Direction.enumValueOf(position.direction).ordinal + step;
        if (index < 0) {
            index = Direction.enumValues.length - 1;
        } else {
            index = (Direction.enumValueOf(position.direction).ordinal + step) % Direction.enumValues.length;
        }
        console.log(index);
        newPosition.direction = Direction.enumValues[index].name;
        this.robot.setPosition(newPosition);
        return this.robot.currentPosition();
    }
}
