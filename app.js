// create an object for the EasyHTTP library
const http = new EasyHTTP();

// Display output function
function disp(data) {
	document.querySelector('.output').innerHTML = data;
}

// Make a HTTP GET request
http.get('https://jsonplaceholder.typicode.com/users')
.then((data) => disp(JSON.stringify(data)))
.catch((err) => disp(err));

// Create a user with some data
const user = {
	name: "Susmita Majumder",
	username: "susmaju",
	email: "sumi8768@gmail.com"
};

// Make a HTTP POST request 
/* http.post('https://jsonplaceholder.typicode.com/users', user)
.then(response => disp(JSON.stringify(response)))
.catch(err => disp(err)); */

// Make a HTTP PUT request
/* http.put('https://jsonplaceholder.typicode.com/users/7', user)
.then( (response) => disp(JSON.stringify(response)) )
.catch( (err) => disp(err) ); */

// Make a HTTP DELETE request
/* http.delete('https://jsonplaceholder.typicode.com/users/7')
.then( (response) => disp(response) )
.catch( (err) => disp(err) ); */