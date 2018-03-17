import { Enum } from 'enumify';

export class Command extends Enum { }
Command.initEnum(['PLACE', 'MOVE', 'LEFT', "RIGHT", "REPORT"]);
