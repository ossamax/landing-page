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
  slide.style.left = (sliderWidth + 40) * index + "px";
});

let counter = 1;
let size = carsoulimgs[0].clientWidth + 40;
itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";

console.log(counter);
//move to the left
leftArrow.addEventListener("click", () => {
  counter--;
  itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
});

//move to the right
rightArrow.addEventListener("click", () => {
  counter++;
  itemsWrapper.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
});

itemsWrapper.addEventListener("transitionend", () => {
  if (carsoulimgs[counter].id === "lastclone") {
    counter = carsoulimgs.length - 2;
    console.log(counter);
    itemsWrapper.style.transform = "translateX(-" + size + "px)";
  }
  if (carsoulimgs[counter].id === "firstclone") {
    counter = carsoulimgs.length;
    console.log(counter);
    itemsWrapper.style.transform = "translateX(-" + size + "px)";
  }
});
