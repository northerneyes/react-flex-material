const fs = require('fs');
const {LIBRARY_NAME} = require('../webpack.config');

fs.writeFile('lib/index.js', `require('./${LIBRARY_NAME}.css');

module.exports = require('./${LIBRARY_NAME}.js');
`, err => {
  if (err) throw err;
  console.log('success');
});
