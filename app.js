function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if (username === 'Webdev' && password === 'learn') {
		alert('Login Sucesfully');
		return false;
	} else {
		alert('Login Failed');
	}
}
