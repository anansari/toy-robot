import { Direction } from "../Position"

export default class CommandMove {

    constructor(robot) {
        this.robot = robot;
    }

    execute(position) {
        var newPosition = position;

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
        }
        
        this.robot.setPosition(newPosition);
        return this.robot.currentPosition();
    }
}
