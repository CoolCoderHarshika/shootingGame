var  player1Img
var backgrounImg
var target,targetImg
var score=0;
var bulletImg
var bullet


function preload()
{
    player1Img=loadImage("player1.png")
    bulletImg=loadImage("bullet.png")
    backgroundImg=loadImage("background.png")
    targetImg=loadImage("TARGET.png")
}


function setup()
{
    createCanvas(800,800)
   
    player1=createSprite(400,700)
    player1.addImage(player1Img)

    bullet=createSprite(450,600)
    bullet.addImage(bulletImg)
  
    bullet.scale=0.1


}

function draw()
    {
    background(backgroundImg)
       
    textSize(50)
    text("score: "+score,500,100)

        if(frameCount%70===0 )
        {
    
        var a = Math.round(random(0,1200))
      
      target=createSprite(a,150)
        target.addImage(targetImg)
        target.scale=0.3
      
        target.lifetime=70
    }
    bullet.x=World.mouseX
    bullet.y=World.mouseY

  if(mousePressedOver(target))
       // console.log("working")
        score=score+1;

    drawSprites()
}


