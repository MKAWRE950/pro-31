class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 1
        }
        
        this.body = Bodies.circle(x,y,this.radius,options)
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }    
    
}