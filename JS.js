var database = [
	{
	username: "Kirill",
	password: "K123"
	},
	{
	username: "Tata",
	password: "T123"
	},
	{
	username: "Vika",
	password: "V123"
	},
	{
	username: "Alisa",
	password: "A123"
	}
]

var newsfeed = [
	{username: "Barbi",
	timeline: "Help me!!!"},
	{username: "Roxy",
	timeline: "I'm here to help!"},
	{username: "Hellen",
	timeline: "You can do this!"},
	];

function IsUserValid (username, password)
	{
	for (var i=0; i < database.length; i++) 
		{
		if (database[i].username === username && 
			database[i].password === password)
		   { 
			return true;
			} 	
		}	
			return false;
	}

function SignIn (username, password) {
	if (IsUserValid(username, password)) {
		console.log(newsfeed);	
	} else 
		{alert("Sorry wrong signin"); 
	} 
}


var UserNamePrompt = prompt("What's your username?");
var UserPasswordPrompt = prompt("What's the password?");

SignIn(UserNamePrompt,UserPasswordPrompt);

