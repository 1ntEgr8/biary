// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
let text = '';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the document
function detectSentiment(){
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;
    console.log(`Document sentiment:`);
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);

    const sentences = results[0].sentences;
    sentences.forEach(sentence => {
      console.log(`Sentence: ${sentence.text.content}`);
      console.log(`  Score: ${sentence.sentiment.score}`);
      console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}

export {language, client, text, document, }
