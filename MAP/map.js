import quests from '../quest-data.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}



for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);

}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    mapLinks.appendChild(span);
} 
