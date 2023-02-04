const namecar ={
	fullname: function(){
		return this.firstname + " " + this.lastname;
	}
}
const person1= {
	firstname:"Rizki",
	lastname:"john"
}
const person2={
	firstname:"Riski",
	lastname:"Uis"
}
console.log(namecar.fullname.call(person1));