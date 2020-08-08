const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
	res.send('Shutiye laal kore debo!');
})

app.listen(port, () => console.log(`Ghar ka number hai ${port}!`))
