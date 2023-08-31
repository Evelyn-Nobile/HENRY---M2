// THIS
//! Arrow toma el "this" del entorno de ejecución donde se creó

let bobF = {
	_name: "Bob",
	_friends: ["Marge", "Homero"],
	printFriends() {
		this._friends.forEach(item => {
			console.log(this._name + " knows " + item);
		});
	},
};
bobF.printFriends();