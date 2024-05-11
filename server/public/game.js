import { Display, GameObject } from "./TSGE/index.js";

let display = new Display(800, 600, 50);

display.setupInput({
  shoot: "x",
});

const input = display.input;
display.loop();

const player = new GameObject(10, 20, 10, 15, "red");
const test2 = new GameObject(60, 50, 20, 30, "blue");

display.addEntity(player);
display.addEntity(test2);

player.on("collision", (e) => {
  console.log("collision", e.detail);
})

const speed = 0.5;

display.input.on("shoot", (e) => {
  console.log("shoot", e);
});

display.on("update", () => {
  console.log("is Z pushed", input.key("z"));
  if (input.key("z")) {
    player.y -= display.deltatime() * speed;
  }

  if (input.key("s")) {
    player.y += display.deltatime() * speed;
  }

  if (input.key("q")) {
    player.x -= display.deltatime() * speed;
  }

  if (input.key("d")) {
    player.x += display.deltatime() * speed;
  }
});
