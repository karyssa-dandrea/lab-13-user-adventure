import { generateUser, setUser, getUser } from '../utils.js';

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