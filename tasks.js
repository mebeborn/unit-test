const getArray = (argv) => {
  let arr = [];
  for (let i = 1; i <= argv; i++) {
    arr = [...arr, i];
  };
  return arr;
};

const naturalNumbers = (argv) => {
  const arr = getArray(argv);
  let squares = [];
  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j <= arr.length; j++) {
        if (j / i === i) {
          squares = [...squares, i];
        }
      }
    }
  };
  return squares;
};

const PythagoreanTriple = (argv) => {
  const arr = getArray(argv);
  let arrTriple = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      for (let p = 0; p < arr.length; p++) {
        const a = arr[i] ** 2;
        const b = arr[k] ** 2;
        const c = arr[p] ** 2;
        if (a + b === c && arr[i] <= arr[k] && arr[k] <= arr[p]) {
          arrTriple = [...arrTriple, [arr[i], arr[k], arr[p]]];
        }
      }
    }
  };
  return arrTriple;
};

module.exports = {
  getArray,
  naturalNumbers,
  PythagoreanTriple,
};
