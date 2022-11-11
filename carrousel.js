
const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".prev");
const pictures = document.querySelectorAll(".slider-img");

let position = 0;
pictures[position].style.display = "block";

function hideIMG() {
  pictures[position].style.display = "block";
  for (let i = 0; i < pictures.length; i++) {
    if (i !== position) pictures[i].style.display = "none";
  }
}

function control() {
  if (position >= 0 && position < pictures.length) {
    hideIMG();
  } else if (position === pictures.length) {
    position = 0;
    hideIMG();
  } else {
    position = pictures.length - 1;
    hideIMG();
  }
}

nextArrow.addEventListener("click", () => {
  position++;
  control();
});

prevArrow.addEventListener("click", () => {
  position--;
  control();
});

// Auto slide
setInterval(function() {
  position++;
  control();
}, 3000);