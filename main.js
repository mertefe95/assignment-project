var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.fa-long-arrow-alt-right',
    prevEl: '.swiper-button-prev',
  },
});


let arr;
let kek;

let model1 = document.querySelector(".one-cikan-model-1").textContent;

let model2 = document.querySelector(".one-cikan-model-2")
let model3 = document.querySelector(".one-cikan-model-3")
let model4 = document.querySelector(".one-cikan-model-4")


console.log(model1)

fetch('/data-json/bestSeller.json')
  .then(response => response.json())
  .then(data => document.querySelector(".one-cikan-model-1").textContent = data[0].title)
  .catch(err => console.log(err));

  

  console.log(model1)
  
  fetch('/data-json/relatedProducts.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(error));

  
