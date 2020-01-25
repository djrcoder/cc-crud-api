const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => response.send('I am Node!'))

app.listen(port, () => console.log(`My blog is listening on port ${port}!`))