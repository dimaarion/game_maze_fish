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
  imageTest;

  preload = (p5) => {
    this.imageTest = p5.loadImage("./data/money2.png");
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
    this.animate.setup(p5);
    this.animate.animateE("./data/money2.png");
    this.animate.setupAnimate();
  };
  draw = (p5) => {
    p5.background(100);
    p5.fill(0);
    p5.image(this.imageTest, 1000, 1000, 100, 100);
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
