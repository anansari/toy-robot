import { Enum } from 'enumify';

/**
 * An enum to hold all the valid commands.
 */
export class Command extends Enum { }
Command.initEnum(['PLACE', 'MOVE', 'LEFT', "RIGHT", "REPORT"]);
