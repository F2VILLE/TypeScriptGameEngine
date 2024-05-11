class Display {
    constructor(width, height, FPS = 60) {
        this.canvas = document.querySelector("#game_display");
        this.gl = this.canvas.getContext("webgl");
        this.canvas.width = width;
        this.canvas.height = height;
        this.FPS = FPS;
        const program = this.gl.createProgram();
        const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
        const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.useProgram(program);
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    }
    loop() {
        this.render();
        setTimeout(() => {
            requestAnimationFrame(this.loop.bind(this));
        }, 1000 / this.FPS);
    }
    render() {
        console.log("AAAH Rendering display");
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    }
}
export default Display;
