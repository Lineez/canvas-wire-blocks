export class Line {
  static draw(
    ctx: CanvasRenderingContext2D,
    upX: number,
    upY: number,
    toX: number,
    toY: number
  ) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(upX, upY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }
}
