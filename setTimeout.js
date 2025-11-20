function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

x();

// we can do it by two ways either use let in palce of var or use closure to make copy of variable so the inner function doeasnt takes the redernece of the original i, and takes the copy value everyhtime.
