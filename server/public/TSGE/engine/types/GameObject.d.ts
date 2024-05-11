type GameObjectEvents = "collision" | "destroy" | "update" | "render";
declare class GameObject extends EventTarget {
    x: number;
    y: number;
    width: number;
    height: number;
    texture: string;
    name: string;
    constructor(x: number, y: number, width: number, height: number, texture: string, name?: string);
    on(event: GameObjectEvents, callback: (e: Event) => void): void;
    collision(other: GameObject): void;
    render(ctx: CanvasRenderingContext2D): void;
}
export default GameObject;
