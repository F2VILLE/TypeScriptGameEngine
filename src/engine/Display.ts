import Input from "./Input.js";
import GameObject from "./types/GameObject.js";

class Display extends EventTarget {
canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  FPS: number;
  entities: GameObject[];
  input: Input | null;
  private deltaTime: number = 0;
  constructor(width: number, height: number, FPS: number = 60) {
    super();
    this.canvas = document.querySelector("#game_display") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = width;
    this.canvas.height = height;
    this.FPS = FPS;
    this.entities = [];
    this.input = null
  }

  setupInput(keybinds: Record<string, string>) {
    this.input = new Input(keybinds);
    this.input.listen();
  }

  addEntity(entity: GameObject) {
    this.entities.push(entity);
  }

  loop() {
    this.update()
    this.render();
    setTimeout(() => {
    //   requestAnimationFrame(this.loop.bind(this));
    this.loop();
    }, 1000 / this.FPS);
  }

  update() {
    this.dispatchEvent(new CustomEvent("update"));
    for (const entity of this.entities) {
      if (entity instanceof GameObject) {
        entity.dispatchEvent(new CustomEvent("update"));
        for (const other of this.entities) {
          if (entity !== other && other instanceof GameObject) {
            entity.collision(other);
          }
        }
      }
    }
  }

  on(event: string, callback: (e: Event) => void) {
    this.addEventListener(event, callback);
  }

  render() {
    this.dispatchEvent(new CustomEvent("render"))
    // console.log("FPS :", 1000 / this.deltatime());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const entity of this.entities) {
      entity.render(this.ctx);
    }
    this.deltaTime = Date.now();
  }

  deltatime() {
    return Date.now() - this.deltaTime;
  }
}

export default Display;
