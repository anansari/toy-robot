import { Direction } from "../Position"
import AbstractCommand from "./AbstractCommand"

export default class MoveCommand extends AbstractCommand {

    execute(position) {
        if (!super.execute(position)) {
            return false;
        }

        this.robot.setPosition(position);
        return true;
    }

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
            //TODO: handle the implementation
        }
        return newPosition;
    }
}
