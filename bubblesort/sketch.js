function setup() {
  createCanvas(1000, 720);
  background("black");
}

let list = Array.from({ length: 200 }, () => Math.floor(Math.random() * 500));

const render = array => {
  clear();
  background("black");
  let x = 0;
  let y = 720;

  array.forEach(item => {
    rectMode(CORNERS);
    rect(x, y, x + 5, 720 - item);
    x = x + 5;
  });
};

const sort = (array, a = 0, b = 1) => {
  while (b < array.length) {
    if (array[a] > array[b]) {
      swap(array, a, b);
    }
    a++;
    b++;
  }
  return array;
};

const swap = (array, from, to) => {
  const value = array[from];
  array.splice(from, 1);
  array.splice(to, 0, value);
  return array;
};

//This works because draw keeps invoking the sort function at the framerate,
//to do it properly you would have to invoke sort again while
//checking if the array is sorted on each run
function draw() {
  sort(list);
  render(list);
  frameRate(10);
}
