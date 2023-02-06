<template>
  <main>
    <canvas
      id="canvas"
      width="500"
      height="500"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @contextmenu="contextmenu"
    ></canvas>

    <div class="button-box">
      <button
        v-for="button in items"
        :key="button.name"
        @click="button.action"
        class="button"
      >
        {{ button.name }}
      </button>
    </div>
    <div class="description">
      <ul>
        <li>Use context menu to action</li>
        <li>Add / Drag / Wire / Delete rect</li>
        <li>Add / Wire / Delete lines</li>
        <li>Randomize rect size (for new added)</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Rect } from "@/resourses/Rect";
import { Point } from "@/resourses/Point";
import { isIntersect } from "@/resourses/isIntersect";
import { MouseButtons } from "@/resourses/enums";
import { ContextMenuContructor, ContextMenuOption } from "@/resourses/Menu";

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
// contextmenu
let contextMenu: ContextMenuContructor | undefined;

interface Data {
  items: ContextMenuOption[];
}

export default defineComponent({
  data(): Data {
    return {
      items: [
        {
          name: "add rect",
          action: () => this.addRect(),
        },
        {
          name: "clear rect",
          action: () => this.clearRect(),
        },
        {
          name: "clear lines",
          action: () => this.clearLines(),
        },
        {
          name: "randomize rect size (toggle (for new added))",
          action: () => this.randomizeRectSize(),
        },
      ],
    };
  },
  mounted() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  },
  unmounted() {
    this.stopLoop();
    contextMenu?.remove();
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
          if (isIntersect(point.getBounds(), offsetX, offsetY)) {
            this.onPointClick(point, rect);
            return;
          }
        }

        // detect rect click
        if (isIntersect(rect.getBounds(), offsetX, offsetY)) {
          currentRect = rect;
          return;
        }
      }
      // miss
      // unselect @selectedPoint
      if (selectedPoint) {
        selectedPoint.isSelect = false;
        selectedPoint = null;
      }
      // close @contextMenu
      if (contextMenu?.isMenuOpen) {
        contextMenu.isMenuOpen = false;
      }
    },
    mousedown(e: MouseEvent) {
      if (e.button === MouseButtons.right) return;
      this.mousedownHandler(e);
      this.startLoop();
    },
    mousemove(e: MouseEvent) {
      // drag rect
      if (!currentRect) return;
      currentRect.update(e.offsetX, e.offsetY);
      this.startLoop();
    },
    mouseup(e: MouseEvent) {
      if (e.button === MouseButtons.right) return;
      // if drag rect -> stop it
      if (currentRect) {
        currentRect = null;
      }
    },
    contextmenu(e: MouseEvent) {
      e.preventDefault();
      // add @contextMenu
      if (!contextMenu) {
        contextMenu = new ContextMenuContructor(this.items);
        document.body.append(contextMenu.create(e.offsetY, e.offsetX));
        return;
      }

      // open @contextMenu if closed
      if (!contextMenu.isMenuOpen) {
        contextMenu.isMenuOpen = true;
      }
      // update position instead of recreate
      contextMenu.updatePosition(e.offsetY, e.offsetX);
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

.contextmenu {
  position: absolute;
  z-index: 2;
  display: none;

  &.open {
    display: block;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 0 10px;
    min-height: 30px;
    background-color: gray;
    transition: all 0.3s linear;

    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    &:hover {
      cursor: pointer;
      background-color: gainsboro;
    }
  }
}
</style>
