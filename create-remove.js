/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */

        console.log(url)
        const breed = url.split("/")[4]
        console.log(breed)

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const li = document.createElement(li);

        const figure = document.createElement("figure");
        li.appendChild(figure);
        //console.log(li);

        const image = document.createElement("img");
        image.src = url

        const figCap = document.createElement("figCaption");
        figCap.innerText = breed;

        figure.append(img, figCap);

        /* Add the new dog card as a child to the ul in the .gallery element */
        const ul = document.querySelector("ul");
        ul.appendChild(li)

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const doomedDog = document.querySelector("li")

    /*-------------------- Remove the first dog card --------------------- */
    doomedDog.remove()
});

const ul = document.querySelector("ul");
ul.addEventListener("click", () => {
    console.log("click on me you did")
})

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e.target);
  if(e.target === ul) {
    console.log("you clicked ul")
  } else {
    console.log("not ul")
  }
})

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const dogsLi = document.getElementsByTagName("li");
    const doomesDog = dogsLi[dogsLi.length[-1]]
    console.log(dogsLi)

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
