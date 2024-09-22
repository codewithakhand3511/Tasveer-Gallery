document.querySelector("#search").addEventListener("keyup", userSearch);

function userSearch() {
   const caption = document.querySelectorAll("a[data-caption]");
   let captionsList = [];

   for (let i = 0; i < caption.length; i++) {
      let captions = caption[i].getAttribute("data-caption");
      captionsList.push(captions.toLowerCase());
      let searchVar = document.querySelector("#search");
      searchVar = searchVar.value.toLowerCase();
      if (captionsList[i].indexOf(searchVar) > -1) {
         caption[i].style.display = "block";
      } else {
         caption[i].style.display = "none";
      }
   }
}

console.log(userSearch());
