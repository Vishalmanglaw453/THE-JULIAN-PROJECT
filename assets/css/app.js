  function openNav() {
      document.getElementById("navbar").classList.toggle("start-0");
      document.body.classList.toggle("overflow_hidden");
      document.querySelector(".menu").classList.toggle("cross")
  }
$('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    arrows:false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1118,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.slick').slick({
    dots: false,
    infinite: true,
    autoplay:false,
    speed: 1000,
    slidesToShow: 1,
    prevArrow:".slider-left-btn",
    nextArrow:".slider-right-btn",
    Arrows:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1118,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          Arrows:false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
