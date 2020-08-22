"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var doubly_linked_list_1 = require("@jeremiah_tenbrink/doubly-linked-list");
/**
 * Stack implementation using a doubly linked list.
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.dll = new doubly_linked_list_1.DoublyLinkedList();
    }
    /**
     * Gets the size of the stack.
     * @type {function} getSize gets the size of the stack
     */
    Stack.prototype.getSize = function () {
        return this.dll.getSize();
    };
    /**
     * Returns true or false indicating if the stack is empty or not.
     * @type {function} isEmpty
     */
    Stack.prototype.isEmpty = function () {
        return this.dll.getSize() === 0;
    };
    /**
     * Pushes a item on the top of the stack.
     * @param {any} item
     */
    Stack.prototype.push = function (item) {
        this.dll.addToHead(item);
    };
    /**
     * Pops an item off the top of the stack.
     * @return {any}
     */
    Stack.prototype.pop = function () {
        return this.dll.removeFromHead();
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map