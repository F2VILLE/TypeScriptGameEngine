
class Texture {
    constructor(public image: HTMLImageElement) {
        this.image = image;
    }

    render(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
        ctx.drawImage(this.image, x, y, width, height);
    }
}

export default Texture;