declare class Texture {
    image: HTMLImageElement;
    constructor(image: HTMLImageElement);
    render(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void;
}
export default Texture;
