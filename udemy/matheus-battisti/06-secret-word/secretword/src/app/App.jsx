// React
import { useState, useCallback, useEffect } from 'react';

// CSS
import './App.css';

// Data
import { wordsList } from '../data/words';
import StartScreen from '../components/start-screen/StartScreen';
import Game from '../components/game/Game';
import GameOver from '../components/game-over/GameOver';

const stages = [
   { id: 1, name: 'start' },
   { id: 2, name: 'game' },
   { id: 3, name: 'end' },
];

const guessesQty = 3;

function App() {
   const [gameStage, setGameStage] = useState(stages[0].name);
   const [words] = useState(wordsList);

   const [pickedWord, setPickedWord] = useState('');
   const [pickedCategory, setPickedCategory] = useState('');
   const [letters, setLetters] = useState([]);

   const [guessedLetters, setGuessedLetters] = useState([]);
   const [wrongLetters, setWrongLetters] = useState([]);
   const [guesses, setGuesses] = useState(guessesQty);
   const [score, setScore] = useState(0);

   const pickWordAndCategory = useCallback(() => {
      const categories = Object.keys(words);
      const category =
         categories[Math.floor(Math.random() * Object.keys(categories).length)];

      const word =
         words[category][Math.floor(Math.random() * words[category].length)];

      return { word, category };
   }, [words]);

   const startGame = useCallback(() => {
      // clear all letters
      clearLetterStates();

      // pick word and pick category
      const { word, category } = pickWordAndCategory();

      // create an array of letters
      let wordLetters = word.split('');
      wordLetters = wordLetters.map(letter => letter.toLowerCase());

      setPickedWord(word);
      setPickedCategory(category);
      setLetters(wordLetters);

      setGameStage(stages[1].name);
   }, [pickWordAndCategory]);

   const verifyLetter = letter => {
      const normalizedLetter = letter.toLowerCase();

      // check if letter has already been utilized
      if (
         guessedLetters.includes(normalizedLetter) ||
         wrongLetters.includes(normalizedLetter)
      ) {
         return;
      }

      // push guessed letter or remove a chance
      if (letters.includes(normalizedLetter)) {
         setGuessedLetters(actualGuessedLetter => [
            ...actualGuessedLetter,
            normalizedLetter,
         ]);
      } else {
         setWrongLetters(actualWrongLetter => [
            ...actualWrongLetter,
            normalizedLetter,
         ]);

         setGuesses(actualGuesses => actualGuesses - 1);
      }
   };

   const clearLetterStates = () => {
      setGuessedLetters([]);
      setWrongLetters([]);
   };

   // check if guesses ended
   useEffect(() => {
      if (guesses <= 0) {
         // reset all states;
         clearLetterStates();

         setGameStage(stages[2].name);
      }
   }, [guesses]);

   // check win condition
   useEffect(() => {
      const uniqueLetters = [...new Set(letters)];

      // wind condition
      if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
         // add score
         setScore(actualScore => (actualScore += 100));

         // restart game with new word
         startGame();
      }
   }, [guessedLetters, letters, startGame, gameStage]);

   const retry = () => {
      setGuesses(guessesQty);
      setScore(0);

      setGameStage(stages[0].name);
   };

   return (
      <div className="App">
         {gameStage === 'start' && <StartScreen startGame={startGame} />}
         {gameStage === 'game' && (
            <Game
               verifyLetter={verifyLetter}
               pickedWord={pickedWord}
               pickedCategory={pickedCategory}
               letters={letters}
               guessedLetters={guessedLetters}
               wrongLetters={wrongLetters}
               guesses={guesses}
               score={score}
            />
         )}
         {gameStage === 'end' && (
            <GameOver
               retry={retry}
               letters={letters}
               score={score}
            />
         )}
      </div>
   );
}

export default App;
