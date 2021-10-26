import { generateUser, setUser } from '../utils.js';

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
