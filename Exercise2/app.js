const express = require('express')
const app = express()
const port = 3000

var functions = require("./utils/palindrome");

app.use(require('body-parser').urlencoded({ extended: false }));

// ==================== Accesss Control HTTP (CORS) =========================
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");

	next();
});

app.post('/palindrome', (req, res) => {
	console.log(req.body);
	functions.getPalindrome(req.body.palindrome, function (val) {
		if (val.success) {
			res.json({ palindrome: val.data });
         } else {
			res.json(val);
		}
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})