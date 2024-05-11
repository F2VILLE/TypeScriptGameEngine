import Input from "./Input.js";
import GameObject from "./types/GameObject.js";
class Display extends EventTarget {
    constructor(width, height, FPS = 60) {
        super();
        this.deltaTime = 0;
        this.canvas = document.querySelector("#game_display");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
        this.FPS = FPS;
        this.entities = [];
        this.input = null;
    }
    setupInput(keybinds) {
        this.input = new Input(keybinds);
        this.input.listen();
    }
    addEntity(entity) {
        this.entities.push(entity);
    }
    loop() {
        this.update();
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
    on(event, callback) {
        this.addEventListener(event, callback);
    }
    render() {
        this.dispatchEvent(new CustomEvent("render"));
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
