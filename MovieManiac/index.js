//const axios = require('axios');
//const fs = require('fs');
//const path = require('path')
const link = ' http://www.omdbapi.com/?i=tt3896198&apikey=e602044f&r=json&s=';
function Search() {
    let search = document.getElementById('search').value;
    movies(search);
}

function movies(search) {
    axios
      .get(link + search)
      .then((res) => {
        console.log(res);
        //let movieitem= res;
        let movies = res.data.Search;
        movies.forEach(movieitem => {
            document.getElementById('desc').innerHTML+=`<p>Title: ${movieitem.Title}<br>Year: ${movieitem.Year}<br>IMDb ID:${movieitem.imdbID}<br><hr></p>`;
        });
        //document.getElementById('desc').innerHTML=`<p>Title: ${movieitem.data.Title}<br>Actors: ${movieitem.data.Actors}<br>IMDb Rating: ${movieitem.data.Ratings[0].Value}<br>Year of release: ${movieitem.data.Year}<br>Genre: ${movieitem.data.Genre}</p`;
        showOutput(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  //function showOutput(res) {
    //document.getElementById(res).innerHTML=`${res.data.Actors}`;
  
  
  /*function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.data.Title}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }*/