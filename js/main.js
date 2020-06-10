function searchHandler() {
  $(".search__btn").click((e)=>{
    $(".search__btn").toggleClass("opened");
    $(".search__dashboard").toggleClass("opened");
    $(".search__layer").toggleClass("opened");
  })
}

function noticeSlick() {
  $(".slider").slick({
    autoplay: true
  })
}

function init() {
  $(document).ready((e)=>{
    noticeSlick();
    searchHandler();
  })
}

init();