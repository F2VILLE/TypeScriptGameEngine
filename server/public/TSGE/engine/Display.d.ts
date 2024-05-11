import Input from "./Input.js";
import GameObject from "./types/GameObject.js";
declare class Display extends EventTarget {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    FPS: number;
    entities: GameObject[];
    input: Input;
    private deltaTime;
    constructor(width: number, height: number, FPS?: number);
    addEntity(entity: GameObject): void;
    loop(): void;
    on(event: string, callback: (e: Event) => void): void;
    render(): void;
    deltatime(): number;
}
export default Display;
