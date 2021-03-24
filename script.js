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
