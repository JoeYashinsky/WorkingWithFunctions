'use strict';

/*
const bookings = [];

const createBooking = function(
    flightNumber, 
    numberOfPassengers = 1, 
    price = 199 * numberOfPassengers
    ) {
    // numberOfPassengers = numberOfPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNumber,
        numberOfPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking);
}

createBooking('LH123');
//{flightNumber: "LH123", numberOfPassengers: undefined, price: undefined}

//After including OR Operator with default values
// {flightNumber: "LH123", numberOfPassengers: 1, price: 199}

createBooking('LH123', 2, 800);
// {flightNumber: "LH123", numberOfPassengers: 2, price: 800}

// After changing 'price' to 199 * numberOfPassengers
createBooking('LH123', 2) // {flightNumber: "LH123", #ofPass: 2, price: 398}
createBooking('LH123', 5) // {flightNumber: "LH123", #ofPass: 5, price: 995}

createBooking('LH123', undefined, 1000); //{flight#: "LH123", #ofPass: 1, price: 1000}
*/

/*
const flight = 'LH234';
const joe = {
  name: 'Joe Tinker',
  passport: 234432,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234432) {
    alert('Checked in ');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, joe);    //  Checked in
console.log(flight); //  LH234
console.log(joe); //  {name: "Mr. Joe Tinker", passport: 234432}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(joe);
checkIn(flight, joe);  //  Wrong passport! Since the # was just altered
*/

/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
//Original string: JavaScript is the best!
//Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
//Original string: JavaScript is the best!
//Transformed string: javascriptisthebest!
//Transformed by: oneWord

const high5 = function() {
    console.log('🤚');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);   // 3 🤚

const greeting = function(greetingMessage) {
    return function(name) {
        console.log(`${greetingMessage}, ${name}.`);
    }
}

const greeterHeyThere = greeting('Hey there');
greeterHeyThere('Bob');  //  Hey there, Bob.
greeterHeyThere('Jack');  //  Hey there, Jack.

greeting('Hello')('Ricky');  //  Hello, Ricky.

const greetArrowFunc = greetingMessage => name => console.log(`${greetingMessage} ${name}`);

greetArrowFunc('Welcome,') ('Cooper.'); // Welcome, Cooper.
*/

/*
const delta = {
    airline: 'Delta',
    iataCode: 'DEL',
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, passengerName})
    },
};

delta.book(239, 'Frank Chance');
// Frank Chance booked a seat on Delta flight DEL239
delta.book(635, 'Mike Smith');
// Mike Smith booked a seat on Delta flight DEL635
console.log(delta); // displays 'delta' object, including 'bookings' array with 2 bookings listed
// 0: {flight: "DEL239", passengerName: "Frank Chance"}
// 1: {flight: "DEL635", passengerName: "Mike Smith"}

const deltawings = {
    airline: 'Deltawings',
    iataCode: 'DW',
    bookings: [],
};

const book = delta.book;

// This does not work
//book(23, 'Jack Taylor');

book.call(deltawings, 23, 'Jack Taylor'); 
// Jack Taylor booked a seat on Deltawings flight DW23
console.log(deltawings);
//{airline: "Deltawings", iataCode:"DW", bookings: Array(1)}

book.call(delta, 239, 'Mary Cooper');
//Mary Cooper booked a seat on Delta flight DEL239
console.log(delta);
// {airline: "Delta", iataCode: "DEL", bookings: Array(3), book: f}

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
// Mary Cooper booked a seat on Swiss Airlines flight LX583
console.log(swiss);
//{airline: "Swiss Airlines", iataCode: "LX", bookings: Array(1)}

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
// George Cooper booked a seat on Swiss Airlines flight LX583
console.log(swiss);
// {airline: "Swiss Airlines", iataCode: "LX", bookings: Array(2)}

book.call(swiss, ...flightData);
// George Cooper booked a seat on Swiss Airlines flight LX583

// Bind Method
// book.call(deltawings, 23, 'Jack Taylor');

const bookDW = book.bind(deltawings); // 'this' keyword assigned to deltawings
bookDW(23, 'Bob Williams');
// Bob Williams booked a seat on Deltawings flight DW23
const bookDEL = book.bind(delta);
const bookLX = book.bind(swiss);

const bookDW23 = book.bind(deltawings, 23);
bookDW23('Joe Tinker'); // Joe Tinker booked a seat on Deltawings flight DW23
bookDW23('Frank Chance'); // Frank Chance booked a seat on Deltawings flight DW23

// With Event Listeners
delta.planes = 300;
delta.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
document
    .querySelector('.buy')
    .addEventListener('click', delta.buyPlane.bind(delta));
    // 'this' keyword now points to 'delta' object

    // Partial application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));  //  220

    const addVAT = addTax.bind(null, 0.23);
    // same as   addVAT = value => value + value * 0.23;
    // null applies to the 'this' keyword

    console.log(addVAT(100));  //  123
    console.log(addVAT(200));  //  246

    const addTaxRate = function(rate) {
        return function(value) {
            return value + value * rate;
        }
    }
    const addVAT2 = addTaxRate(0.23);
    console.log(addVAT2(100));  // 123
    console.log(addVAT2(200));  // 246
    */

//  Coding Challenge # 1
/* Building a simple polling app

    This poll will have  question, an array of options from which to choose, and an array with the number of replies for each option. This data is stored in the starter object (below).

    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method will do two things:  Display a prompt window for the user to input the number of their selected option. The prompt will look like this:
            What is your favorite programming language?
            0: JavaScript
            1: Python
            2: C#
            3: C++
            (Write your option number)

    2. Based on the input number, update the answers array. For example, if the option chosen is # 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (answer 52 would not make sense in this case).
    3. Call this method whenever the user clicks the "Answer poll" button.
    4. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If the type is 'array', simply display the results array as it is, using  console.log(). This should be the default option. If the type is 'string', display a string like "Poll results are 13, 2, 4, 1".
    5. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    BONUS: Use the 'displayResults method to display the 2 arrays in the test data. Use both the 'array' and 'string' options. DON'T put the arrays in the poll object. What should the 'this' keyword look like in this situation?

    BONUS TEST DATA 1: [5, 2, 3]
    BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
    */

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: C#', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
//  (3) [5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
//  Poll results are 5, 2, 3

//   BONUS TEST DATA 1: [5, 2, 3]
//   BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// Immediately Invoked Function Expressions (IIFE)
// Function that is used once, and then never again.

/*const runThisOnce = function () {
  console.log('This function will not run again');
};
runThisOnce();

// IIFE     This function is called right here, inside the block.
(function () {
  console.log('This function will not run again');
})();

(() => console.log('This will ALSO NOT RUN AGAIN'))();
*/

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);  // f anonymous()
*/

/*
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46

// Reassigning the f-function
h();
f(); // 1554
console.dir(f); // f f()

const boardPassengers = function (n, waitTime) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);

  console.log(`Will start boarding in ${waitTime} seconds`);
};

boardPassengers(180, 3);
// Will start boarding in 3 seconds
// We are now boarding all 180 passengers
// There are 3 groups, each with 60 passengers
*/

// Take the IIFE given at the end of the function and attach an event listener that changes the color of the selected h1 element ('header') to blue each time that the BODY element is clicked. Don't select the h1 element again.

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
})();