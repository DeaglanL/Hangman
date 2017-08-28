    
    let wordList;
    let hangManDisplay = [];
    let livesLost;
    let maxLives = 7;
    let correctGuesses;
    let incorrectGuesses;
    let disPlayString;

     




let gameRunner = (diff) =>
{
    let wordToGuess;

    fileReader();

    setTimeout(function () {
    wordList = sortAndSplit(wordList, diff);
    wordToGuess = wordList[Math.floor((Math.random() * wordList.length))];
    console.log(wordToGuess);
    wordToGuess = strFormat(wordToGuess);
    console.log(wordToGuess);
    game(wordToGuess);
    
    },5000);


   
}

let game = (word) =>
{

    let gameFinished = false;
    //remove pregame div
    document.getElementById("preGame").remove();
    hangManDisplay = hangmanBuilder();
    livesLost = 0;
    let gameEle = document.getElementById("game");






    while(gameFinished)
        {
            gameEle.innerHTML = "";
            disPlayString = "";


            //display game state based on lives and letters played
            for (var h = 0; h < maxLives; h++) {
                if (h < livesLost) {
                    disPlayString += hangManDisplay[h];
                }
                
            }
            disPlayString += "\n ---------------------------------------------";

            disPlayString+= "\n Incorrect Guesses: "

            for (var q = 0; q < incorrectGuesses.length; q++) {
                disPlayString += incorrectGuesses[q];
            }

            disPlayString += "\n ---------------------------------------------";


            disPlayString+= "Current word: "

            let noCorGuess;
            for (var p = 0; p < wordToGuess.length; p++) {
                noCorGuess = false;
                for (var t = 0; t < correctGuesses.length; t++) {
                    
                    if (wordToGuess.charAt(p) === correctGuesses[t]) {
                        disPlayString += correctGuesses[t];
                        noCorGuess = true;
                    }
                }
                
                if (noCorGuess){
                    disPlayString += "-";
                    }
                
            }
            gameEle.innerHTML = disPlayString;

            //create div and appened a gamestart string
            //append textbox and enter button
            //wait for user input
            //take user input

           

            //check against word
            //if (not in word || already guessed)
            //take away a life
            //add to guesses
            //if (in word)
            //added to word display
            //add to guesses
            //continue

        }

        //end game stuff 
        //reset button

}

let hangmanBuilder = () =>
{
    let disp;
    disp.push("|              \n");
    disp.push("|              \n");
    disp.push("|        / \\  \n");
    disp.push("|        /|\\  \n");
    disp.push("|         0    \n");
    disp.push("|         |    \n");
    disp.push(" _________     \n");

    return disp;
}

let strFormat = (str) =>
{
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace('\n', "");
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return str;

}

let fileReader = () =>{
    let url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
    let reader = new XMLHttpRequest();
    reader.onreadystatechange = function () {
        if (reader.readyState == 4 && reader.status == 200) {
            wordList = reader.responseText;    
        }
    }

    reader.open("GET", url, true);
    reader.send();
}

let sortAndSplit = (rawWordList, diff) =>{
    let finalWordList = [];
    let startNum;
    let endNum;


    switch (diff)
    {
        case 1:
        startNum = 7;
        endNum = 15;
        break;

        case 2: 
        startNum = 4;
        endNum = 7;
        break;

        case 3: 
        startNum = 3;
        endNum = 5;
        break;

        default:
        window.alert("Something broke");
        break;
    }



    rawWordList = rawWordList.split('\n');
    rawWordList.sort(function(a, b){
    return a.length - b.length;
   });
   


   
for (var index = 0; index < rawWordList.length; index++) {
    if(rawWordList[index].length >= startNum && rawWordList[index].length <= endNum) //this is the problem
        {
            finalWordList.push(rawWordList[index]);
        }
}
   return finalWordList;
}
