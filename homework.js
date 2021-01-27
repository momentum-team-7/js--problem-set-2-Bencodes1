// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


function remove(array, member){
    let array2 = array.slice()  
    for(let checker of array2){
        if(checker===member){
            let idx = array2.indexOf(checker)
            array2.splice(idx,1)
        }
        else {

        }
    }
    return array2
};


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

//Note from Ben: Took forever but I figured out the .slice trick since "arrays are mutable"

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(array3){
    let sum1 = 0
    for (let checker of array3){
        sum1 += checker
    }
    return sum1
};

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(array){
    if (array.length == 0){
        return 
    }
    else{
        let sum2 = 0
        for (let checker of array){
            sum2 += checker
        }
    return (sum2/array.length)
    }
};


// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(array){
    if (array.length == 0){
        return 
    }
    else{
        array.sort(function(a,b){return a-b}) 
        return array[0]
    }
};
//*******From Ben: I found this from googling how to sort arrays. 

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
 
function selectionSort(array){
    var arrayCopy = array.slice(0)

    if (array.length == 0){
        return array
    }
    else{
        let minID, tempvar
        let len = array.length
        for(var i = 0; i < len; i++){
            minID = i
            for(var  j = i+1; j<len; j++){
                if(array[j]<array[minID]){
                    minID = j;
                }
            }
        console.log("tempvar:", tempvar, ". minID:", minID, ". array[i]:", array[i])
        tempvar = array[i]
        array[i] = array[minID]
        array[minID] = tempvar    
        console.log("Run#", i+1, "tempvar:", tempvar, ". minID:", minID, ". array[i]:", array[i])
        console.log(array)
        }
    }
    return array
};

// from Ben: Used a different method, where I didn't make a second array. I will go back and try this again using that method.


// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(array){

    let string = ""
    let i = 0

    if (array.length == 0){
        return ""
    }
    else if (array.length == 1){
        return array[0]
        console.log(string)

    }
    else{
        for(let i = 0; i < array.length-1; i++){
            string = string.concat(array[i], ",")
            console.log(string)
        }
        string = string.concat(array[array.length-1])
        console.log(string)
    }
    return string
};
