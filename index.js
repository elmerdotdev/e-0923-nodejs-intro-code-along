// Require the http module
const http = require('http')

// Use environment variables .env
const dotenv = require('dotenv')
dotenv.config()

// Create server
const server = http.createServer((request, response) => {
  console.log(`Visiting: ${request.url}`)
  
  if (request.url === '/') {
    response.writeHead(200, {
      'Content-type': 'text/html'
    })
    response.write('<h1>This is Home!</h1>')
  } else if (request.url === '/about') {
    response.writeHead(200, {
      'Content-type': 'text/html'
    })
    response.write('<h2>This is the about page</h2>')
  } else if (request.url === '/secret-page') {
    response.writeHead(402, {
      'Content-type': 'text/plain'
    })
    response.write('You are not authorized to view this page')
  } else {
    response.writeHead(404, {
      'Content-type': 'text/html'
    })
    response.write('<div><h1 style="color: red;">Sorry, you are lost.</h1></div>')
  }
  response.end()
})

// Start the server
const PORT = process.env.SERVER_PORT || '4001'

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})