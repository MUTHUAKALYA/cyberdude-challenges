//1) Create a json file with the places you wanna to visit ✅
//2) creating a folder named places ✅
//3) Creating folders for the location available in json file 

const fs = require("fs");
const favPlaces = require("./data/favouritePlaces.json")
console.log(favPlaces)
// fs.mkdir("places",(error)=>{ error ? console.log(error) : console.log("File written successfully")})
favPlaces.map((location)=>{
    // console.log(places)
    fs.mkdir(`places/${location.id} ) ${location.location}`,(error)=>{error ? console.log(error) : console.log("folder created successfully")})
    location.placesToVisit.map((places)=>{
        fs.writeFile(`places/${location.id} ) ${location.location}/${places.placeName}.txt`,`${places.aboutThePlace}`,()=>{})
    })


})