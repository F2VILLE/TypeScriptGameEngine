import GameObject from "./types/GameObject";
declare class Display {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    FPS: number;
    entities: GameObject[];
    private deltaTime;
    constructor(width: number, height: number, FPS?: number);
    addEntity(entity: GameObject): void;
    loop(): void;
    render(): void;
    deltatime(): number;
}
export default Display;
