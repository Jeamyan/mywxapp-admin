<template>
  <canvas id="canvas"></canvas>
</template>
<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  components: {},

  mounted() {
    this.init();
  },
  destroyed() {
    if (this.timer) {
      window.cancelAnimFrame(this.timer);
    }

    window.onresize = null;
  },
  methods: {
    init() {
      let self = this;
      let canvasPage = document.getElementById('canvas');

      //设置画布分辨率
      function setCanvasRes() {
        canvasPage.width = document.documentElement.clientWidth;
        canvasPage.height = document.documentElement.clientHeight;
      }

      setCanvasRes();

      //监听屏幕大小改变 ， 重新设置画布大小
      window.onresize = function () {
        window.requestAnimFrame(setCanvasRes);
      };

      let ctx = canvasPage.getContext('2d');
      let zhongX = 800;
      let zhongY = 385;
      let colors = ["#ffffff","#E21779","#2d8cf0","#19be6b", "#ff9900","##ed3f14","#feea00","#a9df85"];

      function randomNum(x, y) {
        return Math.floor(Math.random() * (y - x + 1) + x);
      }

      function Ball() {
        this.r = randomNum(1, 1.5);
        this.color = colors[randomNum(0,colors.length-1)];

        this.x = randomNum(this.r, canvasPage.width - this.r);
        this.y = randomNum(this.r, canvasPage.height - this.r);

        this.speedX = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
        this.speedY = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
      }

      Ball.prototype.move = function () {
        this.x += this.speedX * 0.2;
        this.y += this.speedY * 0.2;
        if (this.x <= this.r) {
          this.x = this.r;
          this.speedX *= -1;
        }
        if (this.x >= canvasPage.width - this.r) {
          this.x = canvasPage.width - this.r;
          this.speedX *= -1;
        }
        //小球碰到上边界的处理 反弹
        if (this.y <= this.r) {
          this.y = this.r;
          //反弹
          this.speedY *= -1;
        }
        //小球碰到下边界的处理 反弹
        if (this.y >= canvasPage.height - this.r) {
          this.y = canvasPage.height - this.r;
          //反弹
          this.speedY *= -1;
        }
      };
      Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };

      let balls = [];
      for (let i = 0; i < 0.00004 * canvasPage.width * canvasPage.height; i++) {
        let ball = new Ball();
        balls.push(ball);
      }

      function ballAndMouse(obj) {
        let disX = Math.abs(zhongX - obj.x);
        let disY = Math.abs(zhongY - obj.y);
        return Math.sqrt(disX * disX + disY * disY);
      }

      function ballAndBall(obj1, obj2) {
        let disX = Math.abs(obj1.x - obj2.x);
        let disY = Math.abs(obj1.y - obj2.y);
        return Math.sqrt(disX * disX + disY * disY);
      }

      //执行动画
      function animation() {
        ctx.clearRect(0, 0, canvasPage.width, canvasPage.height);
        for (let i = 0; i < balls.length; i++) {
          balls[i].move();
          balls[i].draw();
          if (ballAndMouse(balls[i]) < 130) {
            ctx.lineWidth = (130 - ballAndMouse(balls[i])) * 1.5 / 130;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(zhongX, zhongY);
            ctx.strokeStyle = balls[i].color;
            ctx.stroke();
          }
        }
        for (let i = 0; i < balls.length; i++) {
          for (let j = 0; j < balls.length; j++) {
            if (ballAndBall(balls[i], balls[j]) < 80) {
              ctx.lineWidth = (80 - ballAndBall(balls[i], balls[j])) * 0.6 / 80;
              ctx.globalAlpha = (130 - ballAndBall(balls[i], balls[j])) * 1 / 80;
              ctx.beginPath();
              ctx.moveTo(balls[i].x, balls[i].y);
              ctx.lineTo(balls[j].x, balls[j].y);
              ctx.strokeStyle = balls[i].color;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1.0;

        //递归执行
        self.timer = window.requestAnimFrame(animation);
      }

      animation();

      canvasPage.onmousemove = (event) => {
        event = event || window.event;
        zhongX = event.offsetX;
        zhongY = event.offsetY;
      };
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  #canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #34485D;
    overflow: hidden;
    z-index: 0;
    left: 0;
  }
</style>
