$(document).ready(function () {
  console.log("로드완료");

  $(".dust").on("click", function () {
    $(this).fadeOut(600);

    $(".totoro01").addClass("jump");
    $("#Right_arm").addClass("arm_move");
    $("#Right_arm-2").addClass("R_arm_move");
    $("#Umbrella_behind").addClass("umbrella_behind_move");
    $("#Umbrella").addClass("umbrella_move");
    $("#Leaf").addClass("leaf_move");

    $(".totoro01").one("animationend", function () {
      $(".satsuki01").addClass("sa-bounce");
      $("#Left_leg").addClass("L_leg_move");
      $("#Right_leg").addClass("R_leg_move");
      $("#Sa_Umbrella").addClass("Sa_umbrella_move");
      $("#Sa_Umbrella_behind").addClass("Sa_umbrella_B_move");
      $(".sign01").addClass("si-bounce");
    });
  });
});
