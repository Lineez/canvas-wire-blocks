import { RectBounds } from "@/resourses/Rect";

export function isIntersect(rect: RectBounds, x: number, y: number): boolean {
  return !(
    x < rect.x ||
    x > rect.x + rect.width ||
    y < rect.y ||
    y > rect.y + rect.height
  );
}
