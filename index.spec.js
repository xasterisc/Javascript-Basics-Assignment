// import your functions and variables to check against here.

const {
  firstName,
  lastName,
  homeCountry,
  fullName,
  isJorge,
  mySentence,
  randomNumber,
  theAnswer,
  funkyInitials,
  x,
  y,
  var1,
  var2,
  var3,
  var4q,
  var4a,
} = require('./index');

let q2answer;
let q3answer;
let q4answer;
let q5answer;
let q6answer;

describe('Question 1: Testing name and country vars', () => {
  test('firstName is a string and is not empty', () => {
    expect(typeof firstName).toEqual('string');
    expect(firstName.length).toBeGreaterThan(0);
  });
  test('lastName is a string and is not empty', () => {
    expect(typeof lastName).toEqual('string');
    expect(lastName.length).toBeGreaterThan(0);
  });
  test('homeCountry is a string and is not empty', () => {
    expect(typeof homeCountry).toEqual('string');
    expect(homeCountry.length).toBeGreaterThan(0);
  });
});

describe('Question 2: Testing fullName var', () => {
  test('fullName contains firstName and lastName, properly formatted', () => {
    expect(typeof fullName).toEqual('string');
    expect(fullName).toEqual(q2answer);
  });
});

describe('Question 3: Testing mySentence var', () => {
  test('mySentence contains the fullName and homeCountry variables, and all other words and punctuation exactly match the example.', () => {
    expect(typeof mySentence).toEqual('string');
    expect(mySentence).toEqual(q3answer);
  });
});

describe('Question 4: Testing funkyInitials var', () => {
  test('funkyInitials contains the last initals and they are uppercase ', () => {
    expect(typeof funkyInitials).toEqual('string');
    expect(funkyInitials.length).toEqual(2);
    expect(funkyInitials).toEqual(q4answer);
  });
});

describe('Question 5: Testing isJorge var', () => {
  test('isJorge properly valuates to true or false depending on the firstName variable', () => {
    expect(isJorge).toEqual(q5answer);
  });
});

describe('Question 6: Testing theAnswer var', () => {
  test('theAnswer variable accurately displays either yes, perhaps or no based on the random number ', () => {
    expect(theAnswer).toEqual(q6answer);
  });
});

describe('Question 7: Testing x var', () => {
  test('x is the integer 21.46', () => {
    expect(typeof x).toEqual('number');
    expect(x).toBe(21.46);
  });
});

describe('Question 8: Testing y var', () => {
  test('y is a whole number, 15 ', () => {
    expect(typeof y).toEqual('number');
    expect(y).toEqual(15);
  });
});

describe('Question 9: Testing var3 var', () => {
  test('var3 is an integer, 42 ', () => {
    expect(typeof var3).toEqual('number');
    expect(var3).toEqual(42);
  });
});

describe('Question 10: Testing var4q and var4a vars', () => {
  test('var4q is unchanged and var4a accurately reflects if var4q is evenly divisible by 6', () => {
    expect(var4q).toEqual(42);
    expect(var4a).toEqual('It is divisible.');
  });
});

q2answer = `${firstName} ${lastName}`;
q3answer = 'My full name is ' + fullName + '. I am from ' + homeCountry + '.';
q4answer = (
  firstName.charAt(firstName.length - 1) + lastName.charAt(lastName.length - 1)
).toUpperCase();
q5answer;
if (firstName == 'Jorge') {
  q5answer = true;
} else {
  q5answer = false;
}
q6answer;
if (randomNumber === 1) {
  q6answer = 'perhaps it is so';
} else if (randomNumber === 2) {
  q6answer = 'yes, definitely';
} else {
  q6answer = 'no, never';
}
