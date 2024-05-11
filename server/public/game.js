import { Display, GameObject, Input } from "./TSGE/index.js";

let display = new Display(800, 600, 50);

display.loop();

const test = new GameObject(10, 10, 10, 10, "red");

display.addEntity(test);

const input = new Input(
  {
    forward: "z",
    backward: "s",
    left: "q",
    right: "d",
    jump: " ",
  },
  display.canvas
);

input.listen();

const speed = 1

input.on("keypress", (e) => {
    console.log(e.detail.key)
})

input.on("forward", () => {
  test.y -= display.deltatime() * speed;
});

input.on("backward", () => {
  test.y += display.deltatime() * speed;
});

input.on("left", () => {
  test.x -= display.deltatime() * speed;
});

input.on("right", () => {
  test.x += display.deltatime() * speed;
});
