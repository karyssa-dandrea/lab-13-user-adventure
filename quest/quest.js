import quests from '../quest-data.js';
import { findByID, setUser, scoreQuest, getUser, loadProfile } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const questData = findByID(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = questData.image;
const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose My Choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findByID(questData.choices, selectedRadio.value);
    const user = getUser();

    scoreQuest(choice, questData.id, user);
    setUser(user);

    const questDetails = document.getElementById('quest-description');
    questDetails.classList.add('hidden');
    const questResults = document.getElementById('quest-results');
    const resultP = document.createElement('p');
    resultP.textContent = choice.result;
    const backLink = document.createElement('a');
    backLink.href = '../maps';
    backLink.textContent = 'Back to Map';

    questResults.append(resultP, backLink);
    questResults.classList.remove('hidden');
    loadProfile();
});