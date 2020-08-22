/**
 * Stack implementation using a doubly linked list.
 */
export declare class Stack {
    private dll;
    constructor();
    /**
     * Gets the size of the stack.
     * @type {function} getSize gets the size of the stack
     */
    getSize(): number;
    /**
     * Returns true or false indicating if the stack is empty or not.
     * @type {function} isEmpty
     */
    isEmpty(): boolean;
    /**
     * Pushes a item on the top of the stack.
     * @param {any} item
     */
    push(item: any): void;
    /**
     * Pops an item off the top of the stack.
     * @return {any}
     */
    pop(): any;
}
