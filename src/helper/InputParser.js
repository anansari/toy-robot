import { Command } from "../command/Command";

export default class InputParser {

    static parse(input) {

        let regex = {
            "_place": /^\s*PLACE\s+([\d]+)\s*,\s*([\d]+)\s*,\s*(east|west|north|south)\s*$/gim,
            "_move": /^\s*MOVE\s*$/gim,
            "_left": /^\s*LEFT\s*$/gim,
            "_right": /^\s*RIGHT\s*$/gim,
            "_report": /^\s*REPORT\s*$/gim
        }

        if (regex._place.exec(input)) {
            return Command.PLACE.name;
        } else if (regex._move.exec(input)) {
            return Command.MOVE.name;
        } else if (regex._left.exec(input)) {
            return Command.LEFT.name;
        } else if (regex._right.exec(input)) {
            return Command.RIGHT.name;
        } else if (regex._report.exec(input)) {
            return Command.REPORT.name;
        }

        return "invalid command";
    }
}
