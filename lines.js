class Line{

    constructor(x,y,width,height){
    var options={
    restitution:0.8,
  isStatic:true
    
    
    }
    
        this.object=Bodies.rectangle(x,y,width ,height,options);
      
    this.width=width;
    this.height=height;
     World.add(world,this.object)
    }
     display(){
         var pos=this.object.position
  
    rectMode(CENTER);
fill("red")
    rect(pos.x,pos.y,this.width,this.height);
  
     }
     
    
    } 