const express = require('express')
const app = express()

app.get('/api/v1/hello', (req, res)=> {
  res.send('<h1>Hello</h1>')
})

app.post('/api/v1/logon', (req, res) => {
  res.send('<h1>Log on</h1>')
})  

const port = process.env.PORT || 3000
app.listen( port, console.log(`Server is listening on ${port}`))