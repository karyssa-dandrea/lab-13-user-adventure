import { loadProfile, getUser } from '../utils.js';

const gameOver = document.querySelector('h1');
const user = getUser();

loadProfile();

if (user.hp < 0){
    gameOver.textContent = 'Sorry your dead, game over!';
} else if (user.gold < 0){
    gameOver.textContent = 'You survived but your in debt!';
} else { 
    gameOver.textContent = 'You completed your journey without dying! Congratulations!';
}

// if userGold is over 50 and user health is over 0
// great job, you retire rich!
// if userHealth is 0 or less
// your dead!