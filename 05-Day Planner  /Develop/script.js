// var inputEl = [];
// var day = moment();
// const saveBtnEl = document.getElementById("saveBtn");

// $(".saveBtn").on("click", function () {
//   var inputEl = $(this)("form-control");
//   console.log(inputEl);
// });

// $("#8am").data()(localStorage.getItem("8am"));
$(document).ready(function () {
  // Here we use jQuery to select the header with "click-me" as its ID.
  // Notice I have the #click-me, click, and then the function
  // So $("#id|.class|element").on("action", function(){});
  // And so whenever it is clicked...
  $("#saveBtn").on("click", function () {
    alert("I've been clicked!");
  });
});
