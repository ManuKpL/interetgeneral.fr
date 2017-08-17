const express = require('express');
const resolve = require('path').resolve;

const rootDir = resolve(__dirname, '..');
const host    = process.env.HOST || '0.0.0.0';
const port    = process.env.PORT || 3000;

const app = express();
app.use(express.static(`${rootDir}/www`));
app.use((req, res) => { res.redirect('/'); });
app.listen(port, host, () => { console.info('Server started, see:', `http://${host}:${port}/`); });
