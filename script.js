const searchForm = document.getElementById("search-app");
const searchBox = document.getElementById("search-text");
const searchResult = document.getElementById("search-result");
const searchShow = document.getElementById("show");

let keyword = "";
let page = 1


 async function searchImages(){
 keyword = searchBox.ariaValueMax;
 const url = `https://api.unsplash.com/photos/?page=${page}&query=${keyword}&client_id=${accessKey}`;
 }g