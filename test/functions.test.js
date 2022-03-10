// IMPORT MODULES under test here:
import { 
    //myFunction, 
    addExclamationPoints, 
    multiplyBySeven, 
    multiplyBy12ThenHalve, 
    divideThenMultiply, returnAsAnArray, 
    returnAsAString, 
    makeLuckyGreeting, 
    getSecondItem, 
    getLastItem, 
    getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

test('exclamations', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints('');

    const expected2 = 'bunny rabbit' + '!!!';

    const actual2 = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});

test('multiply7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('multiply12/5', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('divideThenMultiply', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

test('returnAsArray', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);
});

test('returnAsString', (expect) => {
    const expected = '845';

    const actual = returnAsAString('8', '4', '5');

    expect.equal(actual, expected);
});

test('luckyGreeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('SecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('lastItem', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('randoNumber', (expect) => {

    const answer = getRandomNumber();

    expect.equal(typeof answer, 'number');
});