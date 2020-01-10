function getOne() {
  return Promise.resolve(1);
}
function addTwoNumbers(one, two) {
  return one + two;
}

async function main() {
  getOne().then(first => {
    const second = 2;
    console.log(addTwoNumbers(first, second));
  });
}

main();
