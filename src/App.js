import React, { Component } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";

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
  };
  draw = (p5) => {
    p5.background(100);
    p5.fill(0);
    p5.rect(this.boxA.velocity.x, this.boxA.velocity.y, 100, 100);
    this.Engine.update(this.engine, 16.666, 2);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
