type GetKeyEvent = "forward" | "backward" | "left" | "right" | "jump" | "keypress";
declare class Input extends EventTarget {
    keybinds: Record<string, string>;
    keys: Array<string>;
    constructor(keybinds: Record<string, string>);
    key(key: string): boolean;
    listen(): void;
    on(event: GetKeyEvent, callback: (e: Event) => void): void;
}
export default Input;
