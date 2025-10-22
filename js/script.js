$(document).ready(function () {
  console.log("로드완료");

  $(".dust").on("click", function () {
    $(this).fadeOut(600);

    $(".totoro").addClass("jump");

    $(".totoro").one("animationend", function () {
      $(".satsuki").addClass("sa-bounce");
      $(".sign").addClass("si-bounce");
    });
  });
});
