function pasuser(form) {
	if (form.id.value=="admin"){ 
		if (form.pass.value=="admin"){              
			location="coming soon.html"} 
		else {alert("Invalid Password")
			location="login.html"}
	}
	else {alert("Invalid UserID")
		location="login.html"}
}