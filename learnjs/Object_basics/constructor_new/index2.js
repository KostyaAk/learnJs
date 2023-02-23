function Accumulator(start) {
  this.startValue = start;
  this.read = function (val) {
    this.startValue += val;
  };
}

let accumulator = new Accumulator(10);

accumulator.read(3);
accumulator.read(4);

console.log(accumulator.startValue);
