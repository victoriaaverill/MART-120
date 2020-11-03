var x = 40;
var y = 40;
//tealsquare
var tealx = 300
var tealy = 40
var  tealspeedx = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
 var tealspeedy = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
//purplesquare
var purplex = 20
var purpley = 500
var purplespeed = 4
//mouse
var mousex = 0
var mousey = 0
var circle2 = 55
//canvas
    function setup()
    {
      createCanvas(500,600);
      
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
  tealMove()
  purpleMove()
  borders()
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
square(purplex,purpley,50)
}
//purpleMove
function purpleMove()
{
    purplex += purplespeed;
  if(purplex >= width)
  {
    purplex = -50
 }
}
//tealObstacle
 function tealObstacle()
{
  fill(0,102,102)
  square(tealx,tealy,20)
  
}
//tealMove
function tealMove ()
{
  tealy -= tealspeedy;
  tealx -= tealspeedx;
  
    if(tealx > width)
    {
        tealx = 0;
    }
    else if(tealx < -35)
    {
        tealx = width
    }
    if(tealy > height)
    {
        tealy = 0;
    }
    else if(tealy < 0)
    {
        tealy = height
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