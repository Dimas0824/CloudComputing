const RESPONSE_TEXT = 'CI/CD pipeline is working';

function app(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(RESPONSE_TEXT);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
}

module.exports = {
  app,
  RESPONSE_TEXT,
};
