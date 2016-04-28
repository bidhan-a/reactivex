// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

// combiner: Callback function for all elements in an array.
// The return value of the callback function is the accumulated result. 
// It is provided as an argument in the next call to the callback function.

// initialValue: If initialValue is specified, it is used as the initial value to start the accumulation.
// The first call to the callbackfn function provides this value as an argument instead of an array value.

Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};

// Same thing as above(with more comments)

Array.prototype.myReduce = function(callback, initialValue) {
	var counter, accumulatedValue;
	
	// If the array is empty, return it
	if(this.length === 0) {
		return this;
	}
	
	// If the user didn't pass an initial value, make the first item 
	// of the array the accumulatedValue
	if(arguments.length === 1) {
		accumulatedValue = this[0];
		// Start counter from 1 since we have already used the first value
		counter = 1;
	} else if(arguments.length >= 2) {
		accumulatedValue = initialValue;
		// Start counter from 0 since we use the initial value
		counter = 0;
	} else {
		// Throw an exception if there are 0 or less arguments
		// At least one argument(the callback function) is mandatory
		throw "Invalid arguments";
	}
	
	// Loop through the array, passing the result of the previous
	// computation and the current value back into the callback function until
	// we've exhausted the entire array and are left with only one value
	while(counter < this.length) {
		accumulatedValue = callback(accumulatedValue, this[counter]);
		counter++;
	}
	
	// Return the final accumulatedValue as a single item inside of an array
	// In the native `reduce` implementation, a single value is returned instead
	return [accumulatedValue];	
};

var ratings = [1, 2, 3, 4, 5];

// You should return an array containing only the largest rating. Remember that reduce always
// returns an array with one item.
var highest =  ratings.myReduce(function(acc, curr) {
    if(acc > curr) {
        return acc;
    }
    else {
        return curr;
    }
});

var sum = ratings.myReduce(function(acc, curr) {
	return acc + curr;
});

console.log(highest);
console.log(sum);

