class Input extends EventTarget {
    constructor(keybinds) {
        super();
        this.keys = [];
        this.keybinds = keybinds;
    }
    key(key) {
        return this.keys.includes(key);
    }
    listen() {
        document.addEventListener("keypress", (e) => {
            const key = e.key.toLowerCase();
            this.keys.push(key);
            this.dispatchEvent(new CustomEvent("keypress", { detail: { key } }));
            //   switch (key) {
            //     case this.keybinds.forward:
            //       this.dispatchEvent(new CustomEvent("forward"));
            //       break;
            //     case this.keybinds.backward:
            //       this.dispatchEvent(new CustomEvent("backward"));
            //       break;
            //     case this.keybinds.left:
            //       this.dispatchEvent(new CustomEvent("left"));
            //       break;
            //     case this.keybinds.right:
            //       this.dispatchEvent(new CustomEvent("right"));
            //       break;
            //     case this.keybinds.jump:
            //       this.dispatchEvent(new CustomEvent("jump"));
            //       break;
            //   }
            for (const k of Object.keys(this.keybinds)) {
                if (key === this.keybinds[k]) {
                    this.dispatchEvent(new CustomEvent(k));
                }
            }
        });
        document.addEventListener("keyup", (e) => {
            const key = e.key.toLowerCase();
            this.keys = this.keys.filter((k) => k !== key);
        });
    }
    on(event, callback) {
        this.addEventListener(event, callback);
    }
}
export default Input;
