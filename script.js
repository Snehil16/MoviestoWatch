
let outputGridElement = document.getElementById('outputGrid');


let moviedatabase = [
  {
    "itemTitle" : "Game Night",
    "year" : "2018",
    "genre": ["Action", "Comedy", "Crime"],
    "image" : "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg"
  },
  {
    "itemTitle" : "The Hurricane Heist",
    "year" : "2018",
    "genre" : ["Action", "Thriller"],
    "image" : "https://m.media-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    "itemTitle" : "Tomb Raider",
    "year" : "2018",
    "genre" : ["Action", "Adventure"],
    "image" : "https://m.media-amazon.com/images/M/MV5BNzMzODVjMWUtYmIxZS00NDlkLTlmNTktNjI5NTdhZjUzYzY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    "itemTitle" : "Flower",
    "year" : "2017",
    "genre" : ["Comedy", "Drama"],
    "image" : "https://m.media-amazon.com/images/M/MV5BYzViOTBmMGUtODBlMi00YzYzLThiM2MtOGFlMzZkNWU4NDRjXkEyXkFqcGdeQXVyODE0MDY3NzY@._V1_.jpg"
  },
  {
    "itemTitle" : "Isle of Dogs",
    "year" : "2018",
    "genre" : ["Animation", "Adventure","Comedy"],
    "image" : "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
  },
  {
    "itemTitle" : "Sherlock Gnomes",
    "year" : "2018",
    "genre" : ["Animation", "Adventure","Comedy"],
    "image" : "https://m.media-amazon.com/images/M/MV5BMTc2NjUzODMxMF5BMl5BanBnXkFtZTgwMzMwMDIzNDM@._V1_.jpg"
  },
  {
    "itemTitle" : "The Endless",
    "year" : "2017",
    "genre" : ["Horror", "Sci-Fi", "Thriller"],
    "image" : "https://m.media-amazon.com/images/M/MV5BNjA5OTI1MjgwMl5BMl5BanBnXkFtZTgwMDU2NzY2NDM@._V1_.jpg"
  },
  {
    "itemTitle" : "Beirut",
    "year" : "2018",
    "genre" : ["Drama","Thriller"],
    "image" : "https://resizing.flixster.com/OpWF0oS-eMzJ7w2Kp_mtgpsqXYY=/206x305/v2/https://flxt.tmsimg.com/assets/p14757770_p_v8_aa.jpg"
  },
  {
    "itemTitle" : "Rampage",
    "year" : "2018",
    "genre" : ["Action", "Adventure", "Sci-Fi"],
    "image" : "https://upload.wikimedia.org/wikipedia/en/6/6b/Rampage_teaser_film_poster.jpg"
  }
];


for (var i = 0; i < moviedatabase.length; i++) {
  createElementProper(moviedatabase[i]);
}


function createElementMessy(incomingJSON) {

  /// Start our HTML chunk
  let incompleteHTML = "<div class=\"moviePoster\" >";

  outputGridElement.innerHTML = incompleteHTML;
  console.log(incompleteHTML);

}


function createElementProper(incomingJSON){
  let newContentElement = document.createElement("div");

  // newContentElement.src = incomingJSON['image'];
  newContentElement.classList.add('moviePoster');

  /// Create & add footer image
  let newImage = document.createElement("img");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  outputGridElement.appendChild(newContentElement);

  let infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  newContentElement.appendChild(infoDiv);


  let newContentHeading = document.createElement("h3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['itemTitle'];
  infoDiv.appendChild(newContentHeading);

  let newContentYear = document.createElement("h4");

  newContentYear.classList.add('releaseYear');
  newContentYear.innerText = "Released: " + incomingJSON['year'];
  infoDiv.appendChild(newContentYear);


  let newContentGenre = document.createElement("h4");

  newContentGenre.classList.add('genres');
  newContentGenre.innerText = "Genres: ";
  infoDiv.appendChild(newContentGenre);

  let newContentGenreList = document.createElement("ul");
  infoDiv.appendChild(newContentGenreList);

  for (var i = 0; i < incomingJSON['genre'].length; i++) {
    var currentGenreString = incomingJSON['genre'][i];
    var newGenreItem = document.createElement("li");
    newGenreItem.innerText = currentGenreString;
    newContentGenreList.appendChild(newGenreItem);
  }
}
