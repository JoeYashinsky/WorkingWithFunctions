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