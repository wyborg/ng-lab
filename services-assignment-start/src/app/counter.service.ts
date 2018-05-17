export class CounterService {
  counter: number = 0;

  increaseCounter() {
    this.counter = this.counter + 1;
  }
}
