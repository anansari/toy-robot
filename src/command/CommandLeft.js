import { Direction } from "../Position"

export default class CommandLeft {

    constructor(robot) {
        this.robot = robot;
    }

    execute(position) {
        var newPosition = position;
        
        let index = Direction.enumValueOf(position.direction).ordinal - 1; 
        if (index < 0) {
            index = Direction.enumValues.length - 1;
        }

        newPosition.direction = Direction.enumValues[index].name;
        this.robot.setPosition(newPosition);
        return this.robot.currentPosition();
    }
}
