import Node from './Nodes.js';

class LinkedList {
  #head;

  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  append(value) {
    if (this.#head === null) {
      this.prepend(value);

      return;
    }

    let temp = this.#head;

    while (temp.next !== null) temp = temp.next;

    temp.next = new Node(value);

    this.#tail = temp.next;
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
  }

  at(index) {
    let temp = this.#head;
    let count = 0;

    while (temp !== null) {
      if (count === index) return temp;

      temp = temp.next;
      count += 1;
    }

    return temp;
  }

  insertAt(value, index) {
    if (index < 1) {
      this.prepend(value);

      return;
    }

    let count = 1;
    let temp = this.#head;

    while (count < index && temp.next !== null) {
      temp = temp.next;
      count += 1;
    }

    temp.next = new Node(value, temp.next);
  }

  removeAt(index) {
    if (index < 0) return;

    if (index === 0) {
      this.#head = this.#head.next;

      return;
    }

    let curr = this.#head;
    let prev = null;
    let count = 0;

    while (curr !== null && count < index) {
      prev = curr;
      curr = curr.next;
      count += 1;
    }

    if (curr == null) return;

    prev.next = curr.next;
  }

  pop() {
    let temp = this.#head;

    while (temp.next.next !== null) temp = temp.next;

    temp.next = null;

    return this.#head;
  }

  find(value) {
    let temp = this.#head;
    let count = 0;

    while (temp !== null) {
      if (temp.value === value) return count;

      temp = temp.next;
      count += 1;
    }

    return null;
  }

  contains(value) {
    const index = this.find(value);

    return index !== null;
  }

  toString() {
    let temp = this.#head;
    let str = '';

    while (temp !== null) {
      str += `( ${temp.value} ) -> `;
      temp = temp.next;
    }

    str += null;

    return str;
  }

  get size() {
    let temp = this.#head;

    if (temp === null) return 0;

    let count = 1;

    while (temp.next !== null) {
      temp = temp.next;
      count += 1;
    }

    return count;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}
