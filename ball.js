class ball extends BaseClass{
    constructor(x,y)
    {
      var options= {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      super(x,y,50,50);
      this.image = loadImage("sprites/paper.png");
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }