const express = require('express');
const app = express();

app.use('/dist', express.static('dist'));
app.use('/workers', express.static('dist'));
app.use(express.static('./'));

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
