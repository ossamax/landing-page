var Btns = $(".btn");
var content = $(".imgs");

for (let i = 0; i <= Btns.length; i++) {
  Btns.eq(i).on("click", () => {
    content.removeClass("active");
    Btns.removeClass("active");
    content.eq(i).addClass("active");
    Btns.eq(i).addClass("active");
  });
}

const itemsWrapper = document.querySelector(".items_wrapper");
const carsoulimgs = document.querySelectorAll(".item");
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");

const slider = Array.from(itemsWrapper.children);
const sliderWidth = slider[0].getBoundingClientRect().width;

slider.forEach((slide, index) => {
  slide.style.left = (sliderWidth + 50) * index + "px";
});

let counter = 1;
let size = carsoulimgs[0].clientWidth + 40;
itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";

//move to the left
leftArrow.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  itemsWrapper.style.transition = "transform .3s ease-in-out";
  itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
});

//move to the right
rightArrow.addEventListener("click", () => {
  if (counter > 6) return;
  counter++;
  itemsWrapper.style.transition = "transform .3s ease-in-out";
  itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
});

itemsWrapper.addEventListener("transitionend", () => {
  if (carsoulimgs[counter].id === "lastclone") {
    counter = 1;
    itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carsoulimgs[counter].id === "firstclone") {
    counter = 6;
    itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
  }
});
