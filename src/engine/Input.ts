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
  keys: Array<string> = [];
  constructor(
    keybinds = {
      forward: "z",
      backward: "s",
      left: "q",
      right: "d",
      jump: " ",
    }
  ) {
    super();

    this.keybinds = keybinds;
  }

  key(key: string) {
    return this.keys.includes(key);
  }

  listen() {
    document.addEventListener("keypress", (e) => {
      const key = e.key.toLowerCase();
      this.keys.push(key);
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

    document.addEventListener("keyup", (e) => {
      const key = e.key.toLowerCase();
      this.keys = this.keys.filter((k) => k !== key);
    });
  }

  on(event: GetKeyEvent, callback: (e: Event) => void) {
    this.addEventListener(event, callback);
  }
}

export default Input;
