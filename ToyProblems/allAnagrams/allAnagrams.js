/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// var allAnagrams = function(string) {
// 	//do the thing!

// 	var results = [];
// 	var letters = string.split('');

// 	function recurse(attempt, array){
// 		var attempt = attempt || "";
// 		var array = array || letters;

// 		if( array.length === 0 ){
// 			results.push(attempt);
// 		};

// 		for( var i=0; i<array.length; i++ ){
// 			attempt += array[i];
// 			array.splice(i, 1);
// 			recurse(attempt , array);
// 		}
// 	}
// 	return results;
// };

var allAnagrams = function(string){
	var results = [];
	var array = string.split('');
	function recurse(attempt, letters){
		if( letters.length === 0 ){
			results.push(attempt)
		}
		for( var i=0; i<letters.length; i++ ){
			var tmp = letters[i]
			attempt += tmp;
			letters.splice(i, 1);
			recurse(attempt, letters);
			attempt = attempt.slice(0, attempt.length-1);
			letters.splice(i, 0, tmp);

		}
		// for each element in the string, start a new attempt at a solution
		// input that attempt into this function, including a subset of the array
		// if the array is empty, add the string to results
	}
	recurse('', array);

	return results;
}


// translate the string into an array;
// track results

// for loop over the array - indicates each letter as a starting point in our solution
	// add current letter to our attempt
	// remove that letter from the array
	// recurse with new array and attempt
// 'yes'
     'y',         'e',          's'
 'ye', 'ys',   'ey', 'es',   'sy', 'se'
'yes', 'yse', 'eys', 'esy', 'sye', 'sey'