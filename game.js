class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      girl1 = createSprite(100,200);
      girl1.addImage("car1",player1Img)
      girl2 = createSprite(300,200);
      girl2.addImage("car2",player2Img)
      girl3 = createSprite(500,200);
      girl3.addImage("car3",player3Img)
      girl4 = createSprite(700,200);
      girl4.addImage("car3",player4Img)
      girls = [girl1, girl2, girl3, girl4];
  
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103))
       // image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
  
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            stroke(10)
            fill("red")
            ellipse(x,y,60,60)
            girls[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = girls[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      
      
      drawSprites();
    }
    end()
    {
      console.log("Game ended!")
      //console.log(player.rank)
    }
  }