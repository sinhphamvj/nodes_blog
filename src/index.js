const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const exphbs  = require('express-handlebars')
const route = require('./routes')

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
console.log('Dir',__dirname)
//http logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))
console.log('Dir',__dirname)

// route init
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})