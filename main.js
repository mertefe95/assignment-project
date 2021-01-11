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




fetch("./data-json/relatedProducts.json").then(
  res =>{ 
    res.json().then(
      data=>{
        
        if(data.length > 0) {
          var temp = "";

          data.forEach((u, idx) => {
            temp += "<div class='product-container'>";
            temp += "<ul class='ul-item'>";
            temp += `<li class="li-item li-img"><img src="${u.img}" class="u-img" /></li>`; 
            temp += `<li class="li-item li-star-comment"><span class="star-span"><i class="fas fa-star"></i> ${u.rating}</span> <span class="u-comment">(${u.comment} Yorum)</span></li>`;
            temp += `<li class="li-item li-code"><p class="u-code">${u.code}</p></li>`;
            temp += `<li class="li-item li-title"><p class="u-title">${u.title}</p></li>`; 
            temp += `<li class="li-item li-price"><i class="fas fa-lira-sign"></i><span class="u-price"> ${u.price}</span></li>`;
            temp += `<li class="li-item li-kargo"><span class="span-kargo">BUGÜN KARGODA</span></li>`;
            temp += `<li class="li-item li-button-blue"><button type="submit" id="blue-button-${idx}" class="sepet-btn"><i class="fas fa-exchange-alt"></i><span class="span-sepet">SEPETE EKLE</span> </button></li>` 
            temp += "</ul>";
            temp += "</div>";

            
          })
          // close for loop

          document.getElementById("data-first").innerHTML = temp;

          data.forEach((u,idx) => {
            document.querySelector(`#blue-button-${idx}`).addEventListener('click',function(){
              var userProduct = {
                    title: u.title,
                    price: u.price,
                    img: u.img
                  };
                  localStorage.setItem(u.code, JSON.stringify(userProduct));
            })
          })
          
          
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
        
        if(data.length > 0) {
          var temp = "";

          data.forEach((u, idx) => {
            temp += "<div class='product-container'>";
            temp += "<ul class='ul-item'>";
            temp += `<li class="li-item li-img"><img src="${u.img}" class="u-img" /></li>`; 
            temp += `<li class="li-item li-star-comment"><span class="star-span"><i class="fas fa-star"></i> ${u.rating}</span> <span class="u-comment">(${u.comment} Yorum)</span></li>`;
            temp += `<li class="li-item li-code"><p class="u-code">${u.code}</p></li>`;
            temp += `<li class="li-item li-title"><p class="u-title">${u.title}</p></li>`; 
            temp += `<li class="li-item li-price"><i class="fas fa-lira-sign"></i><span class="u-price"> ${u.price}</span></li>`;
            temp += `<li class="li-item li-kargo"><span class="span-kargo">BUGÜN KARGODA</span></li>`;
            temp += `<li class="li-item li-button-blue"><button type="submit" id="blue-button-${idx}" class="sepet-btn"><i class="fas fa-exchange-alt"></i><span class="span-sepet">SEPETE EKLE</span> </button></li>` 
            temp += "</ul>";
            temp += "</div>";

            
          })
          // close for loop

          document.getElementById("data-second").innerHTML = temp;

          data.forEach((u,idx) => {
            document.querySelector(`#blue-button-${idx}`).addEventListener('click',function(){
              var userProduct = {
                    title: u.title,
                    price: u.price,
                    img: u.img
                  };
                  localStorage.setItem(u.code, JSON.stringify(userProduct));
            })
          })
          
          
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


