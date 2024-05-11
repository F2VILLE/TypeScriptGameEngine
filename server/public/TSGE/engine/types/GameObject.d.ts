declare class GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    texture: string;
    name: string;
    constructor(x: number, y: number, width: number, height: number, texture: string, name?: string);
    render(ctx: CanvasRenderingContext2D): void;
}
export default GameObject;
