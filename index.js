const { fetchBreedDescription } = require('./breedFetcher');

const catBreed = process.argv[2];

fetchBreedDescription(catBreed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});