"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rewire_1 = __importDefault(require("rewire"));
var index = (0, rewire_1.default)("./index");
var Sorter = index.__get__("Sorter");
// @ponicode
describe("sort", function () {
    var inst;
    beforeEach(function () {
        inst = new Sorter([0, 32, 256, 256, 16]);
    });
    test("0", function () {
        inst.sort();
    });
});
