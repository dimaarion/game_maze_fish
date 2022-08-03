import React, { Component } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import Scena from "./Scena";
import Action from "./Action";
import Body from "./Body";
import Animate from "./Animate";
export default class App extends Component {
  World = Matter.World;
  Bodies = Matter.Bodies;
  Engine = Matter.Engine;
  engine;
  world;
  shape;
  ground;
  shape_holder = [];
  boxA;
  d = 0;
  action = new Action();
  scena = new Scena();
  platform = new Body("platform");
  player = new Body("player");
  animate = new Animate();
  animateFish = new Animate();
  imageTest;

  preload = (p5) => {
    this.animate.setup(p5);
    this.animateFish.setup(p5);
    this.animate.animateD(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/lvmz-money2.png",
      6
    );
    this.animateFish.animateD(
      "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/JJrL-swim_to_right_sheet.png",
      6
    );
  };
  setup = (p5, canvasParentRef) => {
    this.engine = this.Engine.create();
    this.world = this.engine.world;
    this.engine.gravity.y = 2;
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    //  console.log(this.boxA);
    this.action.setup(p5);
    this.scena.setup();
    this.platform.setup(p5, this.world);
    this.platform.isStatic(true);
    this.player.figure = 1;
    this.player.setup(p5, this.world);
    this.animate.setupAnimate();
    this.animateFish.setupAnimate();
  };
  draw = (p5) => {
    p5.background(100);
    p5.fill(0);
    this.animate.params();
    p5.image(this.animate.sprite(), 100, 100, 200, 200);
    this.animateFish.params();
    p5.image(this.animateFish.sprite(), 100, 300, 200, 200);
    p5.push();
    this.player.translates();
    this.player.draw(1);
    this.platform.draw(0);
    this.Engine.update(this.engine, 16.666, 1);
    p5.pop();
  };

  render() {
    return (
      <Sketch setup={this.setup} draw={this.draw} preload={this.preload} />
    );
  }
}
