const os = require('os');
const http = require('http');

const port = process.env.PORT || 3000;

const requestListener = (req, res) => {
  const responseData = {
    date: new Date().toISOString(),
    arch: os.arch(),
    hostname: os.hostname(),
    type: os.type(),
    uptime: os.uptime()
  };
      
  res.writeHead(200, {
    'Content-Type': 'application/json'
  }).end(JSON.stringify(responseData));
};

const server = http.createServer(requestListener).listen(port,  () => {
  console.log(`Application listen on port ${port}`);	
});

process.on('SIGTERM', () => server.close(() => console.log('Process terminated SIGTERM')));
process.on('SIGINT', () => server.close(() => console.log('Process terminated SIGINT')));