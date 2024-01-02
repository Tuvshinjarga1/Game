import React, { useState } from 'react';
import './App.css';
import paperImage from './paper.jpg';
import rockImage from './rock.jpg';
import scissorsImage from './scissors.jpg';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    determineWinner(choice, computerChoice);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult('Tie');
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('Win');
    } else {
      setResult('Loss');
    }
  };

  return (
    <div className='Container'>
      <div className='Baildaan'>
        <h1>User</h1>
        <div className='Bi'>
          <div className='BiZurag'>
            <button onClick={() => handleUserChoice('rock')}>
              <img src={rockImage} alt='Rock' style={{ width: 152.5 }} />
            </button>
          </div>
          <div className='BiZurag'>
            <button onClick={() => handleUserChoice('paper')}>
              <img src={paperImage} alt='Paper' style={{ width: 155 }} />
            </button>
          </div>
          <div className='BiZurag'>
            <button onClick={() => handleUserChoice('scissors')}>
              <img src={scissorsImage} alt='Scissors' style={{ width: 140 }} />
            </button>
          </div>
        </div>

        <div className='Info'>
          <h1>Lets Fight</h1>
          <p>
            {userChoice && (
              <span>
                Your Choice: <img src={userChoice === 'rock' ? rockImage : userChoice === 'paper' ? paperImage : scissorsImage} alt={userChoice} style={{ width: 50 }} />
              </span>
            )}<br></br><br></br>
            {result === 'Tie' && `Tie!`}
            {result === 'Win' && `You Win!`}
            {result === 'Loss' && `You Lose!`}<br></br>
            {computerChoice && (
              <span>
                Computer's Choice: <img src={computerChoice === 'rock' ? rockImage : computerChoice === 'paper' ? paperImage : scissorsImage} alt={computerChoice} style={{ width: 50 }} />
              </span>
            )}
          </p>
        </div>

        <div className='Com'>
          <div className='BiZurag'>
            <img src={rockImage} alt='Rock' style={{ width: 150 }} />
          </div>
          <div className='BiZurag'>
            <img src={paperImage} alt='Paper' style={{ width: 140 }} />
          </div>
          <div className='BiZurag'>
            <img src={scissorsImage} alt='Scissors' style={{ width: 140 }} />
          </div>
        </div>
        <h1>Computer</h1>
      </div>
    </div>
  );
}

export default App;
