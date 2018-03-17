import Position from "../helper/Position";

/**
 * A robot which is aware of it's state.
 */
export default class Robot {
    constructor() {
        this.position = new Position(0, 0, "");
    }
    /**
     * Gets the current position of the robot.
     */
    currentPosition() {
        return this.position;
    }

    /**
     * Sets the position of the robot.
     * @param {Position} position 
     */
    setPosition(position) {
        this.position = new Position(position.x, position.y, position.direction);
        return true;
    }

    /**
     * if robot has a direction set in it's position, it's alive.  
     */
    isAlive() {
        if (!this.position.direction) {
            return false;
        }
        return true;
    }
}
