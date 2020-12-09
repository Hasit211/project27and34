class SlingShot{
    constructor(bodyA, pointB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;

    }
    
   // fly(){
      //  this.sling.bodyA = null;
    //}

    display(){
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x, pointB.y);
                
            
            pop();
        }
    }
    
}