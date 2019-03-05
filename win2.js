
var boardStorage = window.localStorage;

  var winner2 = boardStorage.getItem('player2');

  var container = document.getElementById("winner");
  var winnerName = document.createElement("h1");
  winnerName.textContent = winner2;
  container.appendChild(winnerName);

  setQuote('player2', winner2);

  function setQuote(winner, name){
    var winQuote = "";

    switch(name){
      case "Jon Snow": winQuote = "My father told me big men fall just as quick as little ones, if you put a sword through their hearts."; break;
      case "Arya Stark": winQuote = "A girl is Arya Stark of Winterfell, and I'm going home."; break;
      case "Drogo": winQuote = "Khal vos zigereo adoroon anevasoe maan. Me zigeree sajosoon disse."; break;
      case "Varys": winQuote = "Storms come and go, the big fish eat the little fish, and I keep on paddling."; break;
      case "Margaery Tyrell": winQuote = "Sometimes severity is the price we pay for greatness."; break;
      case "Daenerys Targaryen": winQuote = "My reign is just begun!"; break;
      case "Tyrion Lannister": winQuote = "Everything's better with some wine in the belly."; break;
      case "Joffrey Baratheon": winQuote = "Everyone is mine to torment!"; break;
      case "Ygritte": winQuote = "If we die, we'll die, but first, we'll live."; break;
      case "Tormund": winQuote = "Plenty of little men tried to put their swords through my heart. And there's plenty of little skeletons buried in the woods."; break;
      }
      var quoteDiv = document.getElementById("quote");
      var quoteText = document.createElement("h3");
      quoteText.textContent = winQuote;
      quoteDiv.appendChild(quoteText);
    }
