
//variables player
    var x = 40;
    var y = 40;
    var diameter = 35;
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
  strokeWeight(1)
  background(255,102,102);
  if(keyIsDown(68))
  {
      x+=5;
  }
  if(keyIsDown(65))
  {
      x-=5;
  }
    if(keyIsDown(87))
  {
      y-=5;
  }
  if(keyIsDown(83))
  {
      y+=5;
  }     
  fill(255,255,0);
        circle(x,y,diameter);
//teal
 fill(0,102,102)
  square(tealx,tealy,20)
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
  
//purple
fill(51,0,51)
square(purplex,purpley,50)
  purplex += purplespeed;
  if(purplex >= width)
  {
    purplex = -50
 }
  if(mousex != 0)
  {
    fill(255,204,152)
    circle (mousex,mousey,circle2)
  }
fill(0,0,0)
  textSize(20)
  text("exit",450,550)
  ;
//border
  strokeWeight(15)
  line(0,0,0,600)
  line(493,0,493,500)
  line(0,595,595,595)
  line(0,5,500,5)
  
if(x > 465 && y > 493)
{text("You Win!", 215,280)}
else{text("Find the Exit",200,280)}

}
//mouse obstacle
function mouseClicked() 
    { 
      mousex = mouseX;
      mousey = mouseY;
    }





