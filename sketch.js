//You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
 var engine,world;
 var tanker,canonBall,ground,shootBall;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    //Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,380,8000,20);
    tanker=new Tanker(40,370,40,40);
    canonBall=new CanonBall(-4,350);
   // console.log(canonBall);
    //shootBall=new ShootBall(canonBall.body,{x:100,y:50});
    console.log(shootBall);
    ball = new Ball(700,360,20);
    ball1 = new Ball(750,350,20);
    
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
Engine.update(engine);
ground.display();
tanker.display();
ball.display();
ball1.display();



//shootBall.display();
if(canonBall.body.position.x>60){
    canonBall.display();

text("TANK SHOOTER GAME",400,200);



}

}

function keyPressed(){
    
}


function keyReleased() {
    console.log('keyReleased');
    // Call the shoot method for the cannon.
    if(keyCode === 32) {
        console.log('keyDown');
        // Matter.Body.setPosition(canonBall.body,{x:-100,y:0});
        // shootBall.shoot();
        // Matter.Body.setVelocity(canonBall,{x:4,y:0});
        // canonBall.body.velocity.x = 4;
        // canonBall.body.speed.y = 0;
        Matter.Body.setVelocity(canonBall.body,{x:100,y:0});
}} 