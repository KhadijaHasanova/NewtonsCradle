class Bob {
  constructor(x,y,r,options){
    var options={        
      isStatic: false,
      resitution: 0,
      friction: 0,
      density: 1.2 
      }
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options);

    //add it to the world
    World.add(world,this.body)
  }
    
    
  display(){
    var bobpos = this.body.position;
    push();
    translate(bobpos.x,bobpos.y);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
}