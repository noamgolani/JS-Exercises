import $ from "jquery";
import math from "../helpers/math";

$("input[type='button']").on("click", (event) => {
  const value = event.target.value;
  if (value === "=") equelsClicked();
  else if (value === "Del") deleteClicked();
  else $(".result").val($(".result").val() + value);
});

function equelsClicked() {
  $(".result").val(math.calc($(".result").val()));
}

function deleteClicked() {
  $(".result").val("");
}
