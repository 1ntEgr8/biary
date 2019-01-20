const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const cors = require('cors');
const language = require('@google-cloud/language');

const API_PORT = 3001;
const app = express();
const router = express.Router();
app.use(cors());

// this is our MongoDB database
const dbRoute = "mongodb://jpaden:Theking1@ds159574.mlab.com:59574/sampledb";
const nlpClient = new language.LanguageServiceClient();

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  console.log(req.body);
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  Data.find({

  })

  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  /*if ((!id && id !== 0) || !message) {
    */
  // if (!message) {
  //   return res.json({
  //     success: false,
  //     error: "INVALID INPUTS"
  //   });
  // }

  data.message = req.body.message;
  data.sentiment = req.body.sentiment;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/analyzeSentiment", (req, res) => {
    const diaryPost = req.body.text;
    console.log(diaryPost);

    const document = {
        content: diaryPost,
        type: "PLAIN_TEXT"
    };

    nlpClient
      .analyzeSentiment({ document: document })
      .then(results => {
          const sentiment = results[0].documentSentiment;

          console.log(`Sentiment score: ${sentiment.score}`);
          console.log(`Sentiment magnitude: ${sentiment.magnitude}`);

          return res.json({
             sentiment: sentiment.score
         });
     });
})

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
