// var inputEl = [];
// var day = moment();
// const saveBtnEl = document.getElementById("saveBtn");

// $(".saveBtn").on("click", function () {
//   var inputEl = $(this)("form-control");
//   console.log(inputEl);
// });

// $("#8am").data()(localStorage.getItem("8am"));

// Here we use jQuery to select the header with "click-me" as its ID.
// Notice I have the #click-me, click, and then the function
// So $("#id|.class|element").on("action", function(){});
// And so whenever it is clicked...
$(document).ready(function () {
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(event, "I've been clicked!");
  });

  $("#clear").on("click", function () {
    // Inside the on-click event...
    // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
    // We use find here and once its found it will empty the element
  });
});
