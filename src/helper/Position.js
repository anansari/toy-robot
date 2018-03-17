import {Enum} from 'enumify';

/**
 * Position of the robot on the grid.
 */
export default class Position {

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

/**
 * An enum for holding the cardinal directions
 */
export class Direction extends Enum {}
Direction.initEnum(['NORTH', 'EAST', 'SOUTH', "WEST"]);
