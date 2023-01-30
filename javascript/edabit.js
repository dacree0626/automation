console.log("hello world")
// https://jsdoc.app/
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
/**
 * this function is trying to take this date and check it out for its month and day
 * @param {Date} date 
 */
function timeForMilkAndCookies(dayofyear)
{
    const month = dayofyear.getMonth()
    const date = dayofyear.getDate()
    return(month === 11 && date === 24)

}

console.log(timeForMilkAndCookies(new Date(3552, 11, 24)))

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

/**
 * 
 * @param {number[]} arr 
 */
function minMax(arr) {
	// define a minimum and maximum value
    // set the minimum and maximum value equal to the fist value
    // iterate through the array
    // change minimum if the number we iterate on is lower
    // change the maximum if number we iterate on is higher
    let min = max = arr[0] //could build a shortcut here but the profiler might not actually run it faster.

    console.log(`min ${min}`)
    console.log(`max ${max}`)
    console.log(`somenumber ${somenumber}`)
    for(const index of arr){
        if(index < min){
            min = index
        }
        if(index > max){
            max = index
        }
    }
    return [min,max]


}

function minnMaxx(arr) {
    // define min and max
    // sort array
    // set min to array index of 0
    // set max to array index of array.max
    let minn, maxx, sortarray
    sortarray = arr.sort((a, b) => {
        return a - b;})
    minn = sortarray[0]
    maxx = sortarray[sortarray.length - 1 ]
    return [minn,maxx]

}

console.log(minnMaxx([-1, 6, 2334454, 5]))

// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

function sortDrinkByPrice(drinks) {
    return drinks.sort((a,b) => a.price - b.price) //sort is 
}

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "orange", price: 5},
    {name: "gold", price: 300},
    {name: "silver", price: 25}
  ]

console.log(sortDrinkByPrice(drinks))


// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

function shiftToLeft(x, y) {
	power = 2 ** y
    return x * power
}


console.log(shiftToLeft(-6,5))


// Create a function that takes an array of values resistance that are connected in series, 
// and calculates the total resistance of the circuit in ohms. 
// The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
// Notice the singular ohm for values <= 1.
/**
 * 
 * @param {number[]} resistances 
 */
function calculateOhm(resistances){
    var initialValue = 0
    console.log(resistances)
    const ohmTotal = resistances.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )
    if(ohmTotal <= 1){
        return `${ohmTotal} ohm`
    }
    else{
        return `${ohmTotal} ohms`
    }
}

console.log(calculateOhm([.1]))


// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die.
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? 
// Create a function that takes your position a and your friend's position b and returns a boolean representation of 
// whether it's possible to earn a bonus on any die roll.
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.

function diceBonus(me, opponent){
    if(me >= opponent){
        return false
    }
    else if((me + 6) >= opponent){
        return true
    }
    else {
        return false
    }
}

console.log("diceBonus: " + diceBonus(2,9))

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
/**
 * 
 * @param {number[]} nums 
 */
function sevenBoom(nums){
    var found = false
    nums.forEach(number => { 
        if((number+'').indexOf('7') > -1){
            console.log(number)
            found = true
        }
    })
    return found
}

console.log(sevenBoom([1,2,3,4,5,6,5,9979]))

// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.
// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. 
// In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

/**
 * 
 * @param {String} example 
 */

function timeRegEx(example){
    console.log(example)
    var re = new RegExp("^(0?[1-9]|1[0-2]):[0-5][0-9]$")
    console.log(re)
    let found = example.match(re)
    console.log(found)
    return found
}
console.log(timeRegEx("Breakfast at 09:00 in the room 123:456"))

// questions for next C&C:
// What does a testrunner do?