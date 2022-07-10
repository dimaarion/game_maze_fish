import Matter from "matter-js";
export default class Action {
  World = Matter.World;
  Bodies = Matter.Bodies;
  Engine = Matter.Engine;
  p5;
  setup(p5) {
    this.p5 = p5;
  }
  procentIn(n, p) {
    return (n / 100) * p;
  }
  procent(x) {
    let r = this.p5.width + this.p5.height;
    return this.procentIn(r, x);
  }
  procentX(x) {
    let r = this.p5.width;
    return this.procent(r, x);
  }
  procentY(x) {
    let r = this.p5.height;
    return this.procent(r, x);
  }
  procentInv(n, p) {
    return (p * 100) / n;
  }
}
