var leftarmx = 310;
var leftarmx2 = 350;
var leftarmy = 280;
var leftarmy2 = 400;
var armdirectionl = 4;

var rightarmx = 190;
var rightarmx2 = 150;
var rightarmy = 280;
var rightarmy2 = 400;
var armdirectionr = 2;

var lefteyey = 175
var righteyey = 175
var eyedirectionl=3;
var eyedirectionr= 1;

var mouthLx =235;
var mouthy =240;
var mouthRx = 265;
var mouthdirection = 5;

var size = 40;
var sizedirection = 0.5;
var count = 0;

function setup()
{
createCanvas(500,550);
}

function draw()
{
    background(0,153,76);
  
    // head
  strokeWeight(2) 
  fill(255,240,178);
  circle(250,200,150); 
  
     // body
  fill(255,209,23)
   rect(200,280,100,200)
  
    // eyes
  strokeWeight(8)
  point(220,lefteyey);
  lefteyey += eyedirectionl;
  if(lefteyey >= 550 || lefteyey <=0)
    {eyedirectionl *= -1};
  
   point(275,righteyey)
   righteyey -= eyedirectionr;
  if(righteyey >= 550 || righteyey <=0)
    {eyedirectionr *= -1}
  
    // nose
   strokeWeight(2)
  triangle(245,215,250,180,255,215)
    
    // mouth
  line(mouthLx,mouthy,mouthRx,mouthy)
  mouthLx += mouthdirection;
  mouthRx += mouthdirection;
  mouthy += mouthdirection;
  if(mouthRx >= 500 || mouthLx <= 0)
  {mouthdirection *= -1}
  
  
    // hair
  fill(96,48,1)
ellipse (240,120,70,58)
  ellipse (235,120,62,58)
  ellipse (235,120,45,58)
  
    // right arm
line(rightarmx,rightarmy,rightarmx2,rightarmy2);
  rightarmx += armdirectionr;
  rightarmx2 += armdirectionr;
  if(rightarmx >= 500 || rightarmx2 <= 0)
  {armdirectionr *= -1}
    // left arm
line(leftarmx,leftarmy,leftarmx2,leftarmy2);
   leftarmx -= armdirectionl;
  leftarmx2 -= armdirectionl;
  if(leftarmx2 >= 500 || leftarmx <= 0)
  {armdirectionl *= -1}
  
    
    fill(0);
    textSize(size);
    size += sizedirection;
    count++;
    if(count > 5)
    {sizedirection *=-1;
        count = 0;
    }

    text("Victoria Averill",20,530);


}