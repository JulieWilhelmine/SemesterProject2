
var boardStorage = window.localStorage;

  var player1Selected = boardStorage.getItem('player1');
  var player2Selected = boardStorage.getItem('player2');

  SetPlayer('player1', 'player1Char', player1Selected);
  SetPlayer('player2', 'player2Char', player2Selected);

  function SetPlayer(player, playerCharImg, name){
    var imageName = "";

    switch(name){
      case "Jon Snow": imageName = "tgrey.png"; break;
      case "Arya Stark": imageName = "tblack.png"; break;
      case "Drogo": imageName = "tred.png"; break;
      case "Varys": imageName = "tblue.png"; break;
      case "Margaery Tyrell": imageName = "tpink.png"; break;
      case "Daenerys Targaryen": imageName = "tpurple.png"; break;
      case "Tyrion Lannister": imageName = "tgreen.png"; break;
      case "Joffrey Baratheon": imageName = "tyellow.png"; break;
      case "Ygritte": imageName = "tlightblue.png"; break;
      case "Tormund": imageName = "torange.png"; break;
    }

    var token = document.getElementById(player);
    token.setAttribute("src", imageName);
    var picture = document.getElementById(playerCharImg);
    var characterImage = name.split(" ")[0].toLowerCase() + ".png";
    picture.setAttribute("src", characterImage);
  }


  function throwDice() {
      var diceNumber = Math.ceil(Math.random() * 6);
      return diceNumber;
  }

  function move(){
    var id = idOfPlacement();
    var moveTiles = throwDice();
    var newId = id + moveTiles;

    moveToId(newId);

    if(newId >= 30){
        setTimeout(finished, 10);
    }

    if(moveTiles == 6){
      move();
    }
  }

  function move2(){
    var id = idOfPlacement2();
    var moveTiles = throwDice();
    var newId = id + moveTiles;

    moveToId2(newId);

    if(newId >= 30){
        setTimeout(finished2, 10);
    }

    if(moveTiles == 6){
      move2();
    }
  }

  function idOfPlacement() {
    var nowAt = document.getElementById("player1");
    var element = nowAt.parentElement;
    var elementId = element.id;

    var id = 0;
    if (elementId != "notstarted") {
        id = parseInt(elementId.substr(4));
    }
    return id;
  }

  function moveToId(id){
    if(id > 30) {
        id = 30;
    }

    var tile = "tile" + id;

    document.getElementById(tile).appendChild(document.getElementById("player1"));

    if (document.getElementById(tile).classList.contains("trap1")){
      setTimeout(hitATrap, 10)
    }

    if (document.getElementById(tile).classList.contains("trap2")){
      setTimeout(hitATrap2, 10)
    }

    if (document.getElementById(tile).classList.contains("trap3")){
      setTimeout(hitATrap3, 10)
    }

   setTimeout(move2, 1200);
  }


  function idOfPlacement2() {
    var nowAt = document.getElementById("player2");
    var element = nowAt.parentElement;
    var elementId = element.id;

    var id = 0;
    if (elementId != "notstarted") {
        id = parseInt(elementId.substr(4));
    }
    return id;
  }

  function moveToId2(id){
    if(id > 30) {
        id = 30;
    }

    var tile = "tile" + id;

    document.getElementById(tile).appendChild(document.getElementById("player2"));

    if (document.getElementById(tile).classList.contains("trap1")){
      setTimeout(hitATrapP2, 10)
    }

    if (document.getElementById(tile).classList.contains("trap2")){
      setTimeout(hitATrap2P2, 10)
    }

    if (document.getElementById(tile).classList.contains("trap3")){
      setTimeout(hitATrap3P2, 10)
    }
  }


  function hitATrap(){
      alert("You died in the red wedding, move back to Start!");
      document.getElementById("tile1").appendChild(document.getElementById("player1"));
  }

  function hitATrap2(){
      alert("You got hit by dragon fire! Move back to the North!");
      document.getElementById("tile15").appendChild(document.getElementById("player1"));
  }

  function hitATrap3(){
      alert("You've been ambushed! Return to Start!");
      document.getElementById("tile1").appendChild(document.getElementById("player1"));
  }

  function hitATrapP2(){
      alert("Player 2 died in the red wedding and is moved back to Start!");
      document.getElementById("tile1").appendChild(document.getElementById("player2"));
  }

  function hitATrap2P2(){
      alert("Player 2 got hit by dragon fire and is moved back to the North!");
      document.getElementById("tile15").appendChild(document.getElementById("player2"));
  }

  function hitATrap3P2(){
      alert("Player 2 has been ambushed and returns to Start!");
      document.getElementById("tile1").appendChild(document.getElementById("player2"));
  }

  function finished(){
      alert("You finished first!");
      window.location.href = "win.html";
  }

  function finished2(){
      alert("Player 2 got you beat!");
      window.location.href = "win2.html";
  }
