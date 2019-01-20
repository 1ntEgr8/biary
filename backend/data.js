// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    message: {
        type: String,
        required: true
    },
    user: String,
    text: String,
    wordcount: Number,
    mostcommonword: String,
    sentiment: {
        type: Number,
        required: true
    },
    usersentiment: String,
    username: String,
    image: String
    },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
