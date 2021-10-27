import { generateUser, setUser, getUser, scoreQuest, hasCompletedAllQuests } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    const expected = {
        completed: {},
        gold: 40,
        hp: 100,
        name: 'ryssa',
        race: 'khajit'
    };
    const formData = new FormData();
    formData.set('name', 'ryssa');
    formData.set('race', 'khajit');
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect) => {
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        gold: 40,
        hp: 100,
        name: 'ryssa',
        race: 'khajit'
    };
    setUser(userObject);

    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, userObject);
});

test('getUser should return the user object from localStorage', (expect) => {
    const userObject = {
        completed: {},
        gold: 40,
        hp: 100,
        name: 'ryssa',
        race: 'khajit'
    };
    setUser(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);
});

test('scoreQuest should update gold, hp, and completed on the userObject', (expect) => {
    const userObject = {
        completed: {},
        gold: 40,
        hp: 100,
        name: 'ryssa',
        race: 'khajit'
    };
    const choiceObject = {
        id: 'hide',
        description: 'Hide and Find Citizen',
        result: `You sneak around and hide until you find the missing citizen tied up. 
        You help him up and untie him, and come up with a plan to sneak back out. 
        You find a way out through the back that leads you into the forest and back home to
        your village. You both let the village know of the vampires and you have to destroy them.
         The missing citizen gives you 50 gold for saving his life.`,
        hp: 0,
        gold: 50
    };
    const questId = 'citizen';
    
    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.hp, 100);
    expect.equal(userObject.gold, 90);
    expect.equal(userObject.completed[questId], true);
});

test('hasCompletedAllQuests returns false if the user has not completed all quests', (expect) => {
    const userObject = {
        completed: { citizen: true, relic: true },
    };
    const actual = hasCompletedAllQuests(userObject);
    expect.equal(actual, false);
});