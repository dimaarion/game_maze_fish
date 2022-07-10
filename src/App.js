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
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    this.engine = this.Engine.create(); 
    this.world = this.engine.world;
    this.Engine.run(this.engine);
    this.boxA = this.Bodies.rectangle(400, 200, 80, 80);
    this.World.add(this.world,this.boxA);
  };
  draw = p5 => {
    
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
