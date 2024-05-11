type GetKeyEvent =
  | "forward"
  | "backward"
  | "left"
  | "right"
  | "jump"
  | "keypress";

class Input extends EventTarget {
  keybinds: {
    forward: string;
    backward: string;
    left: string;
    right: string;
    jump: string;
  };
  constructor(
    keybinds = {
      forward: "z",
      backward: "s",
      left: "q",
      right: "d",
      jump: " ",
    },
    canvas: HTMLCanvasElement
  ) {
    super();

    this.keybinds = keybinds;
  }

  listen() {
    document.addEventListener("keypress", (e) => {
      const key = e.key.toLowerCase();
      this.dispatchEvent(new CustomEvent("keypress", { detail: { key } }));
      switch (key) {
        case this.keybinds.forward:
          this.dispatchEvent(new CustomEvent("forward"));
          break;
        case this.keybinds.backward:
          this.dispatchEvent(new CustomEvent("backward"));
          break;
        case this.keybinds.left:
          this.dispatchEvent(new CustomEvent("left"));
          break;
        case this.keybinds.right:
          this.dispatchEvent(new CustomEvent("right"));
          break;
        case this.keybinds.jump:
          this.dispatchEvent(new CustomEvent("jump"));
          break;
      }
    });
  }

  on(event: GetKeyEvent, callback: (e: Event) => void) {
    this.addEventListener(event, callback);
  }
}

export default Input;
