import Input from "./Input";
import GameObject from "./types/GameObject";

class Display {
canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  FPS: number;
  entities: GameObject[];
  private deltaTime: number = 0;
  constructor(width: number, height: number, FPS: number = 60) {
    this.canvas = document.querySelector("#game_display") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = width;
    this.canvas.height = height;
    this.FPS = FPS;
    this.entities = [];
  }

  addEntity(entity: GameObject) {
    this.entities.push(entity);
  }

  loop() {
    this.render();
    setTimeout(() => {
    //   requestAnimationFrame(this.loop.bind(this));
    this.loop();
    }, 1000 / this.FPS);
  }

  render() {
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
