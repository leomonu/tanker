class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06

    }
    this.image = loadImage("assets/canonBall.png")
    this.body = Bodies.circle(x,y,20,options);
    World.add(world,this.body);
  };

  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER)
    image(this.image,0,0,20,20);
    pop();

  };
};
