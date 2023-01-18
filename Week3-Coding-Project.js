console.log('\tQ: 1');

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //8
console.log(ages);

//1.a. Programmatically subtract the value of the first element in the array 
//from the value in the last element of the array
console.log('\tQ: 1a');
console.log(ages.slice(-1) - ages[0]); //90 trying the slice method
console.log(ages[ages.length-1] - ages[0]) //90

//1.b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
//(works for arrays of different lengths).
console.log('\tQ: 1b');
ages.push(33);
console.log(ages);
console.log(ages.slice(-1) - ages[0]); //30
console.log(ages[ages.length-1] - ages[0]); //30

//1.c. Use a loop to iterate through the array 
//and calculate the average age. 
console.log('\tQ: 1c');
function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(ages) {
        total += ages;
        count++;
    });
    return total / count;
}
console.log(calculateAverage(ages)); //29.22 trying forEach loop

function testArray(ageNum) {
    let sum4 = 0
    for(let i = 0; i < ageNum.length; i++) {
        sum4 += ageNum[i]  
    }
    let ageAverage = sum4 / ageNum.length
    return ageAverage
}
console.log(testArray(ages));

//2. Create an array called names that contains the following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
console.log('\tQ: 2');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);


//2.a. Use a loop to iterate through the array and calculate the 
//average number of letters per name. 
console.log('\tQ: 2a');
let sum = 0
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length
}
let namesAverage = sum / names.length
console.log(namesAverage); //3.83

//2.b. Use a loop to iterate through the array again and 
//concatenate all the names together, separated by spaces. 
console.log('\tQ: 2b');
let myString = names.join(' '); 
console.log(myString);

let concat = '';
for (let i = 0; i < names.length; i++) { //same result using a for loop
    //console.log(names[i]);
    concat = concat + names[i] + " ";
}
console.log(concat);

//3. How do you access the last element of any array?
console.log("\tQ: 3");
console.log(names[names.length-1]);
//4. How do you access the first element of any array?
console.log('\tQ: 4');
console.log(names[0]);

//5. Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names 
//array and add the length of each name to the nameLengths array.
console.log('\tQ: 5');
namesArray = ['Kelly', 'Sam', 'Kate'];
let nameLengths = namesArray.map(function(firstName) {
    return firstName.length;
})
console.log(nameLengths); // trying map method

function createNumberArray(namesArray) {
    let arrayLength = [];
    for(let i = 0; i < namesArray.length; i++) {
        arrayLength.push(namesArray[i].length);
    }
    return arrayLength;
}
nameLengths = createNumberArray(namesArray);
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate 
//the sum of all the elements in the array. 
console.log('\tQ: 6');
let total = 0
for (let i = 0; i < nameLengths.length; i++) {
    //console.log(nameLengths[i])
    total = total + nameLengths[i]
}
console.log(total); //12

//7. Write a function that takes two parameters, word and n, 
//as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log('\tQ: 7');
function repeatWord(word, n) {
        console.log(word.repeat(n))
      }
      repeatWord('Hello',3)

//8. Write a function that takes two parameters, 
//firstName and lastName, and returns a full name.
console.log('\tQ: 8');
function createFullName(firstName, lastName) {
    return firstName + " " + lastName
}
console.log(createFullName('Kate', 'Running'));

//9. Write a function that takes an array of numbers and 
//returns true if the sum of all the numbers in the array is greater than 100.
console.log('\tQ: 9');
let arrayNum = [50, 50, 20, 30]
function totalNums(arrayNum) {
 let sums = 0;
 for(let i = 0; i < arrayNum.length; i++) {
    sums += arrayNum[i];
    console.log(sums)
 }
 if (sums > 100) {
    return true
 }
 if (sums <= 100) {
    return false
 }
}
console.log(totalNums(arrayNum));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('\tQ: 10');

let number1 = [10, 20, 30, 40]

function numberArray (num1) {
    let newSum = 0;
    for(let i = 0; i < num1.length; i++) {
        newSum += num1[i];
    }
    let arrayAverage = newSum / num1.length
    return arrayAverage
}
console.log(numberArray(number1));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the
//first array is greater than the average of the elements in the second array.
console.log('\tQ: 11');
let array1 = [20, 10]
let array2 = [6, 8]
function twoArrays (a1, a2) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < a1.length; i++) {
        sum1 += a1[i] 
    }
    let average1 = sum1 / a1.length
    for(let i = 0; i < a2.length; i++) {
        sum2 += a2[i]
    }
    let average2 = sum2 / a2.length
    console.log(average1);
    console.log(average2);
    if (average1 > average2) {
        return true
    } else {
        return false
    }
}
console.log(twoArrays(array1, array2))


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('\tQ: 12');
let isHotOutside = true
let moneyInPocket = 15
function willBuyDrink (temperature, number) {
    if (temperature === true && number > 10.50) {
        console.log("can I buy a drink")
        return true
    } else {
        console.log("no you cannot!")
        return false
    }
    console.log("money", number > 10.50)
    console.log("test", temperature === true)
    console.log("temperature:", temperature, "number:", number)

}
let drink = willBuyDrink(isHotOutside, moneyInPocket) //isHotOutside = temperature, moneyInPocket = number
console.log(drink);

//13. Create a function of your own that solves a problem.
//In comments, write what the function does and why you created it.
console.log('\tQ: 13');

const numberArray5 = [20, 600, 5, 35, 75];

function compareNumbers(a, b) { //function is checking the value of the elements
    return a - b;
}
numberArray5.sort();
console.log(numberArray5);
numberArray5.sort(compareNumbers); // now the array is sorted in numeric value
console.log(numberArray5);



