function hambugerHandler() {
	$(".header__hambuger").click((e)=>{
		$(".mobile").addClass("opened");
		$("body").addClass("overflow");
	})
	$(".mobile__item--close").click((e)=>{
		e.preventDefault();
		$(".mobile").removeClass("opened");
		$("body").removeClass("overflow");
	})
}

function footerHandler() {
	$(".accordion").click((e)=>{
		$(".accordion").toggleClass("opened");
	})
}

function searchHandler() {
  $(".search__btn").click((e)=>{
    $(".search__btn").toggleClass("opened");
    $(".search__dashboard").toggleClass("opened");
    $(".search__layer").toggleClass("opened");
    $("body").toggleClass("overflow");
  })
  
  $(window).scroll((e)=>{
    if($(document).scrollTop() > $(".notice").height()) {
      $(".header").addClass("is-sticky");
      $(".search__btn").addClass("is-sticky");
    } else if ($(document).scrollTop() < $(".notice").height()) {
      $(".header").removeClass("is-sticky");
      $(".search__btn").removeClass("is-sticky");
    }
  })
}

function noticeSlick() {
  $(".slider").slick({
    autoplay: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  })
}

function init() {
  $(document).ready((e)=>{
    noticeSlick();
    searchHandler();
		footerHandler();
		hambugerHandler();
  })
}

init();