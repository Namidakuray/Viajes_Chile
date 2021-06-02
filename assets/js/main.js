$(document).ready(function () {
  $("a").click(function (event){
    event.preventDefault();

    let chart = this.hash;

    $("html").animate({
      scrollTop: $(chart).offset().top -56,
    },
    800
    )
  });
  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover();
});

