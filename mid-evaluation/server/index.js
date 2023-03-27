require('dotenv').config();
const http = require('http');
const app = require('./api/api-server');
const httpServer = http.createServer(app);

const PORT = 3001 || process.env.PORT;

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

