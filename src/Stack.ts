import { DoublyLinkedList } from "@jeremiah_tenbrink/doubly-linked-list";

/**
 * Stack implementation using a doubly linked list.
 */
export class Stack {
  private dll = new DoublyLinkedList();
  
  constructor() {
  }
  
  /**
   * Gets the size of the stack.
   * @type {function} getSize gets the size of the stack
   */
  getSize(): number {
    return this.dll.getSize();
  }
  
  /**
   * Returns true or false indicating if the stack is empty or not.
   * @type {function} isEmpty
   */
  isEmpty(): boolean {
    return this.dll.getSize() === 0;
  }
}