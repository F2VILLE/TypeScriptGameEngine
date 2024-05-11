class Texture {
    constructor(image) {
        this.image = image;
        this.image = image;
    }
    render(ctx, x, y, width, height) {
        ctx.drawImage(this.image, x, y, width, height);
    }
}
export default Texture;
