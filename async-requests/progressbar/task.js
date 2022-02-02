"use strict";

const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  xhr.upload.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      progress.value = (+(e.loaded) / +(e.total));
    }
  });   

  xhr.send(formData);
  e.preventDefault();
});