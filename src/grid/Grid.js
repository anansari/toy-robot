
/**
 * A grid for the robot to walk.
 */
export default class Grid {

    constructor(r, c) {
        Grid.rows = r;
        Grid.rows = c;
    }

    /**
     * returns true if the position is a valid position on the grid else false.
     * @param {Position} position 
     */
    static isPositionValid(position) {
        return !(position.x < 0 || position.x > Grid.rows ||
            position.y < 0 || position.y > Grid.rows);
    }
}

Grid.rows = 0;
Grid.rows = 0;
