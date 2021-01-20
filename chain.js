class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 2
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(7);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}