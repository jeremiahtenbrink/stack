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
  
  /**
   * Pushes a item on the top of the stack.
   * @param {any} item
   */
  push( item: any ): void {
    this.dll.addToHead( item );
  }
  
  /**
   * Pops an item off the top of the stack.
   * @return {any}
   */
  pop(): any {
    return this.dll.removeFromHead();
  }
}
