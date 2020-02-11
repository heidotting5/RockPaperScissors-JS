      
      // This function will randomly choose Rock, Paper or Scissors

      function computerPlay () {
        var choice = Math.floor(Math.random() * Math.floor(3));
        var RPS = '';

        if (choice == 0) {
          RPS = 'Rock';
        } else if (choice == 1) {
          RPS = 'Paper';
        } else {
          RPS = 'Scissors';
        }

        console.log(RPS);
        return RPS;
      }


      // This function will play a round of Rock, Paper, Scissors using a random choice from the computer and a choice from a human player

      function playRound (computerChoice, playerChoice) {
        var player = playerChoice.toLowerCase();
        var computer = computerChoice.toLowerCase();

        var message = '';

        if (player == 'rock') {
          if(computer == 'paper') {
            message = 'Sorry, you lost. Paper beats Rock!';
          } else if (computer == 'scissors') {
            message = 'You Won! Rock beats Scissors!';
          } else {
            message = 'Tied. Please play again!';
          }
        } else if (player == 'paper') {
          if(computer == 'scissors') {
            message = 'Sorry, you lost. Scissors beats Paper!';
          } else if (computer == 'rock') {
            message = 'You Won! Paper beats Rock!';
          } else {
            message = 'Tied. Please play again!';
          }
        } else if (player == 'scissors') {
          if(computer == 'rock') {
            message = 'Sorry, you lost. Rock beats Scissors!';
          } else if (computer == 'paper') {
            message = 'You Won! Scissors beats Paper!';
          } else {
            message = 'Tied. Please play again!';
          }
        }

        return message;
      }




      const rock = document.querySelector('#rock');
      const paper = document.querySelector('#paper');
      const scissors = document.querySelector('#scissors');

      rock.addEventListener('click', () => {
        var choice = rock.textContent;
        console.log(choice);
        var message = playRound(computerPlay(), choice);
        console.log(message);
        updateScore(message);

      });

      paper.addEventListener('click', () => {
        var choice = paper.textContent;
        console.log(choice);
        var message = playRound(computerPlay(), choice);
        console.log(message);
        updateScore(message);

      });

      scissors.addEventListener('click', () => {
        var choice = scissors.textContent;
        console.log(choice);
        var message = playRound(computerPlay(), choice);
        console.log(message);
        updateScore(message);

      });



      function updateScore(message) {

        const lastDiv = document.querySelector('.Choices');

        var playerScore = parseInt(document.getElementById('yourScore').textContent);
        var computerScore = parseInt(document.getElementById('compScore').textContent);

        if(message.includes('Won')) {
          document.getElementById('yourScore').innerHTML = playerScore + 1;

        } else if (message.includes('lost')) {
          document.getElementById('compScore').innerHTML = computerScore + 1;
      
        }

        if (playerScore == 5) {

          const div = document.createElement('div');
          div.classList.add('content');
          div.textContent = 'Congratulations! You have won!';

          lastDiv.append(div);

        } else if (computerScore == 5) {

          const div = document.createElement('div');
          div.classList.add('content');
          div.textContent = 'Sorry! You have lost!';

          lastDiv.append(div);

        } 


      }


    
      /*This function will all you to play 5 games of Rock, Paper, Scissors vs. the computer. The winner will be announced in the end!

      function game() {

        var computerScore = 0;
        var humanScore = 0;

        for (var i = 0; i < 5; i++) {
          
          var userChoice = prompt("Rock, Paper, or Scissors?");
          console.log(userChoice);

          var result = playRound(computerPlay(), userChoice);
          console.log(result);

          if (result.includes('Won')) {
            humanScore++;
          } else if (result.includes('lost')) {
            computerScore++
          }
        };

        console.log('Final Score... Computer: ' + computerScore + ' You: ' + humanScore);

        if(computerScore > humanScore) {
          console.log('Sorry, you lost! :( ');
        } else if (computerScore < humanScore) {
          console.log('Congrats! You Won! :) ')
        } else {
          console.log('Game Tied... :/ ');
        }

      }
      */

