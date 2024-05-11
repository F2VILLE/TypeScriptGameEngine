import { Display, GameObject } from "./TSGE/index.js";

let display = new Display(800, 600, 50);
const input = display.input
display.loop();

const test = new GameObject(10, 10, 10, 10, "red");

display.addEntity(test);

// input.listen();

const speed = 0.5;

display.on("update", () => {
    console.log("is Z pushed", input.key("z"))
  if (input.key("z")) {
    test.y -= display.deltatime() * speed;
  }

  if (input.key("s")) {
    test.y += display.deltatime() * speed;
  }

  if (input.key("q")) {
    test.x -= display.deltatime() * speed;
  }

  if (input.key("d")) {
    test.x += display.deltatime() * speed;
  }
});
