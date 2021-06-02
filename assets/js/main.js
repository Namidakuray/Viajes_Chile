$(document).ready(function () {
  $("a").click(function (event){
    event.preventDefault();

    let chart = this.hash;

    $("html").animate({
      scrollTop: $(chart).offset().top -5,
    },
    800
    )
  })
});
