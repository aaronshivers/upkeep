const app = require('./app')
const config = require('../config.json')

const PORT = config.server.port
const message = () => console.log(`Listening on port ${PORT}`)

app.listen(PORT, message)
