//1 . Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number)=>{
    if(number>0)
        return `${number} is positive`;
    else
        return `${number} is negative`;
}
console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

//2 . Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (noOfDays)=>{
    const age = noOfDays/365;
    const message = `${age} years`;
    console.log(message);
}
convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

//3 . Write a function that takes three numbers and returns the largest of the three numbers.
const getLargestNumber = (x,y,z) =>{
    if(x>y && x>z)
        console.log(`${x} is the largest number`);
    else if(y>x && y>z)
        console.log(`${y} is the largest number`)
    else
        console.log(`${z} is the largest number`)
}

getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6

//4. Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (lastname) =>{
    console.log(lastname[lastname.length-1]);
}
getLastName(["Charlie", "Rob", "Andy"]); // returns “Andy”
getLastName(["Ash","Stu"]); // returns "Stu"

//5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
const allNumbersPositive = (numbers) =>{
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<0){
            console.log("False");
            return;
        }
    }
    console.log("True");
}
allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false