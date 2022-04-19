console.log("hello world")

const APILink = "http://127.0.0.1:8000/reviews/"

let emotionSelect = document.getElementById("emotion");
let genreSelect = document.getElementById("genre");


// TODO get emotions from API
let emotions = []
const getEmotions = () => {
    query = APILink+"emotions"
    emotions = ['content', 'enthusiastic', 'annoyed', 'disappointed', 'sad', 'love']
}
getEmotions();

emotions.forEach(emotion => {
    option = document.createElement("option");
    option.value = emotion;
    option.text = emotion;
    emotionSelect.appendChild(option)
})

const populateTable = (query) => {
    // TODO make API call and then populate table
    reviewTable = document.getElementById("review-table")
}

// TODO get genres from the API
let genres = []
const getGenres = () => {
    query = APILink+"genres"
    genres = ["thriller", "science fiction", "fiction", "horror"]
}
getGenres(); 
genres.forEach(genre => {
    option = document.createElement("option");
    option.value = genre;
    option.text = genre;
    genreSelect.appendChild(option)
})

var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    console.log("submit")
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author-name").value;
    let rating = document.getElementById("rating").value;
    let genre = genreSelect.value;
    let emotion = emotionSelect.value;
    let query = APILink+"?"
    if (title){
        query += "title="+title+"&";
    }
    if (author){
        query += "author="+author+"&";
    }
    if (rating){
        query += "rating="+rating+"&";
    }
    if (genre){
        query += "genre="+genre+"&";
    }
    if (emotion){
        query += "emotion="+emotion+"&"
    }
    query = query.slice(0, -1)
    console.log(query)
    
  });



fetch(APILink).then(response => response.json())
  .then(data => console.log(data));