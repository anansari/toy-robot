import InputParser from "../../src/helper/InputParser";
import { Command } from "../../src/command/Command";

var expect = require('chai').expect;


describe("Parsing of user provided input", () => {
    it("should parse 'PLACE 1,2,NORTH' correctly", () => {
        expect(InputParser.parse("PLACE 1,2,NORTH")).to.be.equal(Command.PLACE.name);
    });

    it("should parse 'MOVE' correctly", () => {
        expect(InputParser.parse("Move")).to.be.equal(Command.MOVE.name);
    });

    it("should parse 'LEFT' correctly", () => {
        expect(InputParser.parse("LEFT")).to.be.equal(Command.LEFT.name);
    });

    it("should parse 'RIGHT' correctly", () => {
        expect(InputParser.parse("RIGHT")).to.be.equal(Command.RIGHT.name);
    });

    it("should parse 'REPORT' correctly", () => {
        expect(InputParser.parse("REPORT")).to.be.equal(Command.REPORT.name);
    });

    it("should not parse 'HELLO' correctly", () => {
        expect(InputParser.parse("HELLO")).to.be.equal("invalid command");
    });

});

