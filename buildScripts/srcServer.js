import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Useful if doing client-side routing.
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('/calculations', function(req, res) {
  // Hard coding for simplicity.
  // Pretend this hits a real database
  res.json([
    {"id": 1,"newMpg":24,"tradeMpg":18,"pricePerGallon":"$1.34","milesDrivenPerMonth":954},
    {"id": 2,"newMpg":28,"tradeMpg":39,"pricePerGallon":"$2.96","milesDrivenPerMonth":298},
    {"id": 3,"newMpg":44,"tradeMpg":31,"pricePerGallon":"$3.72","milesDrivenPerMonth":264}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
