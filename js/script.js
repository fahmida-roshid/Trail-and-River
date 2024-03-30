
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 5,
        perPage: 4,
        breakpoints: {
          1400: {
            perPage: 5,
          },
          1200: {
            perPage: 5,
          },
          992: {
            perPage: 4,
          },
          768: {
            perPage: 3,
          },
          576: {
            perPage: 2,
          },
        },
        rewind : true,
        pagination : false,
    } );
    splide.mount();
  } );

  const cartbtn1 = document.getElementById("add-cart1");

  function addcartfunction1(){
    cartbtn1.innerHTML = "Added to Cart"
  };
  const cartbtn2 = document.getElementById("add-cart2");

  function addcartfunction2(){
    cartbtn2.innerHTML = "Added to Cart"
  };
  const cartbtn3 = document.getElementById("add-cart3");

  function addcartfunction3(){
    cartbtn3.innerHTML = "Added to Cart"
  };
  const cartbtn4 = document.getElementById("add-cart4");

  function addcartfunction4(){
    cartbtn4.innerHTML = "Added to Cart"
  };

  
  window.onscroll = function (){
    const topheader = document.getElementById("topp-header");

    if(window.pageYOffset > 400){
      topheader.classList.add("sticky");
    }else{
      topheader.classList.remove("sticky");
    }
  }
