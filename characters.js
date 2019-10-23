

var characterIds = [
    {Id :2069, Class: "character darkblue", ImgSrc: "varys.jpg"},
    {Id :1346, Class: "character darkred", ImgSrc: "drogo.png"},
    {Id :148, Class: "character black", ImgSrc: "arya.png"},
    {Id :583, Class: "character darkgrey", ImgSrc: "jon.png"},
    {Id :271, Class: "character purple", ImgSrc: "daenerys.png"},
    {Id :1052, Class: "character green", ImgSrc: "tyrion.png"},
    {Id :16, Class: "character pink", ImgSrc: "maergery.png"},
    {Id :2024, Class: "character orange", ImgSrc: "tormund.png"},
    {Id :565, Class: "character yellow", ImgSrc: "joffrey.png"},
    {Id :2126, Class: "character teal", ImgSrc: "ygritte.png"}];

    characterIds.forEach(function(myCharacter){
        fetch("https://anapioficeandfire.com/api/characters/" + myCharacter.Id)
        .then(response =>
            response.json()
        )
        .then((res) => {
            addName(res, myCharacter);
        })
        .catch(err => console.log(err))
    });

    var boardStorage = window.localStorage;

    var selectingPlayer = 'player1';

    function done(){
      var player1Selected = boardStorage.getItem('player1');
      var player2Selected = boardStorage.getItem('player2');
      if(player1Selected && player2Selected){
        alert(player1Selected + " challenges " + player2Selected);
        window.location.href = "board.html";
      }
    }

    boardStorage.clear();


    function choice(characterName){

        boardStorage.setItem(selectingPlayer, characterName);
        var playerName = boardStorage.getItem(selectingPlayer);
        selectingPlayer = 'player2';

        done();
    }


        function addName(character, myCharacter) {
            var charTitle = character.titles[0];
            var charName = character.name;

            var charInfo = document.createElement("div");
            charInfo.setAttribute("class", myCharacter.Class);
            charInfo.setAttribute("onclick","choice('"+charName+"');");

            var cardImg = document.createElement("img");
            cardImg.setAttribute("src", myCharacter.ImgSrc);
            charInfo.appendChild(cardImg);

            var cardTitle = document.createElement("h2");
            cardTitle.textContent = charTitle;
            charInfo.appendChild(cardTitle);

            var cardName = document.createElement("h2");
            cardName.textContent = charName;
            charInfo.appendChild(cardName);

            var container = document.getElementById("cardContainer");
            container.appendChild(charInfo);
        }
