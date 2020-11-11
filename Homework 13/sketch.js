var x = 40;
var y = 40;
//mouse
var mousex = 0
var mousey = 0
var circle2 = 55

var myXs = [];
var myYs = [];
var mySize = [];

//canvas
    function setup()
    {
      createCanvas(500,600);
      myXs[0] =300
      myYs[0] =40
      mySize[0]=20
      
      myXs[1] =20
      myYs[1] =500
      mySize[1]=50
      
      myXs[2] =200
      myYs[2] =170
      mySize[2]=40
      
      myXs[3] =100
      myYs[3] =400
      mySize[3]=70
      
      myXs[4] =320
      myYs[4] =280
      mySize[4]=90
      
    }
//player
    function draw()
{   
  background(255,102,102)
  strokeWeight(1);
  player(x,y)
  purpleObstacle()
  tealObstacle()
  mouseObstacle()
  for(i=0;i<myXs.length;i++)
  {
    moveShape(i)
  }
  
  borders()
  
  //whites
  strokeWeight(5)
  fill(255,255,255)
  square(myXs[2], myYs[2], mySize[2]);
  
  //yellows
  fill(480,394,27)
  square(myXs[3], myYs[3], mySize[3]);
  
  //reds
  fill(480,28,10)
 square(myXs[4], myYs[4], mySize[4]);
  
  if(x > 465 && y > 493)
  {
    youWin("yes")
  } else {
    youWin("no")
  }
  if(keyIsDown(68))
  {movePlayer("x","p")
  }
  if(keyIsDown(65))
  {movePlayer("x","n")
  }
    if(keyIsDown(87))
  {movePlayer("y","n")
  }
  if(keyIsDown(83))
  {movePlayer("y","p")
  }     

}
//mouse obstacle
function mouseClicked() 
    { 
      mousex = mouseX;
      mousey = mouseY;
    }
//player
 function player(x,y) 
  {
    var diameter = 35;
    fill(255,255,0);
    circle(x,y,diameter)
  }
//movePlayer
 function movePlayer (axis,direction){
   var dir=0
   if (direction == "p"){
     dir = 5
   } else{ 
     dir = -5
   }
   if (axis == "x"){
     x += dir
   } else {
     y += dir
   }
   
 }
//mouseObstacle
 function mouseObstacle ()
{
  if(mousex != 0)
  {
    fill(255,204,152)
    circle (mousex,mousey,circle2)
  }
}
//purpleObstacle
  function purpleObstacle()
{
  fill(51,0,51)
square(myXs[1], myYs[1], mySize[1]);
}

//tealObstacle
 function tealObstacle()
{
  fill(0,102,102)
  square(myXs[0], myYs[0], mySize[0]);
  
}
//move
function moveShape (shapeNo)
{
  myYs[shapeNo] -= Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  myXs[shapeNo] -= Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  
  
    if(myXs[shapeNo] > width)
    {
        myXs[shapeNo] = 0;
    }
    else if(myXs[shapeNo] < -35)
    {
        myXs[shapeNo] = width
    }
    if(myYs[shapeNo] > height)
    {
       myYs[shapeNo] = 0;
    }
    else if(myYs[shapeNo] < 0)
    {
        myYs[shapeNo] = height
    }
}
//borders
function borders()
{
  strokeWeight(15)
  line(0,0,0,600)
  line(493,0,493,500)
  line(0,595,595,595)
  line(0,5,500,5)
}
//You Win
function youWin(win)
{
  fill(0,0,0)
  textSize(20)
  text("exit",450,550)
  
  if(win == "yes")
  {text("You Win!", 215,280)}
  else{text("Find the Exit",200,280)
}
  
  
}