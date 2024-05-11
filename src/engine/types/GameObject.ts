
class GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    texture: string
    name: string;
    constructor(x: number, y: number, width: number, height: number, texture: string, name: string = "GameObject") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.texture = texture;
        this.name = name;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default GameObject;