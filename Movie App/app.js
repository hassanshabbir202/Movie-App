
// Define Variables
let genre = document.getElementById("genre");
let year = document.getElementById("year");
let lang = document.getElementById("lang");
let genreDisplay = document.getElementById("genreDisplay");
let yearDisplay = document.getElementById("yearDisplay");
let langDisplay = document.getElementById("langDisplay");
let url = document.getElementById("url");
let extractGenre;
let extractYear;
let extractLang;
let btn = document.getElementById("btn");


// Fetch the Data from JSON File

const fetchData = async () => {
   try{
    let res = await fetch("./data.json");
    let data = await res.json();
    data.forEach(element => {
        extractGenre = element.genres[0];
        extractYear = element.budget;
        extractLang = element.original_language;
        // 2000000
        // French
        if(genre.value == extractGenre){
          let saveGenreData = localStorage.setItem("name" , extractGenre);
          let getGenreData = localStorage.getItem("name");
          genreDisplay.innerHTML = `Best Movie : ${getGenreData}`;
          console.log(saveGenreData);
        }

        if(year.value == extractYear){
            let saveYearData = localStorage.setItem("year" , extractYear);
            let getYearData = localStorage.getItem("year");
            yearDisplay.innerHTML = getYearData;
            console.log(saveYearData)
        }


        if(lang.value == extractLang){
            let saveLangData = localStorage.setItem("language" , extractLang);
            let getLanData = localStorage.getItem("language");
            langDisplay.innerHTML = getLanData;
            console.log(saveLangData)
        }

        document.getElementById("image").src = url.value;
    })
   }catch(err){
    console.log("The Error is : " + err);
   }
}
 // call a function

const serachMovie = () => {
    fetchData();
    console.log(genre.value , year.value , lang.value);

    
}
btn.addEventListener("click" , serachMovie);



// Search Movie from records


