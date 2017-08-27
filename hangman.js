

let gameRunner = (diff) =>
{
    let wordToGuess;
    
    let wordList = fileReader();
    console.log(wordList);

    wordList = sortAndSplit(wordList, diff);

    wordToGuess = wordList[Math.floor((Math.random() * wordList.length))];

    wordToGuess = strFormat(wordToGuess);

    game(wordToGuess);


    console.log(wordToGuess);
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
            return this.responseText;    
        }
    }

    reader.open('GET', url, true);
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
    return b.length - a.length;
   });

for (var index = 0; index < rawWordList.length; index++) {
    if(rawWordList[index].count >= startNum && rawWordList[index].count <= endNum  )
        {
            finalWordList.push(rawWordList[index]);
        }
    
}




   return finalWordList;
}
