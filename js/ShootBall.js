class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.shootBall = Constraint.create(options);
         this.pointB = pointB;
        
        World.add(world,this.shootBall);
    }

    attach(body){
        this.shootBall.bodyA = body;
    }

    shoot(){
        console.log('shoot');
        canonBall.velocityX = 4;
        canonBall.velocityY = 0;
    }

    display(){
        if(this.shootBall.bodyA){

        
        var pointA = this.shootBall.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
}
