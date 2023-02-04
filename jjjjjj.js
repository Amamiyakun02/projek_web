const name = {
	Fullname: function(){
		return this.firstname + " " + this.lastname;
	}
}

const name1 ={
	firstname:"Muhammad",
	lastname:"Maireza"
}

console.log(name.Fullname.call(name1));