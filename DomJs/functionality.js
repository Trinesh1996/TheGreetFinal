var nameText = document.querySelector(".nameText")
var greetBtn = document.querySelector(".button-primary.greet")
var countTextElem = document.querySelector(".count.background")
var greetingElem = document.querySelector(".greeting")
var clearBtn = document.querySelector(".button-primary.reset")
// clear text area
greetingElem.innerHTML = ""


// Factory function for greeting
function functionality(storedData){
	var counting = 0
	var local = storedData || {}
	var name = ""
	var lang = ""
	var noName = "Please enter name"


	function setName(value) {
		if (value != ""){
			name = value
		}
	}
	function noName(value){
		if(value == "" || value == undefined){
			noName = ""
		}
	}
	function setNoName(){
		return noName;
	}
				
	function langVal(value) {
		if (value != ""){
			lang = value
		}
		else if (value == undefined || value == ""){
			lang = "Please choose language"
		}		
	}
	function returnLang(){
		return lang;
	}


	function getName(){
		return name;
	}

	function counter(){
		return Object.keys(local).length
	}

	function greetings(language){	

		if(language == "English"){
			return "Hello" + " " + name + "!"
		}
		else if (language == "Afrikaans"){
			return "Halo" + " " + name + "!"
		}
		else if(language == "isiXhosa"){
			return "Molo" + " " + name + "!"
		}
		else if (language == undefined || lang == ""){
			return "Please choose language"
		}
		
	}

	function maps(){
		// when the greet button is pressed check if the user was already greeted before
		// By looking if the user name exists in local. if not increment this counter and update the screen.
		if(local[name.toUpperCase()] === undefined){
			local[name] = 0
		}
	}

	function retMap(){
		return local
	}		

	function clearIt(){
		local = {}
	}

	return{
		namesMap: maps,
		retLangVal: langVal,
		retLang: returnLang,
		setNoNames: noName,
		retNoName: setNoName,
		setNames: setName,
		names: getName,		 
		count: counter,
		greet: greetings,
		locals: retMap,		
		clearMe: clearIt
	}
}

var storedObjects = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
var theGreet = functionality(storedObjects);

greetBtn.addEventListener("click", greet)
clearBtn.addEventListener("click", clear)

// what is this line of code doing? the question mark is an inline if/else statement: THUS
// the above code:

// if(localStorage.getItem('users')){
// 	storedObjects = JSON.parse(localStorage.getItem('users'));
// }
// else{
// 	storedObjects = {}
// }

function greet(){
	var nameValue = nameText.value

if(nameValue == undefined || nameValue ==""){
	return greetingElem.innerHTML = "Please enter name"
}

	var languageRadioBtn = document.querySelector("input[name='LanguageType']:checked");
	if(languageRadioBtn){
		var langBtn = languageRadioBtn.value
	}
	//update local map
    theGreet.namesMap();
    //updates local storage
    localStorage.setItem('users', JSON.stringify(theGreet.locals()));

    theGreet.setNames(nameValue);

    greetingElem.innerHTML = theGreet.greet(langBtn)
    countTextElem.innerHTML = "Count:" + " " + theGreet.count();

 
}
function clear(){
	theGreet.clearMe();
	localStorage.clear();
	location.reload();
}
// prevents count from losing its current count
window.addEventListener('load', function(){
  countTextElem.innerHTML = "Count:" + " " + theGreet.count();
})
yhb
// 									NOTES									\\
//****************************************************************************\\


// A common use of JSON is to exchange data to and from a web server.
// When sending data to and from a web server, the data has to be in string format.
// converts a javascript object into a string.

// var obj = {"name":"John", "age":30, "city":"New York"};
// var myJSON = JSON.stringify(obj);
// console.log(myJSON)

// var list = ["t", "r", "i"];
// var json = JSON.stringify(list);
// console.log(json)


// JSON.stringify stores objects as strings withi  local storage to be exchanged on server. * data can only be manipulated once in string format

// example of JSON parse and stringify
// var car = {};
// car.wheels = 4;
// car.doors = 2;
// car.sound = 'vroom';
// car.name = 'Lightning McQueen';
// console.log( car );
// localStorage.setItem( 'car', JSON.stringify(car));
// console.log(JSON.parse(localStorage.getItem('car')));


// converts object to string
// var car = {wheels: 4, doors: 2}
// console.log(JSON.stringify(car));

// converts string back to object
// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// console.log(obj);


// localStorage.setItem( 'car', JSON.stringify(car) );
// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );


// checks for local storage support
// if(window.localStorage){}


// Iterating over objects
// SEE how many items are stored in local storage within console window.

// for(var i=0; i<localStorage.length; i++){
// 	let key = localStorage.key(i)
// 	let value = localStorage.getItem(key);
// 	console.log(key, value)
// }

// local storage
// example code

// let key = "Item1"
// localStorage.setItem(key, 'user')
// let myItem = localStorage.getItem(key);

// Clear all entries within local storage
// localStorage.clear()

		//EXPLAIN THE ENTIRE PROCESS OF CODING THE GREET\\
//****************************************************************\\

//TO BE CONTINUED




















