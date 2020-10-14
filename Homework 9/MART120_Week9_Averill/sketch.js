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
    // eyes
  strokeWeight(8)
  point(220,175)
   point(275,175)
    // nose
   strokeWeight(2)
  triangle(245,215,250,180,255,215)
    
    // mouth
  line(235,240,265,240)

    // hair
  fill(96,48,1)
ellipse (240,120,70,58)
  ellipse (235,120,62,58)
  ellipse (235,120,45,58)
    // body
  fill(255,209,23)
   rect(200,280,100,200)
    // right arm
line(190,280,150,400)
    // left arm
line(310,280,350,400)
    
    fill(0);
    textSize(40);
    text("Victoria Averill",20,530);


}