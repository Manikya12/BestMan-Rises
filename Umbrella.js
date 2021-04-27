class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.batmanImg= loadImage("Bestman-01.png")
        this.brad = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        
    if(frameCount >= 200){
        image(this.batmanImg,pos.x,pos.y+70,200,300)
    }

    else{
        image(this.brad,pos.x,pos.y+70,300,300);
    }
}
}
