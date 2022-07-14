import Matter from "matter-js";
import Scena from "./Scena";
export default class Body extends Scena {
  body;
  p5;
  name;
  figure = 0;
  constructor(name) {
    super();
    this.name = name;
  }
  setup(p5, world) {
    this.p5 = p5;
    this.body = this.objects(this.name).map((x) =>
      this.figure === 0
        ? this.Bodies.rectangle(
            this.procent(this.procentInv(this.scenaWidth(), x.x + x.width / 2)),
            this.procent(
              this.procentInv(this.scenaHeight(), x.y + x.height / 2)
            ),
            this.procent(this.procentInv(this.scenaWidth(), x.width)),
            this.procent(this.procentInv(this.scenaHeight(), x.height))
          )
        : this.Bodies.circle(
            this.procent(this.procentInv(this.scenaWidth(), x.x + x.width / 2)),
            this.procent(
              this.procentInv(this.scenaHeight(), x.y + x.height / 2)
            ),
            this.procent(this.procentInv(this.scenaWidth(), x.width / 2))
            //this.procent(this.procentInv(this.scenaHeight(), x.height))
          )
    );

    this.body.map((x) => this.World.add(world, x));
    console.log(this.body);
  }

  isVelocity(vx, vy, i) {
    Matter.Body.setVelocity(this.body[i], { x: vx, y: vy });
  }

  isStatic(t) {
    this.body.map((x) => (x.isStatic = t));
  }

  translates() {
    for (let i = 0; i < this.body.length; i++) {
      this.p5.translate(
        -this.body[i].position.x + this.p5.width / 2,
        -this.body[i].position.y + this.p5.height / 2
      );
    }
  }
  draw(f) {
    this.p5.rectMode(this.p5.CENTER);
    this.body.map((x, i) =>
      this.figure === 0
        ? this.p5.rect(
            x.position.x,
            x.position.y,
            this.procent(
              this.procentInv(
                this.scenaWidth(),
                this.objSize(this.name, i).width
              )
            ),
            this.procent(
              this.procentInv(
                this.scenaHeight(),
                this.objSize(this.name, i).height
              )
            )
          )
        : this.p5.ellipse(
            x.position.x,
            x.position.y,
            this.procent(
              this.procentInv(
                this.scenaWidth(),
                this.objSize(this.name, i).width
              )
            ),
            this.procent(
              this.procentInv(
                this.scenaHeight(),
                this.objSize(this.name, i).width
              )
            )
          )
    );
  }
}
