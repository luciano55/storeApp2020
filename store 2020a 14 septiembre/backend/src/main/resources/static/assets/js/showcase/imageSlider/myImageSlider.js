export  function MyImageSlider(){

const $bodyImg = document.getElementById("bodyImg");
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

const setBackground = () => {
  //alert(slides[activeSlide].style.backgroundImage);
  //$bodyImg.style.backgroundImage = "url('assets/img/imageModel/zoom-bg.jpg')";
  //slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.style.display = "none";
  });
  slides[activeSlide].classList.add("active");
   slides[activeSlide].style.display = "block";

};

rightButton.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setBackground();
  setActiveSlide();
});

leftButton.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setBackground();
  setActiveSlide();
});
setActiveSlide();
//setBackground();


}