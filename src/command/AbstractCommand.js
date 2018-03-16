import Grid from "@toyrobot/src/Grid";

export default class AbstractCommand {

    constructor(robot) {
        this.robot = robot;
    }
    
    execute(position) { 
        return Grid.isPositionValid(position);
    }
}
