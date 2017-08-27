    
    let wordList;

let gameRunner = (diff) =>
{
    let wordToGuess;

    fileReader();

    setTimeout(function () {
    wordList = sortAndSplit(wordList, diff);
    wordToGuess = wordList[Math.floor((Math.random() * wordList.length))];
    wordToGuess = strFormat(wordToGuess);
    game(wordToGuess);
    console.log(wordToGuess);
    },5000);


   
}

let game = (word) =>
{
    let gameFinished = false;


    while(!gameFinished)
        {
            //display game state

            //take user input

            //check against word

            //update game state
        }

        //end game stuff 
        //reset button

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
    if(rawWordList[index].count > startNum && rawWordList[index].count < endNum) //this is the problem
        {
            finalWordList.push(rawWordList[index]);
            console.log(" ");
        }
        console.log(" ");
}
   return finalWordList;
}
