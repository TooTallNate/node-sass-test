const http = require('http')
const sass = require('node-sass')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')

  const styles = `
  $font-stack:    Helvetica, sans-serif;
  $primary-color: #333;

  body {
    font: 100% $font-stack;
    color: $primary-color;
  }
  `;

  const css = sass.renderSync({ data: styles }).css.toString('utf8')

  res.end(`
    <html>
      <head>
        <style>
        __STYLES__
        </style>
      </head>
      <body>
        Hello, node-sass!
      </body>
    </html>
  `.replace('__STYLES__', css))
});

server.listen(0, () => console.log(`http://127.0.0.1:${server.address().port}`))
