function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

// call printTime() every 1000 milliseconds (every second)
setInterval(printTime, 1000);