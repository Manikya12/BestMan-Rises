class drop{
    constructor(x, y, r) {
      var options={
        restitution:0.8,
        friction:0.5,
        density:1.2

      }
      this.r=5
      this.x=x 
      this.y=y 
      this.body = Bodies.circle(x, y, 5 ,options); 
      World.add(world, this.body);
    }
      display(){
        
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, 5,5)
        pop()
      }

      update(){
        if(this.body.position.y>height) {
           
               Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
        }
      }
    };
