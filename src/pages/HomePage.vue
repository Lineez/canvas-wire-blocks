<template>
  <main>
    <canvas
      id="canvas"
      width="500"
      height="500"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @click="click"
    ></canvas>

    <div class="button-box">
      <button @click="addRect" class="button">add rect</button>
      <button @click="clearRect" class="button">clear rect</button>
      <button @click="clearLines" class="button">clear lines</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rect, RectBounds } from "@/resourses/Rect";
import { Point } from "@/resourses/Point";

// global
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let raf: number;
let lastTime = 0;
// click
let mouse = {
  x: 0,
  y: 0,
};
let lastPoint: Point | null = null;
// rect
let rectStore: Rect[] = [];
let currentRect: Rect | null = null;

export default defineComponent({
  mounted() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    raf = requestAnimationFrame(this.animate);
  },
  unmounted() {
    cancelAnimationFrame(raf);
  },
  methods: {
    animate(timestamp: number) {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      // console.log('deltaTime', deltaTime)
      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // render new\updated objects
      rectStore.forEach((rect) => {
        rect.draw(ctx);
      });

      // call loop
      raf = requestAnimationFrame(this.animate);
    },
    addRect() {
      rectStore.push(
        new Rect(
          canvas.width * Math.random(),
          canvas.height * Math.random(),
          100,
          100
        )
      );
    },
    clearRect() {
      rectStore = [];
    },
    clearLines() {
      rectStore.forEach((rect) => {
        rect.getPoints().forEach((point) => (point.endPoint = null));
      });
    },
    click(e: MouseEvent) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;

      for (const rect of rectStore) {
        for (const point of rect.getPoints()) {
          if (this.isIntersect(point.getBounds(), e.offsetX, e.offsetY)) {
            if (!lastPoint) {
              lastPoint = point;
              return;
            }
            if (lastPoint.x === point.x) return; // ignore self

            console.log("lastPoint", lastPoint);
            console.log("point", point);
            lastPoint.endPoint = point;
            lastPoint = null;
            return;
          }
        }
      }
    },
    mousedown(e: MouseEvent) {
      for (const rect of rectStore) {
        if (this.isIntersect(rect.getBounds(), e.offsetX, e.offsetY)) {
          // detect rect click
          currentRect = rect;
        }
      }
    },
    mousemove(e: MouseEvent) {
      if (!currentRect) return;

      currentRect.update(e.offsetX, e.offsetY);
    },
    mouseup() {
      if (currentRect) {
        currentRect = null;
      }
    },
    isIntersect(rect: RectBounds, x: number, y: number) {
      return !(
        x < rect.x ||
        x > rect.x + rect.width ||
        y < rect.y ||
        y > rect.y + rect.height
      );
    },
  },
});
</script>

<style lang="scss">
#canvas {
  border: 1px solid #000;
}
.button-box {
  display: flex;
  column-gap: 10px;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 15px;
  border: 1px solid green;
  color: green;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: green;
    color: #fff;
  }
}
</style>
