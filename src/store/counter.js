import { makeAutoObservable } from "mobx";

class Counter {
  constructor() {
    makeAutoObservable(this);
  }

  counter = 0;

  increment = () => {
    this.counter = this.counter + 1;
  }

  decrement = () => {
    this.counter = this.counter - 1;
  }
}

export default new Counter();
