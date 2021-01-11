class Roof {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);

      //add it to the world
      World.add(world, this.body);
    }
    display(){
      var roofpos = this.body.position;
      push();
      rectMode(CENTER);
      fill("green");
      strokeWeight(0);
      rect(roofpos.x, roofpos.y, this.width, this.height);
      pop();
    }
  }