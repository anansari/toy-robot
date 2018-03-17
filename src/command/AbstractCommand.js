import Grid from "../grid/Grid";

/**
 * An Abstract class for the which is constructed by passing robot and then can be executed.
 * It checks for valid position on evey execution
 */
export default class AbstractCommand {

    /**
     * 
     * @param {Robot} robot. It must be alive ;)
     */
    constructor(robot) {
        this.robot = robot;
    }

    /**
     * 
     * @param {Position} position. It must have x and y axis and direction.
     */
    execute(position) {
        return Grid.isPositionValid(position);
    }
}
