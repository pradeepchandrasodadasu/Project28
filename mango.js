class Mango{
    constructor(x,y,w,h,r){
        var options = {
            isStatic : true,
            restitution : 0.2,
            friction : 1
        }
        this.body = Bodies.circle(x,y,w,h,r,options);
        this.width = w;
        this.height = h;
        this.radius = r;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height, this.radius);
    }
}