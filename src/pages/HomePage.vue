<template>
  <main>
    <canvas
      id="canvas"
      width="500"
      height="500"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
    ></canvas>

    <div class="button-box">
      <button @click="addRect" class="button">add rect</button>
      <button @click="clearRect" class="button">clear rect</button>
      <button @click="clearLines" class="button">clear lines</button>
      <button @click="randomizeRectSize" class="button">
        randomize rect size
      </button>
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
let selectedPoint: Point | null = null;
// rect
let rectStore: Rect[] = [];
let currentRect: Rect | null = null;
const rectSide = 100;
let isRandomizeRectSize = false;

export default defineComponent({
  mounted() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  },
  unmounted() {
    this.stopLoop();
  },
  methods: {
    animate(loop: boolean) {
      console.log("call loop");
      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // render new\updated objects
      rectStore.forEach((rect) => {
        rect.draw(ctx);
      });

      // call loop
      if (loop) {
        this.startLoop();
      }
    },
    randomizeRectSize() {
      isRandomizeRectSize = !isRandomizeRectSize;
    },
    getRectSize() {
      if (!isRandomizeRectSize) return rectSide;
      return rectSide * (Math.random() * 0.5 + 0.5);
    },
    startLoop(loop = false) {
      raf = requestAnimationFrame(this.animate.bind(this, loop));
    },
    stopLoop() {
      cancelAnimationFrame(raf);
    },
    addRect() {
      rectStore.push(
        new Rect(
          (canvas.width - rectSide) * Math.random(),
          (canvas.height - rectSide) * Math.random(),
          this.getRectSize(),
          this.getRectSize()
        )
      );
      this.startLoop();
    },
    clearRect() {
      rectStore = [];
      this.startLoop();
    },
    clearLines() {
      rectStore.forEach((rect) => {
        rect.getPoints().forEach((point) => (point.endPoint = null));
      });
      this.startLoop();
    },
    onPointClick(point: Point, rect: Rect) {
      // select if point not selected
      if (!selectedPoint) {
        point.isSelect = true;
        selectedPoint = point;
        return;
      }

      // ignore self rect wire
      // if is @selectedPoint has one parent with @point - select @point (choose broter point as @selectedPoint)
      if (selectedPoint.isSelect === rect.getIsAnyPointSelect()) {
        selectedPoint.isSelect = false;
        point.isSelect = true;
        selectedPoint = point;
        return;
      }

      // wire if has @selectedPoint
      selectedPoint.endPoint = point;
      // and clear @selectedPoint
      selectedPoint.isSelect = false;
      selectedPoint = null;
      return;
    },
    mousedownHandler(e: MouseEvent) {
      const { offsetX, offsetY } = e;
      // see all rect and points
      for (let i = rectStore.length - 1; i > -1; i--) {
        const rect = rectStore[i];
        // detect point click
        for (const point of rect.getPoints()) {
          if (this.isIntersect(point.getBounds(), offsetX, offsetY)) {
            this.onPointClick(point, rect);
            return;
          }
        }

        // detect rect click
        if (this.isIntersect(rect.getBounds(), offsetX, offsetY)) {
          currentRect = rect;
          return;
        }
      }
      // miss
      if (selectedPoint) {
        selectedPoint.isSelect = false;
        selectedPoint = null;
      }
    },
    mousedown(e: MouseEvent) {
      this.mousedownHandler(e);
      this.startLoop();
    },
    mousemove(e: MouseEvent) {
      // drag rect
      if (!currentRect) return;
      currentRect.update(e.offsetX, e.offsetY);
      this.startLoop();
    },
    mouseup() {
      // if drag rect -> stop it
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
