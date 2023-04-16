const http = require('http');

const hostname = process.env.HOSTNAME || '127.0.0.1' ;
const port = process.env.PORT || 3002 ;

let Year = 1750;
let check = true;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (check) {
    console.log(`Movie ${Year} := https://www.bing.com/?q=movie+${Year}`);
  }
  res.end(`
    <!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta http-equiv="refresh" content="6; url='https://www.bing.com/?q=movie+${Year}'" />

        <title> Microsoft Rewards </title>
      </head>

      <body>
        <h1>
          Movie ${Year} := <a href="https://www.bing.com/?q=movie+${Year}">
                            https://www.bing.com/?q=movie+${Year}
                          </a> .
        </h1>
      </body>

      <script>
        console.clear();
        console.log("Movie ${Year} := https://www.bing.com/?q=movie+${Year}");
      </script>
    </html>
  `);
  check?(Year==1752?Year=1750:Year++):null;
  check=!check;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/*
  http://127.0.0.1:3002/
  for ( let Year = 1750 ; Year <= 1975 ; Year ++ )
  <h1> Please Wait ! </h1>
  <meta http-equiv="refresh" content="5; url='https://www.bing.com/?q=movie+${Year}'" />
  window.location.assign("https://www.bing.com/?q=movie+"+${Year});
  window.location.href="https://www.bing.com/?q=movie+"+${Year};
*/