import AbstractCommand from "@toyrobot/src/command/AbstractCommand"

export default class PlaceCommand extends AbstractCommand {

    execute(position) {
        if (!super.execute(position)) {
            return false;
        }
        this.robot.setPosition(position);
        return true;
    }
}
