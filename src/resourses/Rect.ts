import { Point } from "@/resourses/Point";

export interface RectBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect {
  private points: Point[];

  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) {
    this.points = [
      new Point("left", 10, this.getBounds()),
      new Point("right", 10, this.getBounds()),
      new Point("top", 10, this.getBounds()),
      new Point("bottom", 10, this.getBounds()),
    ];
  }

  update(x: number, y: number) {
    this.x = x - this.width / 2;
    this.y = y - this.height / 2;

    this.points.forEach((point) => {
      point.update(this.x, this.y);
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.points.forEach((point) => {
      point.draw(ctx);
    });
  }

  getBounds(): RectBounds {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  getPoints(): Point[] {
    return this.points;
  }

  getIsAnyPointSelect(): boolean {
    return !!this.points.find((point) => point.isSelect);
  }
}
