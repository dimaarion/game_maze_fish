import Scena from "./Scena";
export default class Body extends Scena {
  body;
  p5;
  name;
  constructor(name) {
    super();
    this.name = name;
  }
  setup(p5) {
    this.p5 = p5;
    this.body = this.objects(this.name).map((x) =>
      this.Bodies.rectangle(x.x, x.y, x.width, x.height)
    );
    this.body.map((x) => (x.isStatic = true));
    console.log(this.body);
  }

  draw(f) {
    this.body.map((x, i) =>
      f === 0
        ? this.p5.rect(
            x.position.x,
            x.position.y,
            this.objSize(this.name, i).width,
            this.objSize(this.name, i).height
          )
        : this.p5.ellipse(
            x.velocity.x,
            x.velocity.y,
            this.objSize(this.name, i).width,
            this.objSize(this.name, i).height
          )
    );
  }
}
