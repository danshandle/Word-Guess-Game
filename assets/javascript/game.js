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

function start(){
	rand = Math.floor(Math.random() * words.length)
	word = words[rand];
	blanks = [];
	guesses = 8;
	letters = [];

    console.log(word);

//blanks    
for (i=0; i<word.length; i++){
    blanks.push('_');
}

//blanks become a string
console.log(blanks.join(" "));
document.querySelector("#input").innerHTML = (blanks.join(" "));
document.querySelector("#letters").innerHTML = (letters);
document.querySelector("#guesses").innerHTML = (guesses);
document.querySelector("#score").innerHTML = ("Wins: "+ wins + " Losses: "+ losses);
}

document.onkeyup = function(event){

	

	for(i=0;i<alpha.length;i++){
		if(event.key === alpha[i]){
			letterstest = true;
		}
    }
    
    //refresh function
function refresh(x){
	console.log(x);
	blanks[x] = word[i] + " ";
	document.querySelector("#input").innerHTML = (blanks.join(" "));