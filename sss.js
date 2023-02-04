const Name ={
	FullName: function(){
	return this.firstname+ " " + this.lastname;
	}
}

name1 ={
	firstname: "Muhammad",
	lastname: "Maireza"
}

console.log(Name.FullName.call(name1));