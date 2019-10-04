// import './animation';
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
let doggos = document.querySelector(".doggos");
let button = document.createElement("button");
let body = document.querySelector("body");
button.innerText = "click this";
doggos.appendChild(button);
let img = document.createElement("img");
img.setAttribute("class", "box");
button.addEventListener("click", () =>{
    newDog()
});
doggos.appendChild(img);

newDog = () => {
  const promise = fetch(BREEDS_URL);

  
  promise
    .then(response => {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(breeds => {
      img.setAttribute("src", breeds.message);
      console.log(breeds);

    });
};

console.log("this will log first");
