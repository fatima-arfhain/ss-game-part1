class Spaceship{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("assets/SpaceShip.png");
  }

  display(){
     image( this.image, this.x, this.y, this.width, this.height); 
  }
}