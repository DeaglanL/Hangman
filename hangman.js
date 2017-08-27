

let gameRunner = (diff) =>
{
    let wordToGuess;
    let wordList = sortAndSplit(fileReader(),diff);

    wordToGuess = wordList[Math.floor((Math.random() * wordList.length))];

    wordToGuess = strFormat(wordToGuess);

    game(wordToGuess);




    
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

let fileReader = () =>
{
    let filePath =  "file://words.txt";
    let file = new XMLHttpRequest();
    file.open("GET", file, false);
    file.onreadystatechange = () =>
    {
        if(file.readyState === 4)
            {
                if(file.status === 200 || rawFile.status == 0)
                {
                    var allText = file.responseText;
                    return allText.split('\n');
                }
            }
    }
    file.send(null);
}

let sortAndSplit = (rawWordList, diff) =>
{
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