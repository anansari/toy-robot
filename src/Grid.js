
export default class Grid {

    constructor(r, c) {
        Grid.rows = r;
        Grid.rows = c;
    }

    static isPositionValid(position) {
        return !(position.x < 0 || position.x > Grid.rows ||
            position.y < 0 || position.y > Grid.rows);
    }
}

Grid.rows = 0;
Grid.rows = 0;
