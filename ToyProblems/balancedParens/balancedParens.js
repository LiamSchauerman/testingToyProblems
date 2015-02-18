/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false   ()()
 *   balancedParens('(())');  // true


 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(string){
	var stack = [];
	var pairs = {
		"(" : ")",
		"{" : "}",
		"[" : "]"
	}
	
	for (var i = 0; i < string.length; i++) {
		//if open
			// add to stack
		// if close
			// if the close is the match to the most recent open
				// pop off stack
			// else
				// return false

		if( pairs[ string[i] ] ) {
			stack.push( string[i] )
		} else {
			var pop = stack.pop();
			if( pairs[ pop ] !== string[i]){
				return false
			};
		}
	};
	return stack.length === 0;
}

