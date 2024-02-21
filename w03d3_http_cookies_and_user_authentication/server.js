const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8087;

// config
app.set('view engine', 'ejs');

// middleware
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// data
const users = {
	'monkey@example.com': {email: 'monkey@example.com', password: 'fuzz'},
	'fuzz@example.com': {email: 'fuzz@example.com', password: 'monkey'}
};

// home
app.get('/', (req, res) => {
	console.log('users db', users);
	res.render('home');
});

// login
app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/login', (req, res) => {
	console.log(`POST to /login`, req.body);

	const candidateEmail = req.body.email_name;
	const candidatePassword = req.body.password_name;

	if (candidatePassword === users[candidateEmail].password ) {
		res.cookie('user', candidateEmail);
		res.redirect('/profile');
	} else {
		res.redirect('/register');
	}
});

// register
app.get('/register', (req, res) => {
	res.render('register');
});

app.post('/register', (req, res) => {
	console.log(`POST to /register`, req.body);

	const candidateEmail = req.body.email_name;
	const candidatePassword = req.body.password_name;

	// 	'monkey@example.com': {email: 'monkey@example.com', password: 'fuzz'},
	users[candidateEmail] = {
		email: candidateEmail,
		password: candidatePassword
	};

	res.redirect('/login');
});


// profile
app.get('/profile', (req, res) => {
	console.log('cookies', req.cookies);
	const templateVars = {
		email: req.cookies.user,
		password: users[req.cookies.user].password
	};
	if (req.cookies['user']){ // VERY VULNERABLE SECURITY HOLE
		res.render('profile', templateVars);
	} else {
		res.redirect('/');
	}
});

// logout
app.get('/logout', (req, res) => {
	res.clearCookie('user');
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log(`Server is listening at PORT=${PORT}`);
});