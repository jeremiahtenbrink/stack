"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("../Stack");
describe('tests Stack Class', function () {
    var stack = null;
    beforeEach(function () {
        stack = new Stack_1.Stack();
    });
    it("tests the creation of the stack", function () {
        expect(stack).toBeInstanceOf(Stack_1.Stack);
        expect(stack.getSize()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });
    it('checks the push method', function () {
        expect(stack.getSize()).toBe(0);
        stack.push("hello");
        expect(stack.getSize()).toBe(1);
        stack.push("hello2");
        stack.push("hello3");
        expect(stack.getSize()).toBe(3);
    });
    it('test the stack pop method', function () {
        expect(stack.getSize()).toBe(0);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.getSize()).toBe(3);
        var item = stack.pop();
        expect(item).toBe(3);
        expect(stack.getSize()).toBe(2);
        item = stack.pop();
        expect(item).toBe(2);
        item = stack.pop();
        expect(item).toBe(1);
        item = stack.pop();
        expect(item).toBeNull();
        expect(stack.getSize()).toBe(0);
    });
});
//# sourceMappingURL=Stack.test.js.map