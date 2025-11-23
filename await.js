const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 8000);
});

// It was how we resolve or handle promises with then

// function getData() {
//   p.then((res) => console.log(res));

//   console.log("After promise resolve line");
// }

// getData();

async function handlePromises() {
  console.log("before await 1");

  const data = await p;
  console.log(data);
  console.log("after await 1");

  console.log("before await 2");
  const data2 = await p2;
  console.log(data2);
  console.log("after await 2");
}

function printName() {
  setTimeout(() => {
    console.log("Shantvanu Mutha");
  }, 8000);

  //   console.log("Shantvanu Mutha");
}

handlePromises(); // function will go out of call stack if await encounters in the code and then moves onto the next function and then complete it and then come back if the new one also takes time then it also goes out of stack and then acc to the comnpletiion the first one gets printed.
printName();
