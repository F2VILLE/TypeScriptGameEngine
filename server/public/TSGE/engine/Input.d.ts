type GetKeyEvent = "forward" | "backward" | "left" | "right" | "jump" | "keypress";
declare class Input extends EventTarget {
    keybinds: {
        forward: string;
        backward: string;
        left: string;
        right: string;
        jump: string;
    };
    constructor(keybinds: {
        forward: string;
        backward: string;
        left: string;
        right: string;
        jump: string;
    } | undefined, canvas: HTMLCanvasElement);
    listen(): void;
    on(event: GetKeyEvent, callback: (e: Event) => void): void;
}
export default Input;
