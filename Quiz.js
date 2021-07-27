class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    this.title.hide;
    this.question.hide;
    this.option1.hide;
    this.option2.hide;
    this.option3.hide;
    this.option4.hide;
    this.input1.hide;
    this.input2.hide;
    this.button.hide;
    background("blue");
    
    getContestantInfo();
      var correctAns ="2";
      if(correctAns ===allContestants[plr].answer)
      fill("green")
      else
      fill("red");
    text(allContestants[plr].name+":"+allContestants[plr].answer,300,y)
    y=y+50
    }
  }

