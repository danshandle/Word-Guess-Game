const words = ["touchdown", "rams", "colliseum", "sack", "gridiron","gregtheleg","punt","interception","defense","gurley","tackle"]

let rand = "";
let word = "";
let blanks = [];
let guesses = 0;
let letters = [];
let wins = 0;
let losses = 0;
let lock = false;
let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let open = new Audio('assets/sounds/welcomemusic.wav');
let dis = new Audio('assets/sounds/sacked.wav');
let got = new Audio('assets/sounds/touchdown.wav');

start();

function sleep(ms){
	return new Promise(resolve =>setTimeout(resolve, ms));
}

function reset(){
	lock = false
	open.play();
	start();
}




function start(){
	rand = Math.floor(Math.random() * words.length)
	word = words[rand];
	blanks = [];
	guesses = 8;
	letters = [];

	console.log(word);

	//create array of blanks "_ "
	for (i=0; i<word.length; i++){
		blanks.push('_');
	}
	
	//join the "_ " array into a string.
	console.log(blanks.join(" "));
	document.querySelector("#input").innerHTML = (blanks.join(" "));
	document.querySelector("#letters").innerHTML = (letters);
	document.querySelector("#guesses").innerHTML = (guesses);
	document.querySelector("#score").innerHTML = ("Wins: "+ wins + " Losses: "+ losses);
	}
//refresh the game board
function refresh(x){
	console.log(x);
	blanks[x] = word[i] + " ";
	document.querySelector("#input").innerHTML = (blanks.join(" "));
	
}
console.log(blanks);

document.onkeyup = function(event){

	

	for(i=0;i<alpha.length;i++){
		if(event.key === alpha[i]){
			letterstest = true;
		}
	}


	//input
	if(!lock && letterstest){
		console.log(event.key);

		if (test = false);
		if (scoretest = false);
		if (wintest = true);

		for (j = 0; j < letters.length; j++){
			if (event.key === letters[j]){
				test = true;
			}
		}
		
		if(!test){
			for (i = 0; i < word.length; i++){
				if (event.key === word[i]){
				refresh(i);
				if (scoretest = true);
				}
			}
			if(!scoretest){
				guesses--;
				document.querySelector("#guesses").innerHTML = (guesses);
			}
			letters.push(event.key);
			document.querySelector("#letters").innerHTML = (letters);
		}
		for (k=0; k < blanks.length; k++){
			//console.log(blanks[k]);
			if(blanks[k] === '_'){
				wintest = false;
			}
		}

		
		if (wintest){
			document.querySelector("#input").innerHTML = ("Congrats Champ! ");
				lock = true;
				got.play();
				wins++;
				document.querySelector("#score").innerHTML = ("Wins: "+ wins + " Losses: "+ losses);
				//start();
				

			}else
			if(guesses <= 0){
				//console.log(guesses);
				document.querySelector("#input").innerHTML = ("Hit the showers");
				lock = true;
				dis.play();
				losses++;
				document.querySelector("#score").innerHTML = ("Wins: "+ wins + " Losses: "+ losses);
				//start();
		}			
	}
}
