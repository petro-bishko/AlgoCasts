for (var i = 0; i < 10; i++) {
	setTimeout(function() { alert(i); }, 1000 + i);
}
for (let i = 0; i < 10; i++) {
	setTimeout(function() { alert(i); }, 1000 + i);
}
for (var i = 0; i < 10; i++) {
	setTimeout(console.log, 1000, i);
}

////////////////////////////////////////////////////////////////////

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
function createBase(a) {
	return function (b) {
		return a + b;
	}
}

//////////////////////////////////////////////////////////////////// clouse makeCounter
function makeCounter() {
	let counter = 0;
	
	return {
		add(value) {
			counter += value;
		},
		retrieve() {
			return `Counter is ${counter}`
		}
	}
}

const newCounter = makeCounter();

newCounter.add(5);
newCounter.add(12);
console.log(newCounter.retrieve());

/////////////////////////////////////////////////////////////////////
(2).plus(3).minus(1)
Number.prototype.plus = function (value) {
	return this + value;
};

Number.prototype.minus = function (value) {
	return this - value;
};


///////////////////////////////////////////////////////////////////

function isBalanced(string) {
	let open = [];
	
	const openBrackets = new Set([ '(', '[', '{']);
	const bracketsCorrespondence = {
		')': '(',
		'}': '{',
		']': '[',
	};
	
	for (let c of string) {
		if (openBrackets.has(c)) {
			open.push(c)
		} else if (bracketsCorrespondence[c] && open.pop() !== bracketsCorrespondence[c]) {
			return false;
		}
	}
	
	return !open.length;
}

/////////////////////////////////////////////////////////////////// myBind

Function.prototype.myBind = function (context) {
	return () => {
		this.apply(context, arguments);
	}
};

/////////////////////////////////////////////////////////////////// myCall

Function.prototype.myCall = function (context, ...args) {
	this.bind(context, ...args)();
};

/////////////////////////////////////////////////////////////////// myApply

Function.prototype.myApply = function (context, args) {
	this.call(context, ...args);
};
