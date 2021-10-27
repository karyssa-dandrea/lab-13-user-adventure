import quests from '../quest-data.js';
import { getUser, hasCompletedAllQuests, loadProfile } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser();
loadProfile();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}

for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    mapLinks.appendChild(a);
}

// for (let quest of quests){
//     const a = document.createElement('a');
//     a.href = `../quest/?id=${quest.id}`;
//     a.textContent = quest.title;

//     mapLinks.appendChild(a);

// }

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    mapLinks.appendChild(span);
} 
