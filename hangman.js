    'use strict'


    let wordList;
    let hangManDisplay = [];
    let livesLost;
    let maxLives = 7;
    let correctGuesses = [];
    let incorrectGuesses = [];
    let disPlayString;
    let wordToGuess;
    let url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";

    let gameRunner = (diff) => {
        promisedFileReader(url).then(() => {
            wordList = sortAndSplit(wordList, diff);
            wordToGuess = wordList[Math.floor((Math.random() * wordList.length))];
            wordToGuess = strFormat(wordToGuess);
            document.getElementById("preGame").remove();
            console.log(wordToGuess);
            livesLost = 0;
            hangManDisplay = hangmanBuilder();
            let gameFinished = false;
            game(wordToGuess);
        })





    }

    let game = (word) => {
        let gameEle = document.getElementById("game");

        gameEle.innerHTML = "";
        disPlayString = "";

        if (livesLost >= 7) {
            gameEle.innerHTML = "YOU LOST ! :( <br><br> refresh the page to play again";

            return;
        }

        if (correctGuesses.length === wordToGuess.length) {
            gameEle.innerHTML = "YOU WIN! :D <br><br> Refresh to play again"
            return;
        }

        for (var h = 0; h < maxLives; h++) {
            if (h < livesLost) {
                disPlayString += hangManDisplay[h];
            }

        }
        disPlayString += "<br>  ---------------------------------------------";

        disPlayString += "<br>  Incorrect Guesses: "

        for (var q = 0; q < incorrectGuesses.length; q++) {
            disPlayString += incorrectGuesses[q];
        }

        disPlayString += "<br> ---------------------------------------------";


        disPlayString += "<br> Current word: "

        let noCorGuess = false;
        for (var p = 0; p < wordToGuess.length; p++) {
            noCorGuess = false;
            for (var t = 0; t < correctGuesses.length; t++) {

                if (wordToGuess.charAt(p) === correctGuesses[t]) {
                    disPlayString += correctGuesses[t];
                    noCorGuess = true;
                }
            }

            if (!noCorGuess) {
                disPlayString += "-";
            }



        }
        disPlayString += "<br> <br>";
        gameEle.innerHTML = disPlayString;
        let input = document.createElement("input");
        input.id = "guessInput";

        let guess = document.createElement("button");
        guess.id = "guessEnter";
        guess.innerHTML = "Guess!";
        guess.setAttribute("onclick", "guessChecker(guessInput.value)");

        gameEle.appendChild(input);
        gameEle.appendChild(guess);
    }

    let guessChecker = (letter) => {
        if (isEmpty(letter)) {
            window.alert("invalid input");
            game(wordToGuess);
            return;
        }


        for (var v = 0; v < wordToGuess.length; v++) {
            if (wordToGuess.charAt(v) === letter.charAt(0)) {
                correctGuesses.push(letter.charAt(0));
                game(wordToGuess);
                return;

            }
        }

        incorrectGuesses.push(letter.charAt(0));
        livesLost++;
        game(wordToGuess);
    }

    let hangmanBuilder = () => {
        let disp = [];
        disp.push("|/--    <br>");
        disp.push("|&nbsp    |    <br>");
        disp.push("|&nbsp    0    <br>");
        disp.push("|&nbsp   /|\\   <br>");
        disp.push("|&nbsp   / \\   <br>");
        disp.push("|&nbsp          <br>");
        disp.push("|&nbsp          <br>");

        return disp;
    }

    let strFormat = (str) => {
        str = str.trim();
        str = str.toLowerCase();
        str = str.replace('\n', "");
        str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        return str;
    }

    function promisedFileReader(url) {
        return new Promise((resolve) => {
            let reader = new XMLHttpRequest();
            reader.open("GET", url, true);
            reader.send();
            reader.onreadystatechange = function () {
                if (reader.readyState == 4 && reader.status == 200) {
                    wordList = reader.responseText;
                    resolve();
                }
            }
        })
    }

    let sortAndSplit = (rawWordList, diff) => {
        let finalWordList = [];
        let startNum;
        let endNum;


        switch (diff) {
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
        rawWordList.sort(function (a, b) {
            return a.length - b.length;
        });




        for (var index = 0; index < rawWordList.length; index++) {
            if (rawWordList[index].length >= startNum && rawWordList[index].length <= endNum) {
                finalWordList.push(rawWordList[index]);
            }
        }
        return finalWordList;
    }

    let isEmpty = (str) => {
        return (!str || 0 === str.length);
    }