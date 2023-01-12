import { Line } from "@/resourses/Line";
import { RectBounds } from "@/resourses/Rect";

type PointPosition = "left" | "right" | "top" | "bottom";

export class Point {
  x: number;
  y: number;
  endPoint: Point | null;
  isSelect: boolean;

  constructor(
    private position: PointPosition,
    private radius: number,
    private rectBounds: RectBounds
  ) {
    this.x = this.rectBounds.x;
    this.y = this.rectBounds.y;
    this.endPoint = null;
    this.isSelect = false;
    this.update(this.x, this.y);
  }

  update(x: number, y: number) {
    const { width, height } = this.rectBounds;
    // todo swap to positionMap
    // todo add update if width\height change
    if (this.position === "left") {
      this.x = x;
      this.y = y + height / 2;
    } else if (this.position === "right") {
      this.x = x + width;
      this.y = y + height / 2;
    } else if (this.position === "top") {
      this.x = x + width / 2;
      this.y = y;
    } else if (this.position === "bottom") {
      this.x = x + width / 2;
      this.y = y + height;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // border
    ctx.strokeStyle = this.isSelect ? "orange" : "white";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    // circle
    ctx.fillStyle = this.isSelect ? "yellow" : "green";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    if (this.endPoint) {
      Line.draw(ctx, this.x, this.y, this.endPoint.x, this.endPoint.y);
    }
  }

  getBounds(): RectBounds {
    return {
      x: this.x - this.radius * 1.5,
      y: this.y - this.radius * 1.5,
      width: this.radius * 3,
      height: this.radius * 3,
    };
  }
}
