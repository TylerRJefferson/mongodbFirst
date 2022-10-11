import { MongoClient } from "mongodb";

import { uri } from "./credentials.js";

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

//console.log( await moviesCollection.findOne({}) )
let query = {title: { $regex: /star wars/i}} //memorize this, used to search by keywords, case insensitive
let movieArray = await moviesCollection
  .find(query)
  //.limit(3)
  .toArray() //make it into an array

for (let i = 0; i < movieArray.length; i++){
  //console.log(movieArray[i].title)
}

//let firstMovie = movieArray[0]
//console.log(firstMovie.title)

// console.log(`There are ${movieArray.length} movies in my list`)



// add a new movie.....
const newMovie = {
  title: "The Boca Code Story",
  rating: "R",
  genre: ["Comedy"],
  releaseDate: "2022/12/16",
}

const results = await moviesCollection.insertOne(newMovie)
console.log("Results of insert", results)