class Form {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.button = createButton('Submit');
      this.question = createElement('h1');
      this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.message.hide();
    }
  
    display(){
      
      this.title.html("Welcome to SPF");
      this.title.position(350, 0);
      this.input1.position(150, 230);
      this.button.position(450, 450);
  
      this.button.mousePressed(()=>{
        
         this.message.html("Welcom to Spf");
         this.message.position(50, 550);
         gameState = PLAY;
  
      });
    }
  }
