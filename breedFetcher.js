const request = require('request');

const catBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (err, res, body) => {
  // handle errors
  if (err) throw `Oops, something went wrong: ${err}`;

  if (body === '[]') {
    // Empty array returned by API if nothing matches the query
    console.log('Sorry, no breed found!');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});