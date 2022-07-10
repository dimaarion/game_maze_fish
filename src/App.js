import React, { Component } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import Scena from "./Scena";
import Action from "./Action";
import Body from "./Body";
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
  body = new Body("platform");
  setup = (p5, canvasParentRef) => {
    this.engine = this.Engine.create();
    this.world = this.engine.world;
    // this.Engine.run(this.engine);
    this.boxA = this.Bodies.rectangle(0, 0, 80, 80);
    this.boxA.isStatic = true;
    this.World.add(this.world, this.boxA);
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    //  console.log(this.boxA);
    this.action.setup(p5);
    this.scena.setup();
    this.body.setup(p5);
  };
  draw = (p5) => {
    p5.background(100);
    p5.fill(0);
    // p5.rect(this.boxA.velocity.x, this.boxA.velocity.y, 100, 100);
    this.body.draw(0);
    this.Engine.update(this.engine, 16.666, 2);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
