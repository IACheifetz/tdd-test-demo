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

    const expected3 = 'bunny' + '!!!';

    const actual3 = addExclamationPoints('bunny');

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'exclamations');
});

test('multiply7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    const expected2 = 35;

    const actual2 = multiplyBySeven(5);

    const expected3 = 42;

    const actual3 = multiplyBySeven(6);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'multiply7');
});

test('multiply12/5', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    const expected2 = 30;

    const actual2 = multiplyBy12ThenHalve(5);

    const expected3 = 36;

    const actual3 = multiplyBy12ThenHalve(6);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'multiply12/5');
});

test('divideThenMultiply', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    const expected2 = 14;

    const actual2 = divideThenMultiply(10, 5, 7);

    const expected3 = 45;

    const actual3 = divideThenMultiply(15, 3, 9);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'divideThenMultiply');
});

test('returnAsArray', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    const expected2 = [9, 3, 7];

    const actual2 = returnAsAnArray(9, 3, 7);

    const expected3 = [1, 2, 6];

    const actual3 = returnAsAnArray(1, 2, 6);

    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3, 'returnAsArray');
});

test('returnAsString', (expect) => {
    const expected = '845';

    const actual = returnAsAString('8', '4', '5');

    const expected2 = '169';

    const actual2 = returnAsAString('1', '6', '9');
    
    const expected3 = '237';

    const actual3 = returnAsAString('2', '3', '7');

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'returnAsString');
});

test('luckyGreeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    const expected2 = 'Hello! Your lucky number for the day is 8.';

    const actual2 = makeLuckyGreeting(5, 3);

    const expected3 = 'Hello! Your lucky number for the day is 12.';

    const actual3 = makeLuckyGreeting(9, 3);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'luckyGreeting');
});

test('SecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);
    
    const expected2 = 'guava';

    const actual2 = getSecondItem(['banana', 'guava', 'mango', 'lychee']);
    
    const expected3 = 'strawberry';

    const actual3 = getSecondItem(['grape', 'strawberry', 'blackberry', 'cherry']);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'SecondItem');
});

test('lastItem', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    const expected2 = 'lychee';

    const actual2 = getLastItem(['banana', 'guava', 'mango', 'lychee']);
    
    const expected3 = 'cherry';

    const actual3 = getLastItem(['grape', 'strawberry', 'blackberry', 'cherry']);

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3, 'lastItem');
});

test('randoNumber', (expect) => {

    const answer = getRandomNumber();

    expect.equal(typeof answer, 'number');
});