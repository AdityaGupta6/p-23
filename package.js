class Box{

    constructor(x,y,width,height,options){
 
    
        this.object=Bodies.rectangle(x,y,width ,height,options);
      
    this.width=width;
    this.height=height;
     World.add(world,this.object);
     this.image=loadImage("package.png")
   
    }
     display(){
         var pos=this.object.position
  
    imageMode(CENTER);

    image(this.image,pos.x,pos.y,this.width,this.height);
  
     }
     
    
    } 