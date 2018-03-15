export default class CommandPlace {

    constructor(robot) {
        this.robot = robot;
    }
    execute(position) {
        this.robot.setPosition(position);
        return this.robot.currentPosition();
    }
}
