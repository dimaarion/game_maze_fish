import Action from "./Action";
export default class Animate extends Action {
  name;
  img;
  x;
  y;
  w;
  h;
  xr = 0;
  xp = 0;
  frame = 0;
  widthI = 100;
  heightI = 100;
  widthSp = 0;
  format = 0;
  rate = 5;
  orientation = 0;
  p5;
  animated = true;

  image;

  setup(p5) {
    this.p5 = p5;
  }

  animateA(name, frame, format, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.frame = frame;
    this.format = format;
  }
  animateB(name, frame, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.frame = frame;
  }

  animateC(name, frame, format) {
    this.name = name;
    this.frame = frame;
    this.format = format;
  }
  animateD(name, frame) {
    this.name = name;
    this.frame = frame;
  }
  animateE(name) {
    this.name = name;
    this.animated = false;
  }

  setupAnimate() {
    this.img = this.p5.loadImage(this.name);
    if (this.animated) {
      this.image = new Array(this.frame);
      this.widthI = this.img.width;
      this.heightI = this.img.height;
      if (this.orientation == 0) {
        if (this.widthSp != 0) {
          this.img.resize(this.frame * this.widthSp, this.heightI);
        } else {
          this.widthSp = this.widthI / this.frame;
        }
      } else {
        if (this.widthSp != 0) {
          this.img.resize(this.widthI, this.frame * this.widthSp);
        } else {
          this.widthSp = this.heightI / this.frame;
        }
      }

      for (let i = 0; i < this.image.length; i++) {
        if (this.orientation == 0) {
          this.image[i] = this.img.get(
            i * this.widthSp,
            0,
            this.widthSp,
            this.heightI
          );
        } else {
          this.image[i] = this.img.get(
            0,
            i * this.widthSp,
            this.widthI,
            this.widthSp
          );
        }
      }
    }
  }

  params() {
    if (this.format == 0) {
      this.xr += 1;
      if (this.xr > this.rate) {
        this.xp = this.xp + 1;
        this.xr = 0;
      }
      if (this.xp > this.frame - 1) {
        this.xp = 0;
      }
    } else if (this.format == 1) {
      this.xr += 1;
      if (this.xr > this.rate) {
        this.xp = this.xp + 1;
        this.xr = 0;
      }
      if (this.xp > this.frame - 1) {
        this.xp = this.xp - 1;
      }
    }
  }

  sprite() {
    try {
      if (this.animated) {
        return this.image[this.xp];
      } else {
        return this.img;
      }
    } catch (Exception) {
      return this.img;
    }
  }

  getImage(x, y) {
    this.p5.image(this.img, 0, 0);
  }

  spriteRect(w, h) {
    try {
      if (this.animated) {
        this.image[this.xp].resize(w, h);
        return this.image[this.xp];
      } else {
        this.img.resize(w, h);
        return this.img;
      }
    } catch (Exception) {
      return this.img;
    }
  }
  spriteEllipse(w) {
    try {
      if (this.animated) {
        this.image[this.xp].resize(w, w);
        return this.image[this.xp];
      } else {
        this.img.resize(this.w, this.w);
        return this.img;
      }
    } catch (Exception) {
      return this.img;
    }
  }

  spriteInt(w, h, i) {
    try {
      if (this.animated) {
        this.image[i].resize(w, h);
        return this.image[i];
      } else {
        this.img.resize(w, w);
        return this.img;
      }
    } catch (Exception) {
      return this.img;
    }
  }

  draw() {
    this.params();
    try {
      if (this.animated) {
        this.p5.image(this.image[this.xp], this.x, this.y, this.w, this.h);
      }
    } catch (Exception) {
      console.log("error");
    }
  }
}
