const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p1 success");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 pass"), 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 fail"), 6000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => console.log("allSettled " + res))
  .catch((err) => console.log(err));
Promise.all([p1, p2, p3])
  .then((res) => console.log("all " + res))
  .catch((err) => console.log(err));
Promise.any([p1, p2, p3])
  .then((res) => console.log("any " + res))
  .catch((err) => console.log(err));
Promise.race([p1, p2, p3])
  .then((res) => console.log("race " + res))
  .catch((err) => console.log(err));
