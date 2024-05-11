declare class Display {
    private canvas;
    gl: WebGLRenderingContext;
    FPS: number;
    constructor(width: number, height: number, FPS?: number);
    loop(): void;
    render(): void;
}
export default Display;
