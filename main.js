var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var mySwiper = new Swiper('.swiper-two', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination-new',
    clickable: true
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-new',
    prevEl: '.swiper-button-prev-new',
  },

 
})


fetch("./data-json/relatedProducts.json").then(
  res =>{ 
    res.json().then(
      data=>{
        
        if(data.length > 0) {
          var temp = "";

          data.forEach((u) => {
            temp += "<div class='product-container'>";
            temp += "<ul class='ul-item'>";
            temp += `<li class="li-item li-img"><img src="${u.img}" class="u-img" /></li>`; 
            temp += `<li class="li-item li-star-comment"><span class="star-span"><i class="fas fa-star"></i> ${u.rating}</span> <span class="u-comment">(${u.comment} Yorum)</span></li>`;
            temp += `<li class="li-item li-code"><p class="u-code">${u.code}</p></li>`;
            temp += `<li class="li-item li-title"><p class="u-title">${u.title}</p></li>`; 
            temp += `<li class="li-item li-price"><i class="fas fa-lira-sign"></i><span class="u-price"> ${u.price}</span></li>`;
            temp += `<li class="li-item li-kargo"><span class="span-kargo">BUGÜN KARGODA</span></li>`;
            temp += `<li class="li-item li-button-blue"><button type="submit" onclick="localStorage.setItem('${u.code}', '${u.title}')" id="blue-button" class="sepet-btn"><i class="fas fa-exchange-alt"></i><span class="span-sepet">SEPETE EKLE</span> </button></li>` 
            temp += "</ul>";
            temp += "</div>";
          })
          // close for loop

          document.getElementById("data-first").innerHTML = temp;

        }
      }
    )
  }
)

const submitButton = document.querySelector('.sepet-btn');




fetch("./data-json/bestSeller.json").then(
  res =>{ 
    res.json().then(
      data=>{
        
        var userProduct = {
          img: "45",
          code: "56",
        };

        localStorage.setItem('newUserNew', JSON.stringify(userProduct));
  
        if(data.length > 0) {
          var temp = "";


          data.forEach((u) => {
            temp += "<div class='swiper-slide'>";
            temp += "<ul class='ul-item'>";
            temp += `<li class="li-item li-img"><img src="${u.img}" class="u-img" /></li>`; 
            temp += `<li class="li-item li-star-comment"><span class="star-span"><i class="fas fa-star"></i> ${u.rating}</span> <span class="u-comment">(${u.comment} Yorum)</span></li>`;
            temp += `<li class="li-item li-code"><p class="u-code">${u.code}</p></li>`;
            temp += `<li class="li-item li-title"><p class="u-title">${u.title}</p></li>`; 
            temp += `<li class="li-item li-price"><i class="fas fa-lira-sign"></i><span class="u-price"> ${u.price}</span></li>`;
            temp += `<li class="li-item li-kargo"><span class="span-kargo">BUGÜN KARGODA</span></li>`;
            temp += `<li class="li-item li-button-blue"><button type='submit' class='sepet-btn'><i class="fas fa-exchange-alt"></i><span class="span-sepet">SEPETE EKLE</span> </button></li>` 
            temp += "</ul>";
            temp += "</div>";
          })
        

          document.getElementById("cok-satanlar-id").innerHTML = temp;
        }
      }
    )
  }
)



const sepetimLi = document.querySelector('.span-sepetim');




const sepet = document.getElementById("sepet-li");
const kek = document.querySelector(".kek-div");

sepet.addEventListener("mouseenter", function( event ) {

  kek.style.visibility = "visible";

})

sepet.addEventListener("mouseleave", function( event ) {
  kek.style.visibility = "hidden";
})


