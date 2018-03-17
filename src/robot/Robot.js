import Position from "../helper/Position";

export default class Robot {
    constructor() {
        this.position = new Position(0, 0, "");
    }
    currentPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = new Position(position.x, position.y, position.direction);
        return true;
    }

    isAlive() {
        if (!this.position.direction) {
            return false;
        }
        return true;
    }
}
