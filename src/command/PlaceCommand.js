import AbstractCommand from "./AbstractCommand"

/**
 * Responsible for placing the robot onto the grid.
 */
export default class PlaceCommand extends AbstractCommand {

    /**
     * Sets the position if position is valid
     * @param {Position} position 
     */
    execute(position) {
        if (!super.execute(position)) {
            return false;
        }
        this.robot.setPosition(position);
        return true;
    }
}
