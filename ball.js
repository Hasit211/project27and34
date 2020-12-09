class Ball{
    constructor(x,y){
    var options = {
    isStatic : true
    
    }
    this.body = Bodies.circle(x,y,50,options)
this.radius =50
    World.add(world,this.body) 
    }
    display(){
                push();
            fill ("pink")
        rotate(this.body.angle)
            translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)    
            pop();
    }
    }