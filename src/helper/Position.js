import {Enum} from 'enumify';

export default class Position {

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

export class Direction extends Enum {}
Direction.initEnum(['NORTH', 'EAST', 'SOUTH', "WEST"]);
