class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // let that = this;
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hour}:${this.minute}:${this.second}`);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // console.log(this);
    this.second++;
    if (this.second === 60) {
      this.second = 0;
      this.minute++;
    }

    if (this.minute === 60) {
      this.minute = 0;
      this.hour++;
    }

    if (this.hour === 24) {
      this.hour = 0;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
console.log(clock);
