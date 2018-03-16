import { Direction } from "@toyrobot/src/Position"
import AbstractCommand from "@toyrobot/src/command/AbstractCommand"

export default class MoveCommand extends AbstractCommand {

    execute(position) {
        if (!super.execute(position)) {
            return false;
        }
        
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

        this.robot.setPosition(newPosition);
        return true;
    }
}
