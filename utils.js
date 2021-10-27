import quests from './quest-data.js';


export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function findByID(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function generateUser(formData){
    return {
        completed: {},
        gold: 40,
        hp: 100,
        name: formData.get('name'),
        race: formData.get('race')
    };
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;

}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}