class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0.2,
            friction : 0.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(w,h){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, w, h);
    }
}