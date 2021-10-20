const http = require('http');
const db = require('./db');

const port = 5000;

async function notFound(req, res) {
  res.writeHead(404, 'Not found');
  res.end();
}

async function apiHandler(req, res) {
  const { method, body } = req;

  const options = async () => {
    res.writeHead(200);
    res.end();
  };

  const post = async () => {
    const age = body.age && +body.age ? +body.age : false;
    const name = body.name ? body.name : false;
    const ability =
      body.ability && typeof body.ability === 'object' ? body.ability : false;

    const bad = (msg) => {
      res.writeHead(400, msg);
      res.end();
    };

    if (!age || !name || !ability) return bad('Bad req');
    if (db.minAge > age || db.maxAge < age) return bad('Bad age');
    if (db.nameNotEqual.includes(name)) return bad('Bad name');
    if (
      !ability
        .map((abi) => db.ability.includes(abi))
        .reduce((val, all) => val || all, false)
    )
      return bad('Bad ability');

    res.writeHead(200, 'Signed up');
    res.end();
  };

  switch (method) {
    case 'OPTIONS':
      return options();
    case 'POST':
      return post();
    default:
      return notFound();
  }
}

async function handler(req, res) {
  switch (req.url) {
    case '/api':
      apiHandler(req, res);
      break;
    default:
      notFound(req, res);
      break;
  }
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    try {
      body = JSON.parse(Buffer.concat(body).toString());
      req.body = body;
    } catch {
      req.body = {};
    }
    handler(req, res);
  });
});

server.listen(5000, () => {
  console.log(`Listening on http://localhost:${port}`);
});
