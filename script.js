var createCandidate = function(name, color){
  
  var politician = {};
  
  politician.name = name;
  
  politician.color = color;
  
  politician.electionResults = null;
  
  politician.totalVotes = 0;
  
  politician.tallyUpTotalVotes = function ()
  {
    this.totalVotes = 0;
    
    for (var i=0; i<this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      console.log(this.totalVotes);
    }
  };
  
  return politician;
  
};

var jane = createCandidate("Jane Doe", [132, 17, 11]);

var john = createCandidate("John Smith", [245, 141, 136]);

console.log("John's color is " + john.color);
console.log("Jane's color is " + jane.color);

john.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

john.electionResults[9] = 1;
jane.electionResults[9] = 28;

john.electionResults[4] = 17;
jane.electionResults[4] = 38;

john.electionResults[43] = 11;
jane.electionResults[43] = 27;

console.log(jane.electionResults);
console.log(john.electionResults);

setStateResults = function(state)
{
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > john.electionResults[state])
  {
    theStates[state].winner = jane;
  } else if (jane.electionResults[state] < john.electionResults[state])
  {
    theStates[state].winner = john;
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
  
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbrev = header.children[1];
  var body = stateInfoTable.children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnerName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = jane.name;
  candidate2Name.innerText = john.name;
  candidate1Results.innerText = jane.electionResults[state];
  candidate2Results.innerText = john.electionResults[state];
  
  if (stateWinner === null)
  {
    winnerName.innerText = "DRAW";
  } else {
    winnerName.innerText = stateWinner.name;
  }
}

jane.tallyUpTotalVotes();
john.tallyUpTotalVotes();

console.log("Jane Doe has " + jane.totalVotes + " votes!");
console.log("John Smith has " + john.totalVotes + " votes!");

var winner = "???"

if (jane.totalVotes > john.totalVotes) {
  winner = jane.name;
} else if (jane.totalVotes < john.totalVotes) {
  winner = john.name;
} else {
  winner = "DRAW";
}

console.log("The winner is..." + winner + "!!!");

var table = document.getElementById("countryResults");

table.children[0].children[0].children[0].innerText = jane.name;
table.children[0].children[0].children[1].innerText = jane.totalVotes;
table.children[0].children[0].children[2].innerText = john.name;
table.children[0].children[0].children[3].innerText = john.totalVotes;
table.children[0].children[0].children[5].innerText = winner;

  