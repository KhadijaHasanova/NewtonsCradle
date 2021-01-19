class Bob {
  constructor(x, y, r) {
    var options = {
      restitution: 1,
      friction: 0
    }
    this.r = r;
    this.body = Bodies.circle(x,y,50,options);

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("blue");
    ellipseMode(CENTER);
    ellipse(0,0,100);
    pop();
  }
}
