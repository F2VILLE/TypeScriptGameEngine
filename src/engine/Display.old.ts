class Display {
  private canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
  FPS: number;
  constructor(width: number, height: number, FPS: number = 60) {
    this.canvas = document.querySelector("#game_display") as HTMLCanvasElement;
    this.gl = this.canvas.getContext("webgl") as WebGLRenderingContext;
    this.canvas.width = width;
    this.canvas.height = height;
    this.FPS = FPS;
    const program = this.gl.createProgram();
    const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    this.gl.attachShader(program as WebGLProgram, vertexShader as WebGLShader);
    this.gl.attachShader(program as WebGLProgram, fragmentShader as WebGLShader);
    this.gl.useProgram(program)
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
