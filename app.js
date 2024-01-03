
/**Given an array of integers, 
 * calculate the ratios of its elements that are positive, negative, and zero. 
 * Print the decimal value of each fraction on a new line with 6 places after the decimal.
 */
function plusMinus(arr) {
    let totalElements = arr.length
    let positive = arr.filter(num => num > 0).length
    let negative = arr.filter(num => num < 0).length
    let zero = arr.filter(num => num == 0).length

    const PositiveRatio = positive / totalElements
    const negativeRatio = negative / totalElements
    const zeroRatio = zero / totalElements

    console.log(PositiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))

}

// plusMinus([1, 1, 0, -1, -1]);

/**------------------------------------------------------------------------------------------------------------------------------------- */


/**Given five positive integers, 
 * find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function MinMaxSum(arr) {

    arr.sort((a, b) => a - b);


    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

    console.log(minSum, maxSum);
}

// MinMaxSum("256741038 623958417 467905213 714532089 938071625");

/**------------------------------------------------------------------------------------------------------------------------------------- */

/***Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
    const hours = parseInt(s.slice(0, 2))
    const minutes = parseInt(s.slice(3, 5))
    const seconds = parseInt(s.slice(6, 8))
    const period = s.slice(8)

    let militaryHours = hours

    if (period == 'PM' && hours != 12) {
        militaryHours += 12
    }
    else if (period == 'AM' && hours == 12) {
        militaryHours = 0
    }
    const militaryTime = `${String(militaryHours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`
    return militaryTime


}

// console.log(timeConversion("07:05:45PM"))


/**------------------------------------------------------------------------------------------------------------------------------------- */


/**Given an array of integers, where all elements but one occur twice, find the unique element. */
function uniqueNumber(arr) {
    const obj = {}

    arr.forEach(element => {

        obj[element] = (obj[element] || 0) + 1

    });
    console.log(obj)

    let uniqueNumbers = Object.keys(obj).filter(key => obj[key] === 1);
    uniqueNumbers.map(Number).toString();
    let uniqueNumber = parseInt(uniqueNumbers)
    return uniqueNumber

}
// console.log(uniqueNumber([1, 2, 3, 4, 1, 2, 3]))

/**------------------------------------------------------------------------------------------------------------------------------------- */


/**There is a collection of input strings and a collection of query strings.
 *  For each query string, determine how many times it occurs in the list of input strings.
 *  Return an array of the results. */

function MatchStrings(strings, queries) {
    const results = []
    const occurance = {}
    for (const string of strings) {
        occurance[string] = (occurance[string] || 0) + 1
    }
    console.log(occurance)

    for (const query of queries) {
        results.push(occurance[query] || 0)
    }
    return results
}
const inputStrings = ['aba', 'baba', 'aba', 'xzxb'];
const queryStrings = ['aba', 'xzxb', 'ab'];

// console.log(MatchStrings(inputStrings, queryStrings))

/**------------------------------------------------------------------------------------------------------------------------------------- */
/**You will be given a list of 32 bit unsigned integers.
 *  Flip all the bits (1 to 0 and  0 to 1) and return the result as an unsigned integer. */

function flippingBits(n) {
    // Use the bitwise NOT operator (~) to flip all bits
    // Use the logical AND operator (&) with 0xFFFFFFFF to treat the result as an unsigned integer
    console.log(~n)
    return ~n >>> 0;
}

// console.log(flippingBits(0))

/**------------------------------------------------------------------------------------------------------------------------------------- */


/****Given a square matrix, 
 * calculate the absolute difference between the sums of its diagonals. */

function diagonalDifference(matrix) {
    const n = matrix.length;

    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    for (let i = 0; i < n; i++) {
        leftToRightSum += matrix[i][i];
        rightToLeftSum += matrix[i][n - 1 - i];
    }

    const absoluteDifference = Math.abs(leftToRightSum - rightToLeftSum);

    return absoluteDifference;
}

// console.log(diagonalDifference([[1, 2, 3],
// [4, 5, 6],
// [9, 8, 9]]))

/**------------------------------------------------------------------------------------------------------------------------------------- */
/***A pangram is a string that contains every letter of the alphabet. 
 * Given a sentence determine whether it is a pangram in the English alphabet. 
 * Ignore case. Return either pangram or not pangram as appropriate. */

function pangrams(s) {
    
     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    const lowercaseS = s.toLowerCase();

    for (const letter of alphabet) {
        if (!lowercaseS.includes(letter)) {
            return 'not pangram '; 
        }
    }

    return 'pangram'; 
}



