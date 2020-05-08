class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 0.4
    }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
  }

  display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(0,0,this.radius);
    
    pop();


  }
}
