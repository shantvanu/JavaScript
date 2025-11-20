function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var cnt = new Counter();

cnt.incrementCounter();
cnt.incrementCounter();
cnt.incrementCounter();
cnt.incrementCounter();
cnt.incrementCounter();

cnt.decrementCounter();
cnt.decrementCounter();
cnt.decrementCounter();
cnt.decrementCounter();
cnt.decrementCounter();
