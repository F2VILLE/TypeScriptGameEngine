
type GameObjectEvents = "collision" | "destroy" | "update" | "render";

class GameObject extends EventTarget {
    x: number;
    y: number;
    width: number;
    height: number;
    texture: string
    name: string;
    constructor(x: number, y: number, width: number, height: number, texture: string, name: string = "GameObject") {
        super()
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.texture = texture;
        this.name = name;
    }

    on(event: GameObjectEvents, callback: (e: Event) => void) {
        this.addEventListener(event, callback);
    }

    collision(other: GameObject) {
        const left = this.x;
        const right = this.x + this.width;
        const top = this.y;
        const bottom = this.y + this.height;

        const otherLeft = other.x;
        const otherRight = other.x + other.width;
        const otherTop = other.y;
        const otherBottom = other.y + other.height;

        if (left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop) {
            this.dispatchEvent(new CustomEvent("collision", { detail: { other } }));
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.texture;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default GameObject;