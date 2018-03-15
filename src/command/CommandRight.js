import { Direction } from "../Position"

export default class CommandRight {

    constructor(robot) {
        this.robot = robot;
    }

    execute(position) {
        var newPosition = position;

        let index = Direction.enumValueOf(position.direction).ordinal + 1; 
        if (index > Direction.enumValues.length - 1) {
            index = Direction.enumValueOf(position.direction).ordinal - 1;
        }

        newPosition.direction = Direction.enumValues[index].name;
        this.robot.setPosition(newPosition);
        return this.robot.currentPosition();
    }
}
