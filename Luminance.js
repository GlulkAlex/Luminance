'use strict';
/*************************************************************************
 *	JAVASCRIPT implementation 
 *	from http://introcs.cs.princeton.edu/java/31datatype/
 *  Compilation:  javac Luminance.java
 *  Execution:    java Luminance r1 g1 b1 r2 g2 b2
 *
 *  Library for dealing with monochrome luminance. 
 *  Uses the NTSC formula  Y = .299*r + .587*g + .114*b.
 *
 *  % java Luminance 0 0 0 0 0 255
 *
 *************************************************************************/

//import java.awt.Color;
//*Color red    = new Color(255,   0,   0);

		//*JavaScript arguments are passed by value
		//*In JavaScript, object references are values.
		//If a function changes an object property, it changes the original value.
		//*for (i = 0; i < arguments.length; i++) {
		
//*var red = (function Color(r, g, b) {
function Color(r, g, b) {
	var red = initialaze(arguments[0]), 
	green = initialaze(arguments[1]), 
	blue = initialaze(arguments[2]);//*default values
	
	function initialaze(/*baseColor,*/ initValue) {

		if (initValue >= 0 && initValue <= 255 /*|| initValue === undefined*/) {
			//red = r;
		} else {
			initValue = 255;
		}
		return initValue;
	}	
	
	function changeColor(r, g, b) {
		if (r) {
			//red = initialaze(arguments[0]);
			red = initialaze(r);
		}
		if (g) {
			green = initialaze(arguments[1]);
		}		
		if (b) {
			blue = initialaze(arguments[2]);
		}
	}

	function setRed(redValue) {	
		console.log('evaluationg color value - type check');
		//*value diapason / interval
		if (redValue >= 0 && redValue <= 255) {
			console.log('setting red color to:' + redValue);
			try {
				//**tryCode - Block of code to try
				red = redValue;
			}
			catch(err) {
				//**catchCode - Block of code to handle errors
				console.log('errors handler:' + err);
			} 
			finally {
				//**finallyCode - Block of code to be executed regardless of the try / catch result
				console.log('now red color value is:' + red);
			}

			//this.r = redValue;
		} else {
			console.log('color value - not valid/invalid');
		}
	}	
	function getRed() {
		return /*this.r*/red /*this.red*/;
	}	
	function getGreen() {
		return green;
	}	
	function getBlue() {
		return blue;
	}

	//*initialaze();
	
	//*InterFace / API
	return {
		/*
		r: function() {
      return red;
    },
		g: function g() {
      return green;
    },
		b: function() {
      return blue;
    }, */
		getRed: function r()  {
			return getRed();
		},
		getGreen: function g() {
      return green;
    },
		getBlue: function b() {
      return blue;
    },		
		//})(),//*to call property without parentheses 
		setRed: function (redValue) {			
			/*if (redValue >= 0 && redValue < 255) {
				this.red = redValue;
				this.r = redValue;
			}*/
			//*invoke inner 'private' method
			//*stinky code - only pass parameter/argument to actual function/method 
			setRed(redValue);
			//changeColor(redValue, undefined, undefined);
		},
		setGreen: function (greenValue) {			
			//*setRed(redValue);
			//changeColor(undefined, greenValue, undefined);
			green = initialaze(greenValue);
		},
		setBlue: function (blueValue) {			
			changeColor(undefined, undefined, blueValue);
		},
		setColor: function (redValue, greenValue, blueValue) {			
			changeColor(redValue, greenValue, blueValue);
		},		
		colorValues: function () {			
			//*console.log('red:' + red + ', green:' + green + ', blue:' + blue);
			return 'red:' + red + ', green:' + green + ', blue:' + blue;
		}			
	};
}	
//*})();//*JavaScript Closures //*self-invoking functions
//*A closure is a function having access to the parent scope, 
//*even after the parent function has closed.
//*so, 
//*closure - remembers it's environment and this coses / gains / invokes a side effects  
//* !!! be warn / couscous !!! especially, when changing variables within it's scope  

var red = Color(255, 0, 0), 
green = Color(0, 255, 0), 
blue = Color(0, 0, 255);

/*****************************************************************************/
/** Examples **/
/*****************************************************************************/
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3
/*****************************************************************************/
//*a function factory — it creates functions which can add a specific value to their argument.
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

//*console.log('add5(2):' + add5(2));  // 7
//*console.log('add10(2):' + add10(2)); // 12
/*****************************************************************************/
var counter = (function() {
  var privateCounter = 0;
	
  function changeBy(val) {
    privateCounter += val;
  }
	
  return {
		//*InterFace / API
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

//*alert(counter.value()); /* Alerts 0 */
//*console.log('counter.value():' + counter.value()); /* Alerts 0 */
counter.increment();
counter.increment();
//*alert(counter.value()); /* Alerts 2 */
//*console.log('counter.value():' + counter.value()); /* Alerts 2 */
counter.decrement();
//*alert(counter.value()); /* Alerts 1 */
//*console.log('counter.value():' + counter.value()); /* Alerts 1 */
/*****************************************************************************/

//public class Luminance {
var lumi = function Luminance() {

	// return the monochrome luminance of given color
	//public static double lum(Color color) {
	//**function lum(Color color) {
	
	function lum(color) {
		/*int*/ var r = color.getRed(),
		/*int*/ g = color.getGreen(),
		/*int*/ b = color.getBlue();
		
		return .299 * r + .587 * g + .114 * b;
	}
		
	return {
		lum: function (color) {				
				return lum(color);
		},

		// return a gray version of this Color
		/*
		public static Color toGray(Color color) { */
		toGray: function toGray(color) {
			var y = Math.round(lum(color)),   // round to nearest int
			gray = new Color(y, y, y);
			
			return gray;
		}, 

		// are the two colors compatible?
		/*
		public static boolean compatible(Color a, Color b) { */
		compatible: function compatible(a, b) {
			return Math.abs(lum(a) - lum(b)) >= 128.0;
		} 

	}
	
	// test client
	/*
	public static void main(String[] args) {
			int[] a = new int[6];
			for (int i = 0; i < 6; i++) {
					a[i] = Integer.parseInt(args[i]);
			}
			Color c1 = new Color(a[0], a[1], a[2]);
			Color c2 = new Color(a[3], a[4], a[5]);
			
			System.out.println("c1 = " + c1);
			System.out.println("c2 = " + c2);
			System.out.println("lum(c1) =  " + lum(c1));
			System.out.println("lum(c2) =  " + lum(c2));
			System.out.println(compatible(c1, c2)); 
	} */
}

// test client
var a = [0, 0, 0, 255, 255, 255],
	c1 = new Color(a[0], a[1], a[2]),
	c2 = new Color(a[3], a[4], a[5]);

/*
console.log("c1 = " + c1.colorValues());
console.log("c2 = " + c2.colorValues());
console.log("lum(c1) =  " + lumi().lum(c1));
console.log("lum(c2) =  " + lumi().lum(c2));
console.log('compatible(c1, c2):' + lumi().compatible(c1, c2)); */